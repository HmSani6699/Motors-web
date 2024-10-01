import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../layout/MainLayout";
import { LoginSocialGoogle } from "reactjs-social-login";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import LinkedInLogin from "./LinkedInLogin";

const REDIRECT_URI = "https://www.eshikhon.site";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { getUserData } = useContext(AuthContext);

  const [profile, setProfile] = useState(null);
  const clientId =
    "480657913817-0b2vecvlbq4l6lje19m465ems23kujfh.apps.googleusercontent.com" ||
    "";
  const clientSecret = "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";

  const fetchProfileData = async (code) => {
    try {
      // Exchange authorization code for access token
      const tokenResponse = await axios.post(
        "https://oauth2.googleapis.com/token",
        {
          code,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: REDIRECT_URI,
          grant_type: "authorization_code",
        }
      );
      const accessToken = tokenResponse.data.access_token;

      // Fetch user profile data
      const profileResponse = await axios.get(
        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // console.log(profileResponse);
      setProfile(profileResponse?.data);

      const res = await axios.post(
        "https://apis.eshikhon.site/api/auth/google-login",
        profileResponse?.data
      );

      console.log(res);
      if (res?.data?.success) {
        window.localStorage.setItem("token", res?.data?.token);
        window.localStorage.setItem("user", JSON.stringify(res?.data?.user));
        getUserData(res?.data?.token);
        toast.success(res?.data?.message);
        console.log(res?.data?.message);
        navigate("/");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const handleFacebookCallback = async (response) => {
    if (response?.status === "unknown") {
      console.error("Something went wrong with Facebook Login.");
      return;
    }
    try {
      const payload = {
        name: response?.name,
        email: response?.email,
      };

      setProfile(payload);

      const res = await axios.post(
        "https://apis.eshikhon.site/api/auth/facebook-login",
        payload
      );

      if (res?.data?.success) {
        window.localStorage.setItem("token", res?.data?.token);
        window.localStorage.setItem("user", JSON.stringify(res?.data?.user));
        getUserData(res?.data?.token);
        toast.success(res?.data?.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <div>
      <div className="w-full flex justify-center mt-2.5 border border-[#E3E5E8] rounded-md">
        <LoginSocialGoogle
          client_id={clientId}
          // onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            // setProfile(data);
            console.log(data);
            fetchProfileData(data?.code);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <button
            // onClick={handleGoogleLogin}
            type="button"
            className="text-[14px] font-[500] w-full font-Baloo text-[#8C8F91] bg-white flex items-center justify-center py-[8px] px-5 gap-2"
          >
            <img alt="icon" src={google} />
            Log in with Google
          </button>
        </LoginSocialGoogle>
      </div>

      <div>
        <div className="flex justify-center mt-2.5 border border-[#E3E5E8] py-[8px] px-5 rounded-md gap-2">
          <img className="w-[24px]" alt="Facebook icon" src={facebook} />
          <FacebookLogin
            appId="519278723801429"
            autoLoad={false}
            fields="name,email,picture"
            callback={handleFacebookCallback}
            cssClass="my-facebook-button-class"
            redirectUri={REDIRECT_URI}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                type="button"
                className="text-[14px] font-[500] w-full font-Baloo text-[#8C8F91] bg-white flex items-center border border-[#E3E5E8] justify-center  gap-2 "
              >
                Log in with Facebook
              </button>
            )}
          />
        </div>
      </div>
      <div className="flex justify-center mt-2.5">
        <LinkedInLogin />
      </div>
    </div>
  );
};

export default SocialLogin;

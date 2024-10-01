import { useLinkedIn } from "react-linkedin-login-oauth2";
import { useState } from "react";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import axios from "axios";

const LinkedInLogin = () => {
  const [userData, setUserData] = useState(null);

  const { linkedInLogin } = useLinkedIn({
    clientId: "86cg0kn0d21okv", // Your actual client ID
    redirectUri: `${window.location.origin}/linkedin`, // Redirect URL

    onSuccess: async (code) => {
      console.log("Authorization Code:", code);

//       const fetchLinkedInProfile = async (accessToken) => {
//         try {
         
// console.log({accessToken});

//           const profileResponse = await axios.get(
//             "https://api.linkedin.com/v2/userinfo",
//             {
//               headers: {
//                 Authorization: `Bearer ${accessToken}`,
//               },
//             }
//           );
//           const profileData = await profileResponse.json();
//           console.log(profileData);
//         } catch (error) {
//           console.error("Error fetching LinkedIn profile:", error);
//         }
//       };

//       // Example usage (you would replace 'yourLinkedInToken' with the actual token you received)

//       fetchLinkedInProfile(code);
    },
    onError: (error) => {
      console.error("Login Error:", error);
    },
    scope: "openid profile email",
    // scope: "r_liteprofile r_emailaddress",
  });


  return (
    <div>
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Sign in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
      />

      {/* {userData && (
        <div>
          <h3>User Profile:</h3>
          <pre>{JSON.stringify(userData.profile, null, 2)}</pre>
          <h3>User Email:</h3>
          <p>{userData.email}</p>
        </div>
      )} */}
    </div>
  );
};

export default LinkedInLogin;

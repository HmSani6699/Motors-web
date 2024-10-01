import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import Basis_logo from "../../assets/images/members-logo (1).png";
import SEIP_logo from "../../assets/images/members-logo (2).png";
import e_CAB_logo from "../../assets/images/members-logo (3).png";
import National_Speech_Debate_logo from "../../assets/images/members-logo (4).png";
import National_Institute_Fashion_logo from "../../assets/images/members-logo (5).png";
import JCI_Dhaka_logo from "../../assets/images/members-logo (6).png";

const WeAreMembers = () => {
    return (
        <>
            <div className="py-24 we_are_member_bg bg-center">
                <Wrapper>
                    <div className="text-center">
                        <h2 className="text-white text-4xl font-semibold mb-10">আমরা যাদের সদস্য</h2>
                        <div className="w-full p-10 mx-auto bg-white rounded-[10px] grid grid-cols-2 md:grid-cols-6 gap-10">
                            <div className="flex justify-center">
                                <img
                                    src={Basis_logo}
                                    alt="BASIS"
                                    className="w-[111px] md:w-[128px] lg:w-[168px]"
                                />
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src={SEIP_logo}
                                    alt="SEIP"
                                    className="w-[118px] md:w-[135px] lg:w-[177px]"
                                />
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src={e_CAB_logo}
                                    alt="e-CAB"
                                    className="w-[81px] md:w-[93px] lg:w-[121px]"
                                />
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src={National_Speech_Debate_logo}
                                    alt="National Speech & Debate Association"
                                    className="w-[103px] md:w-[119px] lg:w-[155px]"
                                />
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src={National_Institute_Fashion_logo}
                                    alt="National Institute of Fashion"
                                    className="w-[33px] md:w-[40px] lg:w-[50px]"
                                />
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src={JCI_Dhaka_logo}
                                    alt="JCI Dhaka Ace"
                                    className="w-[76px] md:w-[88px] lg:w-[115px]"
                                />
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default WeAreMembers;

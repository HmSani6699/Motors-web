import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import { scrollToTop } from '../../api/helper';

const TermsAndCondition = () => {
    scrollToTop();
    return (
        <>
            <div className="py-8 bg-[#F5F5F5]">
                <Wrapper>
                    <div className=" flex items-center">
                        <img src={home} alt="icon" className="mx-2 mb-1" />
                        <p className="text-primary_color font-[500]">হোম</p>
                        <img src={arrow} alt="icon" />
                        <p className="text-[#9096A2]">যোগাযোগ</p>
                    </div>
                    {/*  */}
                    <div className='flex flex-col lg:flex-row gap-[39px] py-10'>
                        {/* left side card */}
                        <div>
                            <div className='w-full md:w-[326px] bg-[#F9FAFB] border border-gray-200 p-8 rounded-[8px] '>
                                <div className='flex flex-col gap-6'>
                                    <h1 className='text-[#111928] text-[16px] font-[700] leading-[24px] '>LEGAL</h1>
                                    <div className='flex flex-col gap-2.5'>
                                        <h1 className='text-[#20AC90] text-[16px] font-[500] leading-[24px] '>e-Shikhun Market Terms</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>Author Terms</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>Affiliate Program Terms</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>Privacy Policy</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>Terms and Conditions</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>API Services</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>Acceptable Use Policy</h1>
                                    </div>
                                    <div className="">
                                        <button
                                            type="button"
                                            className="text-[14px] font-[500] w-full font-Baloo text-[#FFF] bg-[#20AC90] py-[8px] rounded-[8px]"
                                        >
                                            Got a question? Contact us.
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* right side article */}

                        <div>
                            <div className='flex flex-col gap-8'>
                                <h1 className='text-[#111928] text-[20px] md:text-[24px]  font-[800] lg:font-[700] leading-[28px] md:leading-[36px] '>e-Shikhun Terms and Conditions</h1>
                                <div>
                                    <h1 className='text-[#111928] text-[20px] md:text-[24px]  font-[800] lg:font-[700] leading-[28px] md:leading-[36px] '>Welcome to e-Shikhun</h1>
                                    <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Crafty Dwarf LLC ("Company", “we”, “us”, or “our”), concerning your access to and use of the https://themesberg.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). The Site provides an online marketplace for the following goods, products, and/or services: website themes and templates (the “Marketplace Offerings”). In order to help make the Site a secure environment for the purchase and sale of Marketplace Offerings, all users are required to accept and comply with these Terms of Use.
                                    </p>
                                    <br />
                                    <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason.
                                    </p>
                                    <br />
                                    <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                                    </p>

                                </div>
                                {/*  */}
                                <div className='flex flex-col gap-3'>
                                    <h1 className='text-[#111928] text-[20px] md:text-[24px]  font-[800] lg:font-[700] leading-[28px] md:leading-[36px] '>How buying items works</h1>
                                    <div className='p-6 bg-gray-50 rounded-[8px]'>
                                        <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                            This section will help you understand what you are buying when you purchase an item and how that transaction takes place on Flowbite Library.
                                        </p>
                                    </div>

                                    <p className='text-[#6B7280] text-[20px] font-[700] leading-[30px] '>
                                        1. What you're buying:
                                    </p>
                                    <div className='flex flex-col gap-2.5'>
                                        <div className='ps-2.5 flex flex-row gap-2.5'>
                                            <h1 className='text-[#6B7280] text-[16px] font-[500]'>a.</h1>
                                            <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                                <span className='text-[#111928] text-[16px] font-[600] leading-[24px] '>License</span>: When you buy an item, you acquire the right to use that item; you're not actually acquiring the item itself. What you get includes a license directly from the author to use that item. Items are subject to specific terms of use, and these terms are the ‘license’ that we set on Flowbite. This license also applies to you if you download an item that someone else has bought for you (because anyone downloading an item needs to be an Flowbite member). Different license types are available for you to choose when you have selected an item. You’ll need to think about the way you want to use the item so that you can pick the right license to allow that use. It’s your responsibility to choose the correct license.
                                            </p>
                                        </div>

                                        <div className='ps-2.5 flex flex-row gap-2.5'>
                                            <h1 className='text-[#6B7280] text-[16px] font-[500]'>b.</h1>
                                            <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                                <span className='text-[#111928] text-[16px] font-[600] leading-[24px] '>Item support</span>: Authors can choose whether or not to support certain items. If an author chooses to support an item, this will be identified on the item page.  All supported items include a support period. You can buy support extensions on these items. Your right to access Item Support requires an Flowbite account.
                                            </p>
                                        </div>
                                        <div className='ps-2.5 flex flex-row gap-2.5'>
                                            <h1 className='text-[#6B7280] text-[16px] font-[500]'>c.</h1>
                                            <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                                <span className='text-[#111928] text-[16px] font-[600] leading-[24px] '>Buyer Services</span>: In addition to the use of the platform, when you ‘buy’ an item you also receive buyer services from Flowbite like 24/7 buyer support, fraud protection, item quality control and other related buyer services.
                                            </p>
                                        </div>
                                    </div>
                                    <p className='text-[#6B7280] text-[20px] font-[700] leading-[30px] '>
                                        2. The total price for an item on Flowbite Market is made up of:
                                    </p>
                                    <div className='flex flex-col gap-2.5'>
                                        <div className='ps-2.5 flex flex-row gap-2.5'>
                                            <h1 className='text-[#6B7280] text-[16px] font-[500]'>a.</h1>
                                            <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                                <span className='text-[#111928] text-[16px] font-[600] leading-[24px] '>Item price:</span> The item price is made up of a license fee (for the license you choose for the item), and if relevant the item support fee (for supported items).
                                            </p>
                                        </div>

                                        <div className='ps-2.5 flex flex-row gap-2.5'>
                                            <h1 className='text-[#6B7280] text-[16px] font-[500]'>b.</h1>
                                            <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                                <span className='text-[#111928] text-[16px] font-[600] leading-[24px] '>Buyer fee:</span> This is the fee for the buyer services you get from Envato.
                                            </p>
                                        </div>
                                        <div className='ps-2.5 flex flex-row gap-2.5'>
                                            <h1 className='text-[#6B7280] text-[16px] font-[500]'>c.</h1>
                                            <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                                <span className='text-[#111928] text-[16px] font-[600] leading-[24px] '>Handling fee:</span> In some transactions on Flowbite Market the total checkout price may include a handling fee.
                                            </p>
                                        </div>
                                        <div className='ps-2.5 flex flex-row gap-2.5'>
                                            <h1 className='text-[#6B7280] text-[16px] font-[500]'>d.</h1>
                                            <p className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                                <span className='text-[#111928] text-[16px] font-[600] leading-[24px] '>Taxes:</span> Some transactions on Flowbite Market may be subject to tax that may be added to the price. See section 23 for details about taxes on Flowbite Market.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default TermsAndCondition;
import React, { useEffect, useRef, useState } from 'react';
import image_upload from "../../../../assets/images/image_upload_gray.png"
import camera_white from "../../../../assets/svg/camera_white.svg"
import left_arrow from "../../../../assets/svg/arrow-sm-left.svg"
import fb_icon from "../../../../assets/svg/fb-color.svg"
import linkedin_icon from "../../../../assets/svg/lindein-color.svg"
import plus_white from "../../../../assets/svg/plus_white.svg"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProfileSetting = () => {
    const [tabSelected, setTabSelected] = useState({
        currentTab: 1,
        noTabs: 8,
    })

    const wrapperRef = useRef(null)

    const handleKeyDown = e => {
        if (e.keyCode === 39) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab >= 1 &&
                    tabSelected.currentTab < tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab + 1,
                    })
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: 1,
                    })
                }
            }
        }

        if (e.keyCode === 37) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab > 1 &&
                    tabSelected.currentTab <= tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab - 1,
                    })
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.noTabs,
                    })
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    })

    const [value, setValue] = useState('');
    var toolbarOptions = [
        ['bold', 'underline', 'clean'],
        [{ 'font': [] }],
        [{ 'color': [] }, { 'background': [] }], 
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'align': [] }],
        [{ 'indent': '-1'}, { 'indent': '+1' }], 
        ['link', 'video'],
        ['code-block', 'blockquote', 'image'],
      ];
    const module ={
        toolbar:toolbarOptions
    }

    return (
        <>
            <div className='w-full max-w-[1015px] mx-auto px-[13px]'>
                <div className='border-b border-[#C7CAD1]'>
                    <div>
                        <h2 className='text-[36px] font-[600] text_black_gray leading-[40px] pb-3'>Profile Setting</h2>
                    </div>
                </div>
                {/*  */}
                <div>
                    <div>
                        <div className='pt-2.5 pb-1 flex flex-row items-center justify-between'>
                            <h1 className='text_black_gray text-[18px] font-[600]'>Profile Complete</h1>
                            <h1 className='text_black_gray text-[18px] font-[600]'>20%</h1>
                        </div>

                    </div>
                    <div>
                        <span id="ProgressLabel" className="sr-only">Loading</span>
                        <span
                            role="progressbar"
                            aria-labelledby="ProgressLabel"
                            aria-valuenow="50"
                            className="block rounded-full bg-[#E3E5E8] w-[1015px]"
                        >
                            <span className="block h-4 rounded-full bg-[#20AC90] text-center text-[10px]/4 w-36" >
                            </span>
                        </span>
                    </div>
                </div>

                {/* tab */}
                <div className='py-2.5'>
                    <section className="max-w-full" aria-multiselectable="false">
                        <ul className="flex items-center gap-3" role="tablist" ref={wrapperRef}>
                            <li className="" role="presentation">
                                <button
                                    className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed rounded-[50px] ${tabSelected.currentTab === 1
                                        ? "bg-[#D6E9F5] text_primary_green "
                                        : "w-full bg-[#E3E5E8] justify-self-center text_black"
                                        }`}
                                    id="tab-label-1e"
                                    role="tab"
                                    aria-setsize="3"
                                    aria-posinset="1"
                                    tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
                                    aria-controls="tab-panel-1e"
                                    aria-selected={`${tabSelected.currentTab === 1 ? "true" : "false"
                                        }`}
                                    onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
                                >
                                    <span>Basic Information</span>
                                </button>
                            </li>
                            <li className="" role="presentation">
                                <button
                                    className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 2
                                        ? "bg-[#D6E9F5] text_primary_green "
                                        : "w-full bg-[#E3E5E8] justify-self-center text_black"
                                        }`}
                                    id="tab-label-2e"
                                    role="tab"
                                    aria-setsize="3"
                                    aria-posinset="2"
                                    tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
                                    aria-controls="tab-panel-2e"
                                    aria-selected={`${tabSelected.currentTab === 2 ? "true" : "false"
                                        }`}
                                    onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
                                >
                                    <span>Images</span>
                                </button>
                            </li>
                            <li className="" role="presentation">
                                <button
                                    className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 3
                                        ? "bg-[#D6E9F5] text_primary_green "
                                        : "w-full bg-[#E3E5E8] justify-self-center text_black"
                                        }`}
                                    id="tab-label-3e"
                                    role="tab"
                                    aria-setsize="3"
                                    aria-posinset="3"
                                    tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
                                    aria-controls="tab-panel-3e"
                                    aria-selected={`${tabSelected.currentTab === 3 ? "true" : "false"
                                        }`}
                                    onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
                                >
                                    <span>About</span>
                                </button>
                            </li>
                            <li className="" role="presentation">
                                <button
                                    className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 4
                                        ? "bg-[#D6E9F5] text_primary_green "
                                        : "w-full bg-[#E3E5E8] justify-self-center text_black"
                                        }`}
                                    id="tab-label-4e"
                                    role="tab"
                                    aria-setsize="3"
                                    aria-posinset="4"
                                    tabindex={`${tabSelected.currentTab === 4 ? "0" : "-1"}`}
                                    aria-controls="tab-panel-3e"
                                    aria-selected={`${tabSelected.currentTab === 4 ? "true" : "false"
                                        }`}
                                    onClick={() => setTabSelected({ ...tabSelected, currentTab: 4 })}
                                >
                                    <span>Education</span>
                                </button>
                            </li>
                            <li className="" role="presentation">
                                <button
                                    className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 5
                                        ? "bg-[#D6E9F5] text_primary_green "
                                        : "w-full bg-[#E3E5E8] justify-self-center text_black"
                                        }`}
                                    id="tab-label-5e"
                                    role="tab"
                                    aria-setsize="3"
                                    aria-posinset="5"
                                    tabindex={`${tabSelected.currentTab === 5 ? "0" : "-1"}`}
                                    aria-controls="tab-panel-3e"
                                    aria-selected={`${tabSelected.currentTab === 5 ? "true" : "false"
                                        }`}
                                    onClick={() => setTabSelected({ ...tabSelected, currentTab: 5 })}
                                >
                                    <span>Experience</span>
                                </button>
                            </li>
                            <li className="" role="presentation">
                                <button
                                    className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 6
                                        ? "bg-[#D6E9F5] text_primary_green "
                                        : "w-full bg-[#E3E5E8] justify-self-center text_black"
                                        }`}
                                    id="tab-label-6e"
                                    role="tab"
                                    aria-setsize="3"
                                    aria-posinset="6"
                                    tabindex={`${tabSelected.currentTab === 6 ? "0" : "-1"}`}
                                    aria-controls="tab-panel-3e"
                                    aria-selected={`${tabSelected.currentTab === 6 ? "true" : "false"
                                        }`}
                                    onClick={() => setTabSelected({ ...tabSelected, currentTab: 6 })}
                                >
                                    <span>Skills</span>
                                </button>
                            </li>
                            <li className="" role="presentation">
                                <button
                                    className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 7
                                        ? "bg-[#D6E9F5] text_primary_green "
                                        : "w-full bg-[#E3E5E8] justify-self-center text_black"
                                        }`}
                                    id="tab-label-7e"
                                    role="tab"
                                    aria-setsize="3"
                                    aria-posinset="7"
                                    tabindex={`${tabSelected.currentTab === 7 ? "0" : "-1"}`}
                                    aria-controls="tab-panel-3e"
                                    aria-selected={`${tabSelected.currentTab === 7 ? "true" : "false"
                                        }`}
                                    onClick={() => setTabSelected({ ...tabSelected, currentTab: 7 })}
                                >
                                    <span>Financial</span>
                                </button>
                            </li>
                            <li className="" role="presentation">
                                <button
                                    className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 8
                                        ? "bg-[#D6E9F5] text_primary_green "
                                        : "w-full bg-[#E3E5E8] justify-self-center text_black"
                                        }`}
                                    id="tab-label-8e"
                                    role="tab"
                                    aria-setsize="3"
                                    aria-posinset="8"
                                    tabindex={`${tabSelected.currentTab === 8 ? "0" : "-1"}`}
                                    aria-controls="tab-panel-3e"
                                    aria-selected={`${tabSelected.currentTab === 8 ? "true" : "false"
                                        }`}
                                    onClick={() => setTabSelected({ ...tabSelected, currentTab: 8 })}
                                >
                                    <span>Social Connect</span>
                                </button>
                            </li>
                        </ul>
                        <div className="pt-10">
                            {/* Basic Information */}
                            <div
                                className={` ${tabSelected.currentTab === 1 ? "" : "hidden"
                                    }`}
                                id="tab-panel-1e"
                                aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
                                role="tabpanel"
                                aria-labelledby="tab-label-1e"
                                tabindex="-1"
                            >
                                <div className='bg-white px-10 pt-5 pb-10 rounded-[20px]'>
                                    <div className='border-b border-[#C7CAD1]'>
                                        <div>
                                            <h2 className='text-[20px] font-[600] text_black leading-[40px]'>Basic Information</h2>
                                        </div>
                                    </div>
                                    <div className='mt-5 flex flex-col gap-[30px]'>
                                        <div className='flex flex-row items-center gap-12'>
                                            <input
                                                className='w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none'
                                                type="text"
                                                placeholder='Full Name '
                                            />
                                            <input
                                                className='w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none'
                                                type="email"
                                                placeholder='E-mail'
                                            />
                                        </div>
                                        <div className='flex flex-row items-center gap-12'>
                                            <input
                                                className='w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none'
                                                type="text"
                                                placeholder='Phone Number'
                                            />
                                            <input
                                                className='w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none'
                                                type="email"
                                                placeholder='Alternate Phone Number'
                                            />
                                        </div>
                                        <div className='flex flex-row items-center gap-12'>
                                            <input
                                                className='w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none'
                                                type="text"
                                                placeholder='Password'
                                            />
                                            <input
                                                className='w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none'
                                                type="email"
                                                placeholder='Re-type password'
                                            />
                                        </div>

                                        <div className='mt-5'>
                                            <button
                                                onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
                                                className='primary_green py-3.5 px-6 rounded-[5px] text-white'>
                                                Save & Next
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div
                                className={`${tabSelected.currentTab === 2 ? "" : "hidden"
                                    }`}
                                id="tab-panel-2e"
                                aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
                                role="tabpanel"
                                aria-labelledby="tab-label-2e"
                                tabindex="-1"
                            >
                                <div className='bg-white px-10 pt-5 pb-10 rounded-[20px]'>
                                    <div className='border-b border-[#C7CAD1]'>
                                        <div>
                                            <h2 className='text-[20px] font-[600] text_black leading-[40px]'>Images</h2>
                                        </div>
                                    </div>
                                    <div className='mt-5 flex justify-between'>
                                        <div className='flex flex-col gap-5'>
                                            <h1 className='text-[16px] font-[400] text-black leading-[16px] text-center'>Recommended size: 300 X 300</h1>
                                            <div className='w-[208px] h-[208px] mx-auto bg-[#E3E5E8] rounded-full flex items-center justify-center'>
                                                <img className='w-[108px]' src={image_upload} alt="" />
                                            </div>
                                            <div>
                                                <button
                                                    className='secondary_blue py-3.5 px-6 rounded-[5px] text-white flex flex-row gap-2 '>
                                                    <img src={camera_white} alt="" />
                                                    Select Profile Picture
                                                </button>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-5'>
                                            <h1 className='text-[16px] font-[400] text-black leading-[16px] text-center'>Recommended size: 718 X 300</h1>
                                            <div className='w-[524px] h-[208px] mx-auto bg-[#E3E5E8] rounded-[10px] flex items-center justify-center'>
                                                <img className='' src={image_upload} alt="" />
                                            </div>
                                            <div className='mx-auto'>
                                                <button
                                                    className='secondary_blue py-3.5 px-6 rounded-[5px] text-white flex flex-row gap-2 '>
                                                    <img src={camera_white} alt="" />
                                                    Select Cover Picture
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-10 items-center justify-end flex gap-10'>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
                                            className='border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5'>
                                            <img src={left_arrow} alt="" />
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
                                            className='primary_green py-3.5 px-6 rounded-[5px] text-white'>
                                            Save & Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* about */}
                            <div
                                className={`${tabSelected.currentTab === 3 ? "" : "hidden"
                                    }`}
                                id="tab-panel-3e"
                                aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
                                role="tabpanel"
                                aria-labelledby="tab-label-3e"
                                tabindex="-1"
                            >
                                <div className='bg-white px-10 pt-5 pb-10 rounded-[20px]'>
                                    <div className='border-b border-[#C7CAD1]'>
                                        <div>
                                            <h2 className='text-[20px] font-[600] text_black leading-[40px]'>About</h2>
                                        </div>
                                    </div>
                                    <div className='mt-5 flex '>
                                        <div className='w-full flex flex-col gap-10'>
                                            <div className='flex flex-col gap-2.5'>
                                                <h2 className='text-[14px] font-[400] text_black leading-[18px]'>Title</h2>
                                                <div className=''>
                                                    <input
                                                        className='w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none'
                                                        type="text"
                                                        placeholder='Enter your Title'
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2.5'>
                                                <h2 className='text-[14px] font-[400] text_black leading-[18px]'>Short Description</h2>
                                                <div className=''>
                                                    <textarea
                                                        type="text"
                                                        rows="4"
                                                        placeholder="Description"
                                                        className=" w-full rounded-[10px] bg-[#F1F2F3]  p-4 outline-none"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2.5'>
                                                <h2 className='text-[14px] font-[400] text_black leading-[18px]'>Biography</h2>
                                                <div className=''>
                                                <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} className='h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]' />

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className='mt-10 items-center justify-end flex gap-10'>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
                                            className='border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5'>
                                            <img src={left_arrow} alt="" />
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 4 })}
                                            className='primary_green py-3.5 px-6 rounded-[5px] text-white'>
                                            Save & Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tabSelected.currentTab === 4 ? "" : "hidden"
                                    }`}
                                id="tab-panel-4e"
                                aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
                                role="tabpanel"
                                aria-labelledby="tab-label-4e"
                                tabindex="-1"
                            >
                                <div className='bg-white px-10 pt-5 pb-10 rounded-[20px]'>
                                    <div className='border-b pb-2 border-[#C7CAD1] flex flex-row justify-between'>
                                        <div>
                                            <h2 className='text-[20px] font-[600] text_black leading-[40px]'>Education</h2>
                                        </div>
                                        <button
                                            className='primary_green py-3 px-4 rounded-[5px] text-white flex flex-row gap-2'>
                                            <img src={plus_white} alt="" />
                                            Add Education
                                        </button>
                                    </div>
                                    <div className='mt-5 flex '>
                                        <div className='w-full flex flex-col gap-10'>
                                            <div className='flex flex-col gap-5'>
                                                {/* 
                                               
                                                
                                                */}
                                            </div>
                                        </div>

                                    </div>
                                    <div className='mt-10 items-center justify-end flex gap-10'>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
                                            className='border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5'>
                                            <img src={left_arrow} alt="" />
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 5 })}
                                            className='primary_green py-3.5 px-6 rounded-[5px] text-white'>
                                            Save & Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={` ${tabSelected.currentTab === 5 ? "" : "hidden"
                                    }`}
                                id="tab-panel-5e"
                                aria-hidden={`${tabSelected.currentTab === 5 ? "true" : "false"}`}
                                role="tabpanel"
                                aria-labelledby="tab-label-5e"
                                tabindex="-1"
                            >
                                <div className='bg-white px-10 pt-5 pb-10 rounded-[20px]'>
                                    <div className='border-b border-[#C7CAD1]'>
                                        <div>
                                            <h2 className='text-[20px] font-[600] text_black leading-[40px]'>Experience</h2>
                                        </div>
                                    </div>
                                    <div className='mt-5 flex '>
                                        <div className='w-full flex flex-col gap-10'>
                                            <div className='flex flex-col gap-5'>
                                                {/* 
                                               
                                                
                                                */}
                                            </div>
                                        </div>

                                    </div>
                                    <div className='mt-10 items-center justify-end flex gap-10'>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 4 })}
                                            className='border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5'>
                                            <img src={left_arrow} alt="" />
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 6 })}
                                            className='primary_green py-3.5 px-6 rounded-[5px] text-white'>
                                            Save & Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tabSelected.currentTab === 6 ? "" : "hidden"
                                    }`}
                                id="tab-panel-6e"
                                aria-hidden={`${tabSelected.currentTab === 6 ? "true" : "false"}`}
                                role="tabpanel"
                                aria-labelledby="tab-label-6e"
                                tabindex="-1"
                            >
                                <div className='bg-white px-10 pt-5 pb-10 rounded-[20px]'>
                                    <div className='border-b border-[#C7CAD1]'>
                                        <div>
                                            <h2 className='text-[20px] font-[600] text_black leading-[40px]'>Skills</h2>
                                        </div>
                                    </div>
                                    <div className='mt-5 flex '>
                                        <div className='w-full flex flex-col gap-10'>
                                            <div className='flex flex-col gap-5'>
                                                {/* 
                                                
                                                
                                                */}
                                            </div>
                                        </div>

                                    </div>
                                    <div className='mt-10 items-center justify-end flex gap-10'>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 5 })}
                                            className='border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5'>
                                            <img src={left_arrow} alt="" />
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 7 })}
                                            className='primary_green py-3.5 px-6 rounded-[5px] text-white'>
                                            Save & Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={` ${tabSelected.currentTab === 7 ? "" : "hidden"
                                    }`}
                                id="tab-panel-7e"
                                aria-hidden={`${tabSelected.currentTab === 7 ? "true" : "false"}`}
                                role="tabpanel"
                                aria-labelledby="tab-label-7e"
                                tabindex="-1"
                            >
                                <div className='bg-white px-10 pt-5 pb-10 rounded-[20px]'>
                                    <div className='border-b border-[#C7CAD1]'>
                                        <div>
                                            <h2 className='text-[20px] font-[600] text_black leading-[40px]'>Financial</h2>
                                        </div>
                                    </div>
                                    <div className='mt-5 flex '>
                                        <div className='w-full flex flex-col gap-10'>
                                            <div className='flex flex-col gap-5'>
                                                <div className='relative'>
                                                    <select
                                                        className="w-full rounded-[50px] bg-[#F1F2F3] outline-none px-3 py-2.5"
                                                    >
                                                        <option value="">Select Account Type</option>
                                                        <option value="">Select Account Type</option>
                                                        <option value="">Select Account Type</option>
                                                        <option value="">Select Account Type</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='mt-10 items-center justify-end flex gap-10'>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 6 })}
                                            className='border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5'>
                                            <img src={left_arrow} alt="" />
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 8 })}
                                            className='primary_green py-3.5 px-6 rounded-[5px] text-white'>
                                            Save & Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={` ${tabSelected.currentTab === 8 ? "" : "hidden"
                                    }`}
                                id="tab-panel-8e"
                                aria-hidden={`${tabSelected.currentTab === 8 ? "true" : "false"}`}
                                role="tabpanel"
                                aria-labelledby="tab-label-8e"
                                tabindex="-1"
                            >
                                <div className='bg-white px-10 pt-5 pb-10 rounded-[20px]'>
                                    <div className='border-b border-[#C7CAD1]'>
                                        <div>
                                            <h2 className='text-[20px] font-[600] text_black leading-[40px]'>Social Connect</h2>
                                        </div>
                                    </div>
                                    <div className='mt-5 flex '>
                                        <div className='w-full flex flex-col gap-10'>
                                            <div className='flex flex-col gap-5'>
                                                <div className='relative'>
                                                    <input
                                                        className='w-full px-9 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none '
                                                        type="text"
                                                        placeholder='Facebook Link'
                                                    />
                                                    <img className='absolute top-[13px] left-4' src={fb_icon} alt="" />
                                                </div>
                                                <div className='relative'>
                                                    <input
                                                        className='w-full px-9 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none '
                                                        type="text"
                                                        placeholder='Linkedin Link'
                                                    />
                                                    <img className='absolute top-[13px] left-4' src={linkedin_icon} alt="" />
                                                </div>
                                                <div>
                                                    <button className='pe-1.5 scroll-py-1.5 bg-[#1E567B] rounded-[3px] text-white flex flex-row '>
                                                        <img src={plus_white} alt="" />
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='mt-10 items-center justify-end flex gap-10'>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 7 })}
                                            className='border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5'>
                                            <img src={left_arrow} alt="" />
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
                                            className='primary_green py-3.5 px-6 rounded-[5px] text-white'>
                                            Save & Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

        </>
    );
};

export default ProfileSetting;
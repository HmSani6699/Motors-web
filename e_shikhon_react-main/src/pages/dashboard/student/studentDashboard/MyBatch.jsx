import React, { useContext, useEffect, useState } from 'react';
import course_2 from '../../../../assets/images/course-img (3).png'
import video_camera_icon from '../../../../assets/svg/video-camera_white.svg'
import file_certificate_icon from '../../../../assets/svg/file-document-edit-outline_white.svg'
import delete_icon from '../../../../assets/svg/delete-sweep-outline_white.svg'
import timer_11_white from '../../../../assets/svg/av-timer.svg'
import user_group from '../../../../assets/svg/user-group.svg'
import layer_white from '../../../../assets/svg/layer_white.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../layout/MainLayout';
import { get } from '../../../../api/axious';
import moment from 'moment';
import SuggLoading from '../../../../components/Common/SuggLoading';

const MyBatch = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [myAllBatch, setMyAllBatch] = useState([]);
    const [batchType, setBatchType] = useState('অনলাইন');

    useEffect(() => {
        if (user?.id) {
            getMyCourse();
        }
    }, [user?.id]);

    const getMyCourse = async () => {
        setLoading(true);
        try {
            const response = await get(`api/auth/get_user/${user?.id}`);
            setLoading(false);
            setMyAllBatch(response?.data?.progress);
        } catch (error) {
            setLoading(false);
            console.error("Error creating app:", error);
        } finally {
            setLoading(false);
        }
    };
    // console.log(myAllBatch, 'myAllBatch')
    return (
        <div className='w-full max-w-[1015px] mx-auto px-[13px]'>
            <div className='border-b border-[#C7CAD1] flex items-center justify-between'>
                <div>
                    <h2 className='text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] '>আমার ব্যাচ</h2>
                </div>
                {myAllBatch?.length > 0 ? <div className='flex items-center gap-5'>
                    <div className='flex gap-5'>
                        <button className={` py-2 px-5 rounded-[5px] ${batchType === 'অনলাইন' ? 'primary_green text-white' : 'border border-[#9096A2] text-[#464A53]'}`}
                            onClick={() => setBatchType('অনলাইন')}
                        >
                            লাইভ কোর্স
                        </button>
                        <button className={` py-2 px-5 rounded-[5px] ${batchType === 'অফলাইন' ? 'primary_green text-white' : 'border border-[#9096A2] text-[#464A53]'}`}
                            onClick={() => setBatchType('অফলাইন')}
                        >
                            অফলাইন কোর্স
                        </button>
                    </div>
                    <div className='text-right py-5'>
                        <button className={` py-2 px-5 rounded-[5px] ${batchType === 'সেমিনার' ? 'primary_green text-white' : 'border border-[#9096A2] text-[#464A53]'}`}
                            onClick={() => setBatchType('সেমিনার')}
                        >
                            সেমিনার
                        </button>
                    </div>
                </div>
                    : ''
                }
            </div>
            {/*  */}


            {loading ? <div className="flex justify-center items-center h-full my-[200px]"><SuggLoading /></div> :
                <>
                    {myAllBatch?.length > 0 ? (
                        myAllBatch.filter(course => course?.courses?.courseType
                            === batchType)
                            ?.map(courseData => (
                                <>

                                    {courseData?.courses?.courseType === "অনলাইন" &&
                                        <div key={courseData.id}
                                            onClick={() => {
                                                navigate(`/liveCourseCurriculum/${courseData?.batch_id}`);
                                            }}
                                            className='flex flex-row py-5 cursor-pointer'>
                                            <div className='w-[300px] overflow-hidden'>
                                                <img className='w-full h-[150px] object-cover rounded-s-[10px]' src={` ${BASE_URL}${courseData?.courses.thumbLinePicPath.path}`} alt="" />
                                            </div>
                                            <div className='w-full h-[150px] p-4 bg-[#0A1D29] rounded-e-[10px] flex flex-col justify-between'>
                                                <div className='flex justify-between'>
                                                    <h2 className='text-[18px] font-[600] text-white leading-[28px]'>{courseData?.courses.courseTitle}</h2>
                                                    <div className=" flex flex-row items-center gap-3 w-52">
                                                        <div className=" flex flex-row items-center gap-3 w-full">
                                                            <span className="block rounded-full bg-[#E3E5E8] w-full">
                                                                <span
                                                                    className="block h-4 rounded-full bg-[#20AC90] text-center text-[10px]/4 w-24"
                                                                    style={{
                                                                        width: `${parseInt(
                                                                            courseData?.courses?.percentage
                                                                        )}%`,
                                                                    }}
                                                                ></span>
                                                            </span>
                                                            <h2 className="text-white">{`${parseInt(
                                                                courseData?.courses?.percentage
                                                            )}%`}</h2>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-row justify-between'>
                                                    <div className=''>
                                                        <h1 className='text-[14px] font-[400] text-[#9FA2A9] leading-[16px]'>Batch</h1>
                                                        <h1 className='text-[14px] font-[600] text-white leading-[20px]'>{courseData?.batch_info?.batch_no}</h1>
                                                    </div>
                                                    <div className=''>
                                                        <h1 className='text-[14px] font-[400] text-[#9FA2A9] leading-[16px]'>Start</h1>
                                                        <h1 className='text-[14px] font-[600] text-white leading-[20px]'>{moment(courseData?.batch_info?.start_date).format("ll")}</h1>
                                                    </div>
                                                    <div className=''>
                                                        <h1 className='text-[14px] font-[400] text-[#9FA2A9] leading-[16px]'>Time</h1>
                                                        <h1 className='text-[14px] font-[600] text-white leading-[20px]'>{moment(courseData?.batch_info?.scheduleTime, "HH:mm").format("h:mm a")}</h1>
                                                    </div>
                                                    <div className=''>
                                                        <h1 className='text-[14px] font-[400] text-[#9FA2A9] leading-[16px]'>Instructor:</h1>
                                                        {courseData?.courses?.instructor?.map((instructor, i) => (
                                                            <h1 key={i} className='text-[14px] line-clamp-1 font-[600] text-white leading-[20px]'>{instructor?.teacherName}
                                                                {i !== courseData?.courses?.instructor?.length - 1
                                                                    ? " ,"
                                                                    : ""}
                                                            </h1>
                                                        ))}
                                                        {/* <h1 className='text-[14px] font-[600] text-white leading-[20px]'>Nafiz, Kamal & Hasan</h1> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    {courseData?.courses?.courseType === "অফলাইন" &&
                                        <div key={courseData.id}
                                            onClick={() => {
                                                navigate(`/liveCourseCurriculum/${courseData?.batch_id}`);
                                            }}
                                            className='flex flex-row py-5 cursor-pointer'>
                                            <div className='w-[300px] overflow-hidden'>
                                                <img className='w-full h-[150px] object-cover rounded-s-[10px]' src={` ${BASE_URL}${courseData?.courses.thumbLinePicPath.path}`} alt="" />
                                            </div>
                                            <div className='w-full h-[150px] p-4 bg-[#0A1D29] rounded-e-[10px] flex flex-col justify-between'>
                                                <div className='flex justify-between'>
                                                    <h2 className='text-[18px] font-[600] text-white leading-[28px]'>{courseData?.courses.courseTitle}fdsfdsf</h2>
                                                    <div className=" flex flex-row items-center gap-3 w-52">
                                                        <div className=" flex flex-row items-center gap-3 w-full">
                                                            <span className="block rounded-full bg-[#E3E5E8] w-full">
                                                                <span
                                                                    className="block h-4 rounded-full bg-[#20AC90] text-center text-[10px]/4 w-24"
                                                                    style={{
                                                                        width: `${parseInt(
                                                                            courseData?.courses?.percentage
                                                                        )}%`,
                                                                    }}
                                                                ></span>
                                                            </span>
                                                            <h2 className="text-white">{`${parseInt(
                                                                courseData?.courses?.percentage
                                                            )}%`}</h2>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-row justify-between'>
                                                    <div className=''>
                                                        <h1 className='text-[14px] font-[400] text-[#9FA2A9] leading-[16px]'>Batch</h1>
                                                        <h1 className='text-[14px] font-[600] text-white leading-[20px]'>{courseData?.batch_info?.batch_no}</h1>
                                                    </div>
                                                    <div className=''>
                                                        <h1 className='text-[14px] font-[400] text-[#9FA2A9] leading-[16px]'>Start</h1>
                                                        <h1 className='text-[14px] font-[600] text-white leading-[20px]'>{moment(courseData?.batch_info?.start_date).format("ll")}</h1>
                                                    </div>
                                                    <div className=''>
                                                        <h1 className='text-[14px] font-[400] text-[#9FA2A9] leading-[16px]'>Time</h1>
                                                        <h1 className='text-[14px] font-[600] text-white leading-[20px]'>{moment(courseData?.batch_info?.scheduleTime, "HH:mm").format("h:mm a")}</h1>
                                                    </div>
                                                    <div className=''>
                                                        <h1 className='text-[14px] font-[400] text-[#9FA2A9] leading-[16px]'>Instructor:</h1>
                                                        {courseData?.courses?.instructor?.map((instructor, i) => (
                                                            <h1 key={i} className='text-[14px] line-clamp-1 font-[600] text-white leading-[20px]'>{instructor?.teacherName}
                                                                {i !== courseData?.courses?.instructor?.length - 1
                                                                    ? " ,"
                                                                    : ""}
                                                            </h1>
                                                        ))}
                                                        {/* <h1 className='text-[14px] font-[600] text-white leading-[20px]'>Nafiz, Kamal & Hasan</h1> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </>
                            ))
                    ) : (
                        <div className="flex flex-col justify-center items-center w-full my-[150px]">
                            <h1 className="text-[20px]">You have not purchased any Course / Batch 😱 </h1>
                            <h1 className="text-[20px]"> Please Enroll A Course / Batch first!</h1>

                            <Link to="/course" className=" mt-7 px-4 py-2.5 bg-[#20AC90] rounded-[5px] text-white">
                                কোর্স দেখুন
                            </Link>
                        </div>
                    )
                    }
                </>

            }
        </div>
    );
};

export default MyBatch;
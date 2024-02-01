
import Image from 'next/image';
import React from 'react';
import profile from '../../../public/images/profile.png';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Input } from '../ui/input';
import Sidebar from './Sidebar';

const RootLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        < >
            <div className="xl:px-10 xl:pt-10 flex w-full">
                <Sidebar />
                <div className='w-full ml-10 mt-5 '>
                    <div className="flex">
                        <h2 className="text-[#393939] leading-9 text-[24px] font-semibold font-['Inter']">Dua Page</h2>
                        <div className='ml-[700px]'>
                            <div className=" flex">
                                <Input type="email" placeholder="Search by Dua Name" className="w-[371px] rounded-lg h-[52px]" />
                                <div className='relative right-[62px] py-4 bg-[#F3F4F6] px-5  '>
                                    <svg className="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='ml-auto mr-4'>
                            <Avatar>
                                <Image src={profile} alt='profile' />
                                <AvatarFallback>IRD</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="flex-auto w-[900px]">
                            <main>{children}</main>
                        </div>
                        <div className='hidden  xl:flex w-[360px] justify-center items-center mt-[20px]'>
                            <div className='w-[340px] h-[834px] rounded-[32px] border-lg bg-[#FFFFFF]'>
                                <div className='pt-12 px-4'>
                                    <h2 className='text-[20px] text-[#393939] leading-6 text-center font-[Inter] font-semibold'>Setting</h2>
                                    <div className='bg-[#F7F8FA] mt-[40px] rounded-lg'>
                                        <div className='flex p-4'>
                                            <div className="p-3 bg-[#E8F0F5] rounded-full flex items-center justify-center"><svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.751 3C9.783 8.77 6.07 13.61 1 16.129M1 3H13H1ZM7 1V3V1ZM8.048 12.5C6.5081 10.9059 5.27548 9.04132 4.412 7L8.048 12.5ZM10.5 16H17.5H10.5ZM9 19L14 9L19 19H9Z" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </div>
                                            <h5 className="font-[Inter] font-[400] text-[16px] leading-5 text-[#868686] mt-3 ml-4">Language Setting</h5>
                                        </div>
                                    </div>
                                    <div className='bg-[#F7F8FA] mt-[20px] rounded-lg'>
                                        <div className='flex p-4'>
                                            <div className="p-3 bg-[#E8F0F5] rounded-full flex items-center justify-center"><svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 5H15M17 9H3H17ZM17 9C17.5304 9 18.0391 9.21071 18.4142 9.58579C18.7893 9.96086 19 10.4696 19 11V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V11C1 10.4696 1.21071 9.96086 1.58579 9.58579C1.96086 9.21071 2.46957 9 3 9H17ZM17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5L17 9ZM3 9V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5L3 9ZM5 5V3C5 2.46957 5.21071 1.96086 5.58579 1.58579C5.96086 1.21071 6.46957 1 7 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V5H5Z" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            </div>
                                            <h5 className="font-[Inter] font-[400] text-[16px] leading-5 text-[#868686] mt-3 ml-4">General Setting</h5>
                                        </div>
                                    </div>
                                    <div className='bg-[#F7F8FA] mt-[20px] rounded-lg'>
                                        <div className='flex p-4'>
                                            <div className="p-3 bg-[#E8F0F5] rounded-full flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 2.75H5C3.75736 2.75 2.75 3.75736 2.75 5V8C2.75 9.24264 3.75736 10.25 5 10.25H8C9.24264 10.25 10.25 9.24264 10.25 8V5C10.25 3.75736 9.24264 2.75 8 2.75Z" stroke="#868686" strokeWidth="1.5" />
                                                <path d="M19 2.75H16C14.7574 2.75 13.75 3.75736 13.75 5V8C13.75 9.24264 14.7574 10.25 16 10.25H19C20.2426 10.25 21.25 9.24264 21.25 8V5C21.25 3.75736 20.2426 2.75 19 2.75Z" stroke="#868686" strokeWidth="1.5" />
                                                <path d="M19 13.75H16C14.7574 13.75 13.75 14.7574 13.75 16V19C13.75 20.2426 14.7574 21.25 16 21.25H19C20.2426 21.25 21.25 20.2426 21.25 19V16C21.25 14.7574 20.2426 13.75 19 13.75Z" stroke="#868686" strokeWidth="1.5" />
                                                <path d="M8 13.75H5C3.75736 13.75 2.75 14.7574 2.75 16V19C2.75 20.2426 3.75736 21.25 5 21.25H8C9.24264 21.25 10.25 20.2426 10.25 19V16C10.25 14.7574 9.24264 13.75 8 13.75Z" stroke="#868686" strokeWidth="1.5" />
                                            </svg>

                                            </div>
                                            <h5 className="font-[Inter] font-[400] text-[16px] leading-5 text-[#868686] mt-3 ml-4">Font Setting</h5>
                                        </div>
                                    </div>
                                    <div className='bg-[#F7F8FA] mt-[20px] rounded-lg border-l-8 border-l-[#1FA45B] relative z-50'>
                                        <div className='flex p-4'>
                                            <div className="p-3  bg-[#E8F0F5] rounded-full flex items-center justify-center"><svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="text-[#1FA45B]'" d="M8 2.75H5C3.75736 2.75 2.75 3.75736 2.75 5V8C2.75 9.24264 3.75736 10.25 5 10.25H8C9.24264 10.25 10.25 9.24264 10.25 8V5C10.25 3.75736 9.24264 2.75 8 2.75Z" stroke="#868686" strokeWidth="1.5" />
                                                <path d="M19 2.75H16C14.7574 2.75 13.75 3.75736 13.75 5V8C13.75 9.24264 14.7574 10.25 16 10.25H19C20.2426 10.25 21.25 9.24264 21.25 8V5C21.25 3.75736 20.2426 2.75 19 2.75Z" stroke="#868686" strokeWidth="1.5" />
                                                <path d="M19 13.75H16C14.7574 13.75 13.75 14.7574 13.75 16V19C13.75 20.2426 14.7574 21.25 16 21.25H19C20.2426 21.25 21.25 20.2426 21.25 19V16C21.25 14.7574 20.2426 13.75 19 13.75Z" stroke="#868686" strokeWidth="1.5" />
                                                <path d="M8 13.75H5C3.75736 13.75 2.75 14.7574 2.75 16V19C2.75 20.2426 3.75736 21.25 5 21.25H8C9.24264 21.25 10.25 20.2426 10.25 19V16C10.25 14.7574 9.24264 13.75 8 13.75Z" stroke="#868686" strokeWidth="1.5" />
                                            </svg>

                                            </div>
                                            <h5 className="font-[Inter] font-[400] text-[16px] leading-5 text-[#1FA45B] mt-3 ml-4">Appearance Setting</h5>
                                        </div>
                                    </div>
                                    <div className='relative -top-4  border-r border-l border-b rounded-lg border-[#E2E2E2] h-28'>
                                        <div className=' flex relative top-10'>
                                            <h2 className='font-[Inter] font-[400] text-[18px] leading-5 text-[#000] mt-3 ml-6'>Night Mode</h2>
                                            <div className='ml-auto mr-4 mt-3'><svg width="32" height="20" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="13" y1="8" x2="25" y2="8" stroke="#C1C1C1" strokeOpacity="0.7" strokeWidth="10" strokeLinecap="round" />
                                                <circle cx="8" cy="8" r="8" fill="#A4A4A4" />
                                            </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RootLayout;
"use client";

import Link from "next/link";
import Image from "next/image";
import React from 'react';
import LandingFrame from '../public/images/login_image.png';
import Complogo from '../public/images/k12logo.png';
import Loginlogo from '../public/images/left-menu-icons/ArtBoard.svg';
import googleLogo from '../public/images/googleLogo.png';


export default function LogIn() {
  return (
    <>

      {/* <div>
                <div className=" h-screen flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <Image src={'/images/left-menu-icons/logo-big.svg'} width={160} height={65} alt="" className="3xl:w-[8.333vw] 3xl:h-[3.425vw]" />
                        <div className="flex w-full my-8">
                            <Link className="px-[20px] flex gap-3 items-center justify-center py-[10px] xl:px-[1.563vw] xl:py-[0.521vw] bg-[#383874] hover:bg-[#323250]  text-white w-full transition ease-in duration-200 text-center text-[16px] xl:text-[0.938vw] font-meduim shadow-md focus:outline-none focus:ring-1 focus:ring-offset-2 rounded-lg w-[400px]" href="/overview">
                                <Image src={'/images/microsoft_icon.png'} width={24} height={24} alt="" className="3xl:w-[1.25vw] 3xl:h-[1.25vw]" />
                                Sign in with Microsoft</Link></div>
                    </div>
                </div>
            </div> */}

      <div className='grid grid-cols-12 loginLeft p-0 logindashboard' style={{ width: "100vw", height: '100vh' }}>
        <div className='col-span-6 flex'>
          <div className='loginmain_div'>
            <Image className='Loginlogo mb-[2rem]' src={Loginlogo} />
            <h1 className='login_title'>Welcome To Greece<br></br>Enrollment Dashboard</h1>
            <h4 className='login_titlebottom mb-3 mt-3'>Empowering School Districts with Comprehensive Insights</h4>
            <Image className='landingFrame' src={LandingFrame} />
          </div>
        </div>
        <div className='col-span-6'>
          <div className='login_action_div'>
            <p className='loginName'>Login</p>
            <p className='loginDes'>Provide your credentials to proceed, Please.</p>
            <div className="logoSignIn my-4">
              <Link href="/overview">
                <button className="login-button-azure">
                  <Image src={googleLogo} width={24} height={24} alt="" className="3xl:w-[1.25vw] 3xl:h-[1.25vw]" />
                  Sign in with Google

                </button>
              </Link>
            </div>
          </div>
        </div>
        <Image className='complogo' src={Complogo} width={150} height={57} />
      </div>
    </>
  );
}

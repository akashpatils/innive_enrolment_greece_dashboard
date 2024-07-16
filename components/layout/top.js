import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { OverlayPanel } from 'primereact/overlaypanel';
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

export default function Top({ ...pageProps }) {
  const notificatio = useRef(null);
  const profile = useRef(null);
  return (
    <>
      <header className="max-lg:fixed max-lg:w-full max-lg:z-10 sticky top-0 z-[20]">
        <div className='bg-white flex flex-wrap items-center justify-between xl:py-[10px] 3xl:py-[0.542vw] py-[16px] pl-[118px] xl:pl-[113px] 3xl:pl-[6.667vw] pr-[32px] xl:pr-[32px] 3xl:pr-[1.667vw] 3xl:min-h-[4.27vw] min-h-[60px] dark:bg-[#191A1E]' >
          <div className='flex flex-wrap gap-2 xl:gap-[1.667vw] justify-between w-full'>
            <div>
              <div className="flex gap-[10px] xl:gap-[0.521vw] xl:text-[0.625vw] text-[12px] font-light items-center mb-2 h-auto">
                <Link href='' className="text-[#9CA1AB] dark:text-[#fff]">{pageProps.parentPageName}</Link>
                <div className="pi pi-angle-right text-[12px] text-[#9CA1AB]"></div>
                <Link href='' className="text-[#374151] dark:text-[#fff]">{pageProps.pageTitle}</Link>
              </div>
              <div className="text-[#24262D] xl:text-[1.25vw] text-[24px] font-semibold dark:text-[#fff]">{pageProps.pageTitle}</div>
            </div>
            <div className="flex flex-wrap items-center gap-[18px] xl:gap-[20px] 3xl:gap-[1.042vw] z-0">

              <div>
              </div>
              <div className="3xl:p-[0.625vw] relative cursor-pointer ">
                <Link href={''} title="Messages"><Image src={'/images/messages.svg'} width={24} height={24} className="w-[24px] h-[24px]" alt="Messages" /></Link>
              </div>
              <div className="3xl:p-[0.625vw] relative cursor-pointer ">

                <div className="bg-[#D92D20] rounded-full h-1.5 w-1.5 absolute 3xl:top-1 3xl:right-1 -top-[6px] -right-0"></div>
                <Link href={''} onClick={(e) => notificatio.current.toggle(e)} title="Notification"><Image src={'/images/notification.svg'} width={24} height={24} className="w-[24px] h-[24px]" alt="Notification" />
                </Link></div>
              <div className="flex items-center gap-5 3xl:gap-[1.042vw] cursor-pointer" onClick={(e) => profile.current.toggle(e)}>
                <div className="flex items-center gap-3 3xl:gap-[0.625vw]">
                  <div><Image src={'/images/profile_img.svg'} width={48} height={48} alt="Profile" /></div>
                  <div className="3xl:space-y-[0.213vw] space-y-[6px]">
                    <div className="text-[#4B586E] dark:text-[#EFF8FF] text-[16px] xl:text-[0.833vw] font-semibold block leading-none"> Jese Leos</div>
                    <div className="text-[#9CA1AB] dark:text-[#EFF8FF] text-[14px] xl:text-[0.729vw] block">Joined in August 2014</div>
                  </div>
                </div>
                <div ><i className="pi pi-angle-down text-[#6c757d] dark:text-[#EFF8FF]"></i></div>
              </div>
            </div>
          </div>

        </div>

        <OverlayPanel ref={notificatio} className="notificatio_popup">
          <div className=''>
            <div className="w-full min-w-[418px] origin-top-right bg-white dark:bg-[#24262D] box-shadow">
              <div className="flex items-center justify-between">
                <div className="text-[#293141] dark:text-[#FFFFFF] text-sm lg:text-md 2xl:text-lg font-bold">Notifications</div>
              </div>
              <SimpleBar className="pr-4" style={{ maxHeight: '300px', }}>
                <div className="mt-5 divide-y divide-solid divide-[#D8D8D8] dark:divide-[#2A2C32] list-space" data-simplebar>
                  <div className="flex items-start py-2">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                        <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                        <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#4FB155]"></div>
                    </div>
                  </div>
                  <div className="flex items-start py-2">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                        <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                        <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start py-2">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                        <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                        <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#4FB155]"></div>
                    </div>
                  </div>
                  <div className="flex items-start py-2">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                        <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                        <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#4FB155]"></div>
                    </div>
                  </div>
                  <div className="flex items-start py-2">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                        <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                        <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#4FB155]"></div>
                    </div>
                  </div>
                  <div className="flex items-start py-2">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                        <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                        <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleBar>
            </div>
          </div>
        </OverlayPanel>

        <OverlayPanel ref={profile} className="profile_popup">
          <div >
            <div className="flex flex-col gap-4 3xl:gap-[0.833vw] text-[#1F2A37] text-sm font-normal leading-[14px] 3xl:text-[0.729vw] 3xl:leading-[0.729vw] p-3 3xl:p-[0.625vw]">
              <Link href={''} className="flex items-center gap-2 3xl:gap-[0.208vw]"><i className="loco-user"></i><span>Profile</span></Link>
              <Link href={''} className="flex items-center gap-2 3xl:gap-[0.208vw]"><i className="loco-key"></i><span>Change Password</span></Link>
              <Link href={''} className="flex items-center gap-2 3xl:gap-[0.208vw]"

              >
                <i className="loco-logout" ></i><span>Logout</span></Link>
            </div>
          </div>
        </OverlayPanel>

      </header>

    </>
  );
}

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { usePathname } from "next/navigation";
import { useTheme } from 'next-themes';
import { useSelector } from "react-redux";
export default function Left() {
  const [activeItem, setActiveItem] = useState('Overview')
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const handleThemeClick = useSelector((state) => state.global.handleThemeClick);

  const pathname = usePathname();

  const themeChanger = (theme) => {
    handleThemeClick(theme)

  }

  const sideBarIcons = ["ico-overview", "ico-population-census", "ico-budget-icon", "ico-forescasting-icon",
    "ico-programs-icon", "ico-geospatial-icon", "ico-additional-metrics-icon", "ico-business-insights-icon"];

  const menuItems = [

    { name: 'Overview', link: '/overview' },
    { name: 'Population/Census', link: '/population' },
    { name: 'Budget Enrollment and Staffing', link: '/budgetenrollment' },
    // { name: 'Forescasting', link: '' },
    { name: 'Programs', link: '/programs' },
    { name: 'Geospatial', link: '/geospatial' },
    // { name: 'Additional Metrics', link: '' },
    { name: 'Business Insights (AI)', link: '/business' },
  ]


  return (
    <>
      <div className="fixed top-0 left-0 z-[30] max-md:h-full left-menu-sec">
        <div className="w-[96px] hover:w-[328px] bg-[#fff] left-menu-h py-5  xl:py-[1.04vw] px-5 border-r border-[#E5E7EB] dark:border-[#191A1E] overflow-hidden max-md:h-full dark:bg-[#191A1E] ">
          <div className="relative h-full">
            {/* <div className="logo-block h-[89px] mb-[16px]">
              <div
                className="logo_icon flex justify-center"
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
              >
                <Image
                  src="/images/left-menu-icons/logo.svg"
                  width={50}
                  height={50}
                  className="w-[50px]"
                  alt="logo icon Main"
                />
              </div>
              <div className="logo min-w-[220px] xl:min-w-[17.056vw] pb-3">
                <Link href="/" className="block text-center w-[228px]">
                  <div>
                    <Image
                      src="/images/left-menu-icons/logo-big.svg"
                      width={220}
                      height={20}
                      className="w-[220px]"
                      alt="logo icon"
                    />
                  </div>
                </Link>
              </div>
              <div
                className="lock_icon mt-4"
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
              >
                <i className="leftmenu-lock px-5 xl:px-[1.04vw]"></i>
              </div>
              <div className="logo min-w-[150px] mr-[15px] border-b-2 border-[#E5E7EB] text-right relative">
                <i className="leftmenu-unlock absolute top-[-20px] right-[-15px] text-[#4b5563] "></i>
              </div>
            </div> */}

            <div className="logo-block h-[89px] mb-[16px]">
              <div
                className="logo_icon flex justify-center"
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
              >
                <Image
                  src="/images/left-menu-icons/GreeceImage.PNG"
                  width={50}
                  height={50}
                  className="w-[50px]"
                  alt="logo icon Main"
                />
              </div>
              <div className="logo min-w-[220px] xl:min-w-[17.056vw] pb-3">
                <Link href="/" className="block text-center w-[228px]">
                  <div>
                    <Image
                      src="/images/left-menu-icons/GreeceImage.PNG"
                      width={220}
                      height={20}
                      className="w-[220px]"
                      alt="logo icon"
                    />
                  </div>
                </Link>
              </div>
              <div
                className="lock_icon mt-4"
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
              >
                <i className="leftmenu-lock px-5 xl:px-[1.04vw]"></i>
              </div>
              <div className="logo min-w-[150px] mr-[15px] border-b-2 border-[#E5E7EB] text-right relative">
                <i className="leftmenu-unlock absolute top-[-20px] right-[-15px] text-[#4b5563] "></i>
              </div>
            </div>

            <SimpleBar>
              <div data-simplebar>
                <div className="visible lg:hidden"></div>
                <ul className="left-menu h-full">
                  {
                    menuItems?.map((item, index) => {
                      let getIcon = sideBarIcons[index]
                      return (
                        <>
                          <li className={`${pathname === item?.link ? 'ico-overview active' : ''} ${getIcon}`}
                            onClick={() => {
                              setActiveItem(item?.name)
                            }}>
                            <Link href={item?.link}>
                              <span className="">{item?.name}</span>
                            </Link>
                          </li>
                        </>
                      )
                    })
                  }


                  {/* <li className={` ${pathname === '/overview' ? 'ico-overview active' :'ico-overview'}`}
                  >
                    <Link href="/overview">
                      <span className="">Overview</span>
                    </Link>
                  </li>
                  <li className={`${pathname === '/population' ? 'ico-population-census active' :'ico-population-census'}`}
                  >
                    <Link href="/population">
                      <span>Population/Census</span>
                    </Link>
                  </li>
                  <li className={`bg-[#E5E7EB] h-[1px] my-2`}
                  ></li>

                  <li className={`${pathname === '/budgetenrollment' ? 'ico-budget-icon active' :'ico-budget-icon'}`}
                  >
                    <Link href="/budgetenrollment">
                      <span>Budget Enrollment and Staffing</span>
                    </Link>
                  </li>
                  <li className={`${pathname === '' ? 'ico-forescasting-icon active' :'ico-forescasting-icon'}`}
                  >
                    <Link href="">
                      <span>Forescasting</span>
                    </Link>
                  </li>
                  <li className={`${pathname === '/programs' ? 'ico-programs-icon active' :'ico-programs-icon'}`}
                  >
                    <Link href="/programs">
                      <span>Programs</span>
                    </Link>
                  </li>
                  <li className={`${pathname === '/geospatial' ? 'ico-geospatial-icon active' :'ico-geospatial-icon'}`}
                  >
                    <Link href="/geospatial">
                      <span>Geospatial</span>
                    </Link>
                  </li>
                  <li className={`${pathname === '' ? 'ico-additional-metrics-icon active' :'ico-additional-metrics-icon'}`}
                  >
                    <Link href="">
                      <span>Additional Metrics</span>
                    </Link>
                  </li>
                  <li className={`${pathname === '/business' ? 'ico-business-insights-icon active' :'ico-business-insights-icon'}`}
                  >
                    <Link href="/business">
                      <span>Business Insights (AI).</span>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </SimpleBar>
            <div className="absolute left-0 right-0 bottom-0">
              <ul className="left-menu hoverNone">
                <li className="setting_icon">
                  <Link href="">
                    <span>Settings</span>
                  </Link>
                </li>
                <li className="dark_mode_icon">
                  <Link href=""> {currentTheme === "dark" ?
                    <span onClick={() => {
                      setTheme("light");
                      themeChanger('light')
                    }}>Light Theme</span>
                    :
                    <span onClick={() => {
                      setTheme("dark")
                      themeChanger('dark')
                    }}>Dark Theme</span>} </Link>
                  {/* <Link href="">
                    <span>Dark Theme</span>{" "}
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

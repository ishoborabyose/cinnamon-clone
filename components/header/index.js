import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/vectors/logo-white.97f0c2c8.svg";
import darkLogo from "../../public/images/mobile-menu-icon-dark.svg";
import closeBtn from "../../public/vectors/mobile-menu-icon-light.0de793a8.svg";
import logoDark from "../../public/vectors/logo-dark.svg";
import Button from "../button/index";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logos, setLogos] = useState(logo);
  const [bolder, setBolder] = useState("white");
  const [btn, setBtn] = useState(closeBtn);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("#000000");
        setLogos(logoDark);
        setBolder("blue");
        setBtn(darkLogo);
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setLogos(logo);
        setBolder("white");
        setBtn(closeBtn);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <section className="fixed w-full  z-50 ">
      <div
        style={{ backgroundColor: `${color} ` }}
        className=" bg-hard-black  absolute bottom-0 top-0 right-0 left-0 -z-50"
      ></div>
      <div
        style={{ backgroundColor: `${color} ` }}
        className="lg:flex hidden relative max-w-7xl m-auto px-1/80 py-1/20 text-dark-white items-center sm:hidden    gap-10"
      >
        <div className="mr-48">
          <Image className=" h-1/20 w-1/160" src={logos} />
        </div>

        <ul
          style={{ color: `${textColor}` }}
          className=" flex font-bold text-base leading-1/20 bg-transparent gap-6"
        >
          <li>
            {" "}
            <Link
              className="relative hover:text-real-blue after:absolute after:hidden hover:after:inline-block after:left-1/2 after:-bottom-4 after:w-2 after:h-2 after:bg-real-blue after:-translate-x-1/2 after:rounded-full"
              href="#"
            >
              Projects
            </Link>
          </li>
          <li className="relative hover:text-real-blue after:absolute after:hidden hover:after:inline-block after:left-1/2 after:-bottom-4 after:w-2 after:h-2 after:bg-real-blue after:-translate-x-1/2 after:rounded-full">
            <Link href="#">Services</Link>
          </li>
          <li className="relative hover:text-real-blue after:absolute after:hidden hover:after:inline-block after:left-1/2 after:-bottom-4 after:w-2 after:h-2 after:bg-real-blue after:-translate-x-1/2 after:rounded-full">
            <Link href="#">About Us</Link>
          </li>
          <li className="relative hover:text-real-blue after:absolute after:hidden hover:after:inline-block after:left-1/2 after:-bottom-4 after:w-2 after:h-2 after:bg-real-blue after:-translate-x-1/2 after:rounded-full">
            <Link href="#">Careers</Link>
          </li>
          <li className="relative hover:text-real-blue after:absolute after:hidden hover:after:inline-block after:left-1/2 after:-bottom-4 after:w-2 after:h-2 after:bg-real-blue after:-translate-x-1/2 after:rounded-full">
            <Link href="#">Blob</Link>
          </li>
        </ul>

        <div
          style={{
            backgroundColor: `${color}`,
            border: `2px solid ${bolder}`,
          }}
          className="w-1/46  hover:shadow-shadow3 flex pl-4 items-center  h-1/46 rounded-full bg-hard-black  shadow-white "
        >
          <div
            style={{ borderLeft: ` 20px solid ${bolder}` }}
            className="  border-t-[10px] border-t-transparent border-l-[20px]  border-b-[10px] border-b-transparent "
          ></div>
        </div>
        <Button text="Contact Us" />
      </div>

      {/* Mobile screen */}
      <div
        style={{ backgroundColor: `${color} ` }}
        className="sm:flex  lg:hidden   ease-in duration-300  px-1/20 py-1/22 text-dark-white items-center  flex justify-between "
      >
        <div>
          <Image className=" h-1/20 w-1/160" src={logos} />
        </div>

        <div>
          <Image className=" " src={btn} />
        </div>
      </div>
    </section>
  );
};

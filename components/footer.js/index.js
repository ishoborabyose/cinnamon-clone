import React from "react";
import Button from "../Button";
import Image from "next/image";
import BasketBallIcon from "../../public/vectors/ball.svg";
import BehanceIcon from "../../public/vectors/behance.svg";

import FacebookIcon from "../../public/vectors/facebook.svg";

import LinkedInIcon from "../../public/vectors/in.svg";

import InstagramIcon from "../../public/vectors/instagram.svg";
import WifiIcon from "../../public/vectors/wifi.svg";
import logo from "../../public/vectors/logo-white.97f0c2c8.svg";
import clunch from "../../public/images/clutch-badge.webp";
import pangea from "../../public/vectors/pangea-badg.svg";

function Footer() {
  return (
    <section className="bg-header  text-white bg-hard-black ">
      <div className="px-5 pt-20 m-auto pb-8 lg:px-10  xl:max-w-6xl xl:mx-auto xl:px-0">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-56 lg:w-2/4">
            <Image src={logo} alt="company logo" width={160} height={20} />

            <ul className="text-semi-gray hidden font-font-semibold text-base font-semibold md:grid grid-cols-2 md:grid-cols-1 justify-between items-center py-10">
              <ul className="space-y-5 md:space-y-4">
                <li>Home</li>
                <li>Projects</li>
                <li>Services</li>
              </ul>
              <ul className="space-y-5 md:space-y-4 md:mt-4">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </ul>
          </div>

          <div className="lg:w-full">
            <h4 className="text-white  text-2xl font-font-bold  lg:text-[32px]">
              All software,
              <br className="md:hidden" /> zero bullshit.
            </h4>
            <div className="md:grid grid-cols-2 gap-6 text-semi-gray hidden md:grid-cols-3 md:mt-8">
              <div className="">
                <p className="font-font-bold py-1">Zagreb</p>
                <p className="font-font-semibold  text-sm md:leading-6">
                  Slavonska <br className="hidden md:block lg:hidden" /> avenija
                  6,
                  <br className="hidden lg:block" />
                  <br className="hidden md:block lg:hidden" /> 10000, Zagreb,
                  Croatia
                </p>
                <p className="font-font-semibold  text-sm  md:leading-6">
                  +385 99 347
                  <br className="hidden md:block lg:hidden" /> 3103
                </p>
              </div>
              <div>
                <p className="font-font-bold py-1">New York</p>
                <p className="font-font-semibold  text-sm  md:leading-6">
                  500 7th Ave,
                  <br className="hidden md:block lg:hidden" /> New York,
                </p>
                <p className="font-font-semibold  text-sm  md:leading-6">
                  NY 10018,
                  <br className="hidden md:block lg:hidden" /> United States
                </p>
              </div>
              <div>
                <p className="font-font-bold py-1">Belgrade</p>
                <p className="font-font-semibold  text-sm leading-[27px] md:leading-6">
                  Bulevar <br className="hidden md:block lg:hidden" />
                  vojvode
                  <br className="hidden md:block lg:hidden" /> Mišića
                  <br className="md:hidden lg:hidden" /> 37
                  <br className="hidden md:block lg:hidden" />
                </p>
                <p className="font-font-semibold  text-sm pt-1 md:leading-6">
                  11000,
                  <br className="hidden md:block lg:hidden" /> Belgrade,
                  <br className="hidden md:block lg:hidden" /> Serbia
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="text-semi-gray md:hidden font-font-semibold text-base  grid grid-cols-2 md:grid-cols-1 justify-between items-center py-10">
          <ul className="space-y-5 md:space-y-4">
            <li>Home</li>
            <li>Projects</li>
            <li>Services</li>
          </ul>
          <ul className="space-y-5 md:space-y-4 md:mt-4">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </ul>

        <div className="grid grid-cols-2 gap-6 text-semi-gray md:hidden">
          <div>
            <p className="font-font-bold py-1">Zagreb</p>
            <p className="font-font-semibold  text-sm">
              Slavonska avenija 6, 10000, Zagreb, Croatia
            </p>
            <p className="font-font-semibold  text-sm">+385 99 347 3103</p>
          </div>
          <div>
            <p className="font-font-bold py-1">New York</p>
            <p className="font-font-semibold text-sm">500 7th Ave, New York,</p>
            <p className="font-font-semibold text-sm">
              NY 10018, United States
            </p>
          </div>
          <div>
            <p className="font-font-bold py-1">Belgrade</p>
            <p className="font-font-semibold  text-sm leading-[27px]">
              Bulevar vojvode Mišića <br /> 37
            </p>
            <p className="font-font-semibold  text-sm pt-1">
              11000, Belgrade, Serbia
            </p>
          </div>
        </div>

        <div className="text-white mt-10 md:hidden">
          <p className="font-font-bold pt-10 pb-8">Our newsletter</p>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-semi-gray font-font-semibold -mb-2 text-base"
            >
              Your E-mail
            </label>
            <input
              type="email"
              name="email"
              className="bg-transparent outline-none border-b-2 mr-8"
            />
          </div>

          <div className="mr-8 py-5">
            <Button text="Subscribe" fullWidth={true} />
          </div>
        </div>

        <div className="md:flex md:flex-row-reverse md:items-end md:justify-between">
          <div>
            <Image
              src={pangea}
              alt="pangea image"
              width={200}
              height={56}
              className="mx-auto py-10"
            />

            <Image
              src={clunch}
              alt="clutch image"
              width={216}
              height={65}
              className="mx-auto"
            />
          </div>

          <div className="text-white mt-10 hidden md:block lg:w-1/285">
            <p className="font-font-bold pt-10 pb-8">Our newsletter</p>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-semi-gray font-font-semibold  -mb-2 text-base"
              >
                Your E-mail
              </label>
              <input
                type="email"
                name="email"
                className="bg-transparent outline-none border-b-2 md:border-white/40 mr-8 md:mr-0"
              />
            </div>

            <div className="mr-8 py-5 md:pb-0 md:mr-0">
              <Button text="Subscribe" fullWidth={true} />
            </div>
          </div>

          <p className="text-semi-gray font-font-semibold font-semibold underline mx-auto w-fit mt-14 md:mx-0">
            hello@cinnamon.agency
          </p>
        </div>

        <div className="md:flex md:justify-between md:items-center md:border-t md:border-white/20 md:mt-9">
          <p className="text-white/60 font-font-semibold md:flex justify-center gap-6 font-semibold mt-5 hidden">
            <span>© 2022 Cinnamon</span>
            <span className="underline">Privacy Policy</span>
          </p>
          <div className="text-white flex justify-center gap-6 py-7 md:py-2 border-t border-b border-white/20 mt-7 md:border-none">
            <Image src={LinkedInIcon} width={20} height={20} />
            <Image src={BasketBallIcon} width={20} height={20} />
            <Image src={BehanceIcon} width={20} height={20} />
            <Image src={InstagramIcon} width={20} height={20} />
            <Image src={FacebookIcon} width={20} height={20} />
            <Image src={WifiIcon} width={20} height={20} />
          </div>
        </div>

        <p className="text-white/60 font-font-semibold flex justify-center gap-6 font-semibold mt-5 md:hidden">
          <span>© 2022 Cinnamon</span>
          <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </section>
  );
}

export default Footer;

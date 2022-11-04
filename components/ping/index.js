import React from "react";
import Image from "next/image";
import image from "../../public/images/ping.png";
import Title from "../title";
import Description from "../description";
import white from "../../public/images/white.png";
import arrowLeft from "../../public/images/arrowLeft.png";
import arrowRight from "../../public/images/arrowRight.png";

function Ping() {
  return (
    <section className="max-w-6xl m-auto px-9 mt-24 py-1/124  relative">
      <div className="absolute text-1/400 top-[-70px] left-[-25px] text-real-blue opacity-[0.1]">
        “
      </div>
      <div className="grid  grid-cols-2 ">
        <div className="flex flex-col space-y-10">
          <Title
            color="#222222"
            title={`They’re consistent, and  the communication is good.`}
          />

          <Description
            description="When I have a deadline, they would work extra hours on the weekend and after hours. Cinnamon gives the impression of being a smaller team that’s focused on customers.
"
          />
        </div>

        <div className="absolute h-52 hidden lg:block   w-52  bottom-72 right-2">
          <Image src={image} />
        </div>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 pt-20">
        <div className="flex flex-col space-y-16 ">
          <div className="flex lg:flex-row flex-col space-y-4 lg:space-x-4">
            <Image className="w-16 h-16" src={white} />
            <div className="flex flex-col  justify-center">
              <p className="text-[20px]  font-font-bold leading-[30px] font-bold text-[#222222]">
                Garin Toren,
              </p>
              <p className="text-[16px] leading-[26px] text-[#222222]">
                CEO, ping
              </p>
            </div>
          </div>
          <div className="space-x-16 flex ">
            <Image
              className="cursor-pointer transition duration-300 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110"
              src={arrowLeft}
            />
            <Image
              className="cursor-pointer transition duration-300 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110"
              src={arrowRight}
            />
          </div>

          <div className=" lg:hidden ">
            <div className="flex space-x-4">
              <div className="my-auto">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.772 5.65733L0 1.88667L1.88533 0L7.54267 5.65733L1.88533 11.3147L0 9.428L3.772 5.65733Z"
                    fill="#5135FF"
                  />
                </svg>
              </div>

              <p className="text-base font-font-bold  w-1/143  leading-1/26 text-real-blue underline ">
                {" "}
                VIEW CASE STUDY
              </p>
            </div>
          </div>
        </div>

        <div className="absolute hidden lg:block  bottom-32 right-[96px]">
          <div className="flex space-x-4 justify-center ">
            <div className="my-auto">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.772 5.65733L0 1.88667L1.88533 0L7.54267 5.65733L1.88533 11.3147L0 9.428L3.772 5.65733Z"
                  fill="#5135FF"
                />
              </svg>
            </div>

            <p className="text-base font-font-bold   leading-1/26 text-real-blue underline ">
              {" "}
              VIEW CASE STUDY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ping;

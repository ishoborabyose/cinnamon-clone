import React from "react";
import Title from "../title";
import Description from "../description";
import Button from "../button/index";
import Image from "next/image";
import discussion from "../../public/images/discusion.png";

function About() {
  return (
    <section className="relative py-1/184   bg-dark-white grid grid-cols-2">
      <div className="space-y-12 max-w-6xl px-9 m-auto ">
        <div className="space-y-12">
          <Title color="#222222" title="Who we are" />
          <Description
            color="#525252"
            description={`Meet our international teams made up of 86 \n  innovators, branched into 8 departments, that \n influence the market throughout 20 different countries.`}
          />
        </div>
        <div className="lg:hidden  h-80  lg:h-96 w-80  ">
          <Image src={discussion} />
        </div>
        <div className=" hidden lg:flex justify-between text-[20px] leading-[36px] font-bold text-[#222222] ">
          <ul className="font-font-bold ">
            <li className="mb-[24px]">Product design</li>
            <li className="mb-[24px]">Web development</li>
            <li className="mb-[24px]">Mobile development</li>
            <li className="mb-[24px]">Quality assurance</li>
            <li className="mb-[24px]">Marketing</li>
          </ul>
          <ul className="font-font-bold">
            <li className="mb-[24px]">Project management</li>
            <li className="mb-[24px]">Human resources</li>
            <li className="mb-[24px]">Sales</li>
            <li className="mb-[24px]">Fluffy friends</li>
          </ul>
        </div>
        <div className="text-white pt-40 lg:pt-0">
          <Button text="Read about Us" />
        </div>
      </div>

      <div className="absolute hidden lg:block   h-96 w-80  bottom-[350px] right-0 ">
        <Image src={discussion} />
      </div>
    </section>
  );
}

export default About;

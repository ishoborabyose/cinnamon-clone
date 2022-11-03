import React from "react";
import { Info } from "./Info";
import OfficeContent from "./OfficeContent";
import arrowLeft from "../../public/images/arrowLeft.png";
import arrowRight from "../../public/images/arrowRight.png";
import Image from "next/image";

function Offices() {
  return (
    <section className="mt-16">
      <div className="max-w-6xl m-auto px-9 py-20">
        <div>
          <h1 className="font-font-bold text-5xl leading-56 ">Our offices</h1>
        </div>
        <div className="flex lg:inline-flex  space-x-8 overflow-hidden mt-12">
          {Info.map((service) => (
            <OfficeContent
              url={service.img}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="space-x-16 flex mt-16 ">
          <Image
            className="cursor-pointer transition duration-300 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110"
            src={arrowLeft}
          />
          <Image
            className="cursor-pointer transition duration-300 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110"
            src={arrowRight}
          />
        </div>
      </div>
    </section>
  );
}

export default Offices;

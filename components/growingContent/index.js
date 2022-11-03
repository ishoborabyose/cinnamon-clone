import React from "react";
import Image from "next/image";
import image from "../../public/images/arrowRightWhite.webp";

function GrowingContent(props) {
  return (
    <section className="font-font-bold">
      <div className="flex space-x-10 lg:space-x-40">
        <p className="text-2xl lg:w-1/100 leading-9 text-soft-gray pt-6 pr-3 pb-6 pl-1 whitespace-pre-line ">
          {props.description}
        </p>

        <Image className="lg:w-12 w-10 h-8 m-auto" src={image} />
      </div>
      <hr className="bg-dark-gray opacity-[0.2] solid  " />
    </section>
  );
}

export default GrowingContent;

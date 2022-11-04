import React from "react";
import Image from "next/image";
function Content({
  title,
  title2,
  image,
  description,
  subdescription,
  backgroundColor,
}) {
  return (
    <section>
      <div className="flex flex-col space-y-10 px-9 ">
        <div
          style={{ backgroundColor: backgroundColor }}
          className=" flex items-center p-5  top-0 bottom-0 rounded gap-1/10 left-[2%] right-[72.21%]"
        >
          {" "}
          <Image
            className="transition duration-700 ease-in-out hover:scale-105 "
            src={image}
          />{" "}
        </div>
        <div className="flex space-y-6 flex-col">
          <div className="flex space-x-8 ">
            <p className="not-italic  font-font-semibold  text-xs leading-3 m-0 text-text-gray">
              {title}
            </p>
            <p className="not-italic  font-font-semibold text-xs leading-3 m-0 text-text-gray">
              {title2}
            </p>
          </div>

          <h4 className="not-italic font-font-bold text-1/40 leading-1/56 text-real-black m-0 whitespace-pre-line">
            {description}
          </h4>
          <p className="not-italic break-words   font-font-semibold  text-[16px] leading-6  text-real-gray whitespace-pre-line">
            {subdescription}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Content;

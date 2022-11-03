import React from "react";
import Image from "next/image";

function TopicContent({ subTitle, description, title, url }) {
  return (
    <section>
      <Image
        src={url}
        alt=""
        className="min-w-1/352"
        width={352}
        height={215.95}
      />
      <div className="flex gap-2 flex-col mt-8">
        <p className="text-real-black hover:text-real-blue cursor-pointer  font-font-semibold text-xs leading-1/26  mt-2">
          {subTitle}
        </p>

        <p className=" text-real-gray font-font-semibold text-base leading-1/26 whitespace-pre-line  mt-2">
          {description}
        </p>

        <h3 className="font-font-bold text-real-black hover:text-real-blue cursor-pointer  text-2xl w-1/352 h-1/72 whitespace-pre-line leading-1/30 mt-2 mb-2">
          {title}
        </h3>
      </div>
    </section>
  );
}

export default TopicContent;

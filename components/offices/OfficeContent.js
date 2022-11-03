import React from "react";
import Image from "next/image";

function OfficeContent({ url, title, description }) {
  return (
    <section className="hover:text-real-blue cursor-pointer ">
      <Image
        src={url}
        alt="image"
        className="min-w-1/500"
        width={544}
        height={378}
      />
      <div className="flex space-x-6 mt-8">
        <div className="my-auto">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>

        <h3 className=" hover:text-real-blue  font-font-bold text-real-black  text-1/20 leading-1/30 mt-2 mb-2 whitespace-pre-line">
          {title}
        </h3>
      </div>

      <p className="text-real-gray hover:text-real-blue   font-font-semibold text-base leading-1/26 whitespace-pre-line  mt-2">
        {description}
      </p>
    </section>
  );
}

export default OfficeContent;

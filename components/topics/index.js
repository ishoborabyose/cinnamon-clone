import React from "react";
import { Info } from "./Info";
import TopicContent from "./TopicContent";

function Topic() {
  return (
    <section className=" max-w-6xl m-auto px-9 py-20 mt-16">
      <div>
        <div>
          <h1 className="font-font-bold text-5xl leading-56 ">
            Stay in the loop <br /> on tech topics
          </h1>
        </div>
        <div className="flex space-x-8 overflow-hidden mt-12">
          {Info.map((service) => (
            <TopicContent
              url={service.img}
              subTitle={service.subTitle}
              description={service.description}
              title={service.title}
            />
          ))}
        </div>

        <div className="flex space-x-6 mt-10  justify-start ">
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
            VIEW MORE BLOGS
          </p>
        </div>
      </div>
    </section>
  );
}

export default Topic;

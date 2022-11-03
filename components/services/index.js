import React from "react";
import Button from "../button/index";
import Board from "../serviceContent";
import { info } from "../info";

function Service() {
  return (
    <section className="bg-header bg-hard-black mt-24  ">
      <div className="max-w-6xl m-auto px-9 py-20 text-white">
        <div className="lg:grid lg:space-y-0 space-y-10 flex flex-col lg:grid-cols-2 ">
          <div>
            <h1 className="font-font-bold text-5xl leading-56 ">
              Our services
            </h1>
          </div>
          <div className="lg:grid flex flex-col lg:grid-cols-2 gap-10">
            {info.map((service) => (
              <Board
                url={service.img}
                title={service.title}
                description={service.description}
              />
            ))}

            <Button text="See Our Services" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;

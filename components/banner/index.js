import React from "react";

const Banner = () => {
  return (
    <section className="bg-header bg-hard-black   ">
      <div className="max-w-6xl px-5 m-auto">
        <div className="text-white  mb-[10rem] py-48">
          <h1 className="mb-6  lg:text-1/80   text-4xl leading-1/58 font-font-bold lg:leading-1/105 -z-10">
            Results focused design & development agency.
          </h1>
          <p className="lg:text-1/20 text-base font-font-semibold   text-dark-white leading-8">
            Extend your team with our high performing specialists or hire us{" "}
            <br /> to shape ypur product from scratch. Either way, we'll get
            your <br /> product off the ground and build a momentum for your
            <br /> success
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;

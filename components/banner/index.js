import React from "react";

const Banner = () => {
  return (
    <section className="bg-header min-h-auto md:min-h-screen bg-hard-black   ">
      <div className="max-w-6xl  m-auto px-9 ">
        <div className="lg:mt-0 mt-18 absolute   w-full bottom-0 top-0 right-0 left-0 -z-10"></div>
        <div className="text-white  bottom-0 lg:top-40 mb-[23rem] lg:pt-0 pt-32 right-0 left-0 relative">
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

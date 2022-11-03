import React from "react";
import Button from "../button/index";
import Title from "../title";
import Description from "../description";
import GrowingContent from "../growingContent";

function Growing() {
  return (
    <section className="bg-header bg-hard-black ">
      <div className="max-w-6xl m-auto px-9 py-20 text-white">
        <div className=" flex flex-col lg:flex-row gap-20">
          <div className="space-y-10 text-white">
            <Title color="#fffff" title="We’re growing" />
            <Description
              color="#fffff"
              description={`Jump on board with Cinnamon and get the privilege of \n working on challenging projects for leading global \n companies! Make the world a better, more connected \n place.`}
            />
            <Button text="See all position" />
          </div>

          <div className=" flex flex-col ">
            <GrowingContent description="Android Developer" />
            <GrowingContent description="Android Developer" />
            <GrowingContent description="Android Developer" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Growing;

import React from "react";
import Title from "../title";
import Description from "../description";
import Button from "../button/index";
import image from "../../public/images/imageTeam.png";
import Image from "next/image";

function Team() {
  return (
    <section className="bg-dark-white relative ">
      <div className=" max-w-6xl m-auto px-9  py-1/124 space-y-10 flex flex-col lg:grid lg:grid-cols-2 ">
        <Title color="#222222" title={`Agile team \n on demand`} />

        <div className="lg:hidden">
          <Image src={image} />
        </div>

        <div className=" flex flex-col gap-10 ">
          <Description
            color="#525252"
            description={` By hiring and managing talented people  \n   with skills specific to your project, we build \n you a team that’s accomplished, agile and \n scalable in both directions. `}
          />
          <div className="text-white">
            <Button text="See how it works" />
          </div>
        </div>
      </div>

      <div className="absolute hidden lg:block  bottom-0 right-0 top-[245px] ">
        <Image src={image} />
      </div>
    </section>
  );
}

export default Team;

import Description from "../description";
import Button from "../button/index";
import image from "../../public/images/up.png";
import Image from "next/image";
import college from "../../public/images/college.png";

function College() {
  return (
    <section className="relative ">
      <div className=" max-w-6xl m-auto px-9 py-1/124 gap-10 flex flex-col  lg:grid lg:grid-cols-2 ">
        <div className="lg:h-80 lg:w-80">
          <Image src={college} />
        </div>

        <div className="flex flex-col gap-10 ">
          <Description
            color="#525252"
            description={` Seize the unique opportunity to participate \n in a wide range of courses conducted by \n professionals with an impeccable \n reputation in the digital industry. `}
          />
          <div className="text-white">
            <Button text="See how it works" />
          </div>
        </div>
      </div>
      <div className="absolute h-96 w-96  hidden lg:block   bottom-0 right-0 top-[237px] ">
        <Image src={image} />
      </div>
    </section>
  );
}

export default College;

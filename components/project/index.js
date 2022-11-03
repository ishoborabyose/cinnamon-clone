import Button from "../Button";
import image from "../../public/images/image (9).png";
import Image from "next/image";

function Project() {
  return (
    <section className="relative bg-dark-white  ">
      <div className=" max-w-6xl m-auto px-9 py-1/124">
        <div className="justify-center m-auto flex flex-col gap-10 ">
          <div>
            <h1 className="font-font-bold  hidden lg:block text-center text-1/40 text-5xl leading-1/56 ">
              Have a project in mind? <br />
              Let's work together.
            </h1>
            <h1 className="font-font-bold  lg:hidden  text-center text-1/40 leading-1/56 ">
              Let's work together.
            </h1>
          </div>
          <div className="text-white  text-center">
            <Button text="Contact Us" />
          </div>
        </div>
      </div>
      <div className="absolute h-44 w-44  lg:hidden   bottom-0 left-0 top-[320px] ">
        <Image src={image} />
      </div>
      <div className="absolute h-96 w-96  hidden lg:block  bottom-0 left-0 top-[144px] ">
        <Image src={image} />
      </div>
    </section>
  );
}

export default Project;

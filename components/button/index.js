import React from "react";

function Button(props) {
  return (
    <section>
      <button className=" hover:bg-white hover:text-real-blue border-2 shadow-[shadow2] solid border-real-blue  font-bold text-base leading-1/20 bg-transparent h-12 w-1/158 bg-real-blue ">
        {props.text}
      </button>
    </section>
  );
}

export default Button;

import React from "react";
import Image from "next/image";

function Board({ url, title, description }) {
  return (
    <div>
      <Image src={url} alt="" width={48} height={48} />
      <h3 className="font-font-semibold  text-2xl leading-10 mt-5">{title}</h3>
      <p className="text-light-gray text-base leading-1/26  mt-2">
        {description}
      </p>
    </div>
  );
}

export default Board;

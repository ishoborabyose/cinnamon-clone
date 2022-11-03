import React from "react";
import Content from "../bodyContent";
import mockup from "../../public/images/Mockup_1.png";
import tablet from "../../public/images/Fiona_Thumbnail.png";
import mobile from "../../public/images/thumbnail.png";

function Body() {
  return (
    <section className="flex max-w-6xl m-auto flex-col space-y-32">
      <Content
        image={mockup}
        title="PRODUCT DESIGN"
        title2="QUALITY ASSURANCE"
        description={`
        Corrily: Optimize prices 
        to maximize revenue`}
        backgroundColor="#91F1C3"
        subdescription={`Corrily tailors your prices and discounts to the needs of different user segments in order to \n increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily \n and incorporating a fresh, and stunning website redesign.`}
      />
      <Content
        image={tablet}
        title="PRODUCT DESIGN"
        title2="QUALITY ASSURANCE"
        description={`
        Corrily: Optimize prices 
        to maximize revenue`}
        backgroundColor="#50227D"
        subdescription={`Corrily tailors your prices and discounts to the needs of different user segments in order to \n increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily \n and incorporating a fresh, and stunning website redesign.`}
      />
      <Content
        image={mobile}
        title="PRODUCT DESIGN"
        title2="QUALITY ASSURANCE"
        description={`
        Corrily: Optimize prices 
        to maximize revenue`}
        backgroundColor="#FFCB49"
        subdescription={`Corrily tailors your prices and discounts to the needs of different user segments in order to \n increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily \n and incorporating a fresh, and stunning website redesign.`}
      />
    </section>
  );
}

export default Body;

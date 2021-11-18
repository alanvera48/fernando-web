import React from "react";
import EmblaCarousel from "./carousel";

export default function Embled(props) {
  const slides = Array.from(Array(props.slideCount).keys());
  return <EmblaCarousel slides={slides} {...props} />;
}

import React from "react";
import TechContent from "../TechContent";
import spaceCapsulePortrait from "../../../Assets/tech/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "../../../Assets/tech/image-space-capsule-landscape.jpg";
import useWindowDimensions from "../../../Hooks/windowSize";

const SpaceCapsule = () => {
  const { width } = useWindowDimensions();
  const checkWindowWidth =
    width <= 768 ? spaceCapsuleLandscape : spaceCapsulePortrait;
  return (
    <TechContent
      title="SPACE CAPSULE"
      image={checkWindowWidth}
      description="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    />
  );
};

export default SpaceCapsule;

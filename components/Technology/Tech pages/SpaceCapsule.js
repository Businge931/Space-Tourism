import React from "react";
import TechContent from "../TechContent";
import spaceCapsule from "../../../Assets/tech/image-space-capsule-portrait.jpg";

const SpaceCapsule = () => {
  return (
    <TechContent
      title="SPACE CAPSULE"
      image={spaceCapsule}
      description="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    />
  );
};

export default SpaceCapsule;

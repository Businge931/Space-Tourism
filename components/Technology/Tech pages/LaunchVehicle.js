import React from "react";
import launchVehicleDesktop from "../../../Assets/tech/image-launch-vehicle-portrait.jpg";
import TechContent from "../TechContent";
import launchVehicleTablet from "../../../Assets/tech/image-launch-vehicle-landscape.jpg";

const LaunchVehicle = () => {
  // const checkWindowWidth =
  //   screen.width <= 768 ? launchVehicleTablet : launchVehicleDesktop;
  // console.log(width);
  return (
    <TechContent
      image={launchVehicleDesktop}
      title="LAUNCH VEHICLE"
      description="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    />
  );
};

export default LaunchVehicle;

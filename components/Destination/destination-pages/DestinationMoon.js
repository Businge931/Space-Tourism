import DestinationContent from "../DestinationContent";
import moon from "../../../Assets/destination/image-moon.png";

const DestinationMoon = () => {
  return (
    <DestinationContent
      destinationPath={moon}
      heading="moon"
      content="See our planet as you have never seen it before. A perfect relaxing trip
  away to help regain perspective and come back refreshed. While you're
  there, take in some history by visiting the Luna 2 and Apollo 11
  landing sites."
      distance="384,400 KM"
      time="3 DAYS"
    />
  );
};

export default DestinationMoon;

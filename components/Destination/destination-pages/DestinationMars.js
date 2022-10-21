import DestinationContent from "../DestinationContent";
import mars from "../../../Assets/home page/image-mars.png";
const DestinationMars = () => {
  return (
    <DestinationContent
      destinationPath={mars}
      heading="mars"
      content="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
      distance="225 MIL. KM"
      time="9 MONTHS"
    />
  );
};

export default DestinationMars;

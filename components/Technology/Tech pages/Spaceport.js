import TechContent from "../TechContent";
import spaceportPotrait from "../../../Assets/tech/image-spaceport-portrait.jpg";
import spaceportLandscape from "../../../Assets/tech/image-spaceport-portrait.jpg";
import useWindowDimensions from "../../../Hooks/windowSize";

const Spaceport = () => {
  const { width } = useWindowDimensions();
  const checkWindowWidth = width <= 768 ? spaceportPotrait : spaceportLandscape;
  return (
    <TechContent
      title="SPACEPORT"
      image={checkWindowWidth}
      description="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    />
  );
};

export default Spaceport;

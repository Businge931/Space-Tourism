import CrewContent from "../CrewContent";
import commander from "../../../Assets/crewpage/image-douglas-hurley.png";
const Commander = () => {
  return (
      <CrewContent
        title="commander"
        name="Douglas Hurley"
        about=" Douglas Gerald Hurley is an American engineer, former Marine Corps
      pilot and former NASA astronaut. He launched into space for the third
      time as commander of Crew Dragon Demo-2."
        image={commander}
      />
  );
};

export default Commander;

import CrewContent from "../CrewContent";
import flightEngineer from "../../../Assets/crewpage/image-anousheh-ansari.png";

const FlightEngineer = () => {
  return (
    <CrewContent
      title="FlightEngineer"
      name="Anousheh Ansari"
      about="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
      image={flightEngineer}
    />
  );
};

export default FlightEngineer;

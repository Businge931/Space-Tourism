import CrewContent from "../CrewContent";
import missionSpecialist from "../../../Assets/crewpage/image-mark-shuttleworth.png";

const MissionSpecialist = () => {
  return (
    <CrewContent
      title="MissionSpecialist"
      name="MARK SHUTTLEWORTH"
      about="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      image={missionSpecialist}
    />
  );
};

export default MissionSpecialist;

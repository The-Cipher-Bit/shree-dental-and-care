import "./Meet.css";
import Meetcard from "./Meetcard";
import Doctora from "../../assets/images/Doctor-1.png";
const specialists = [
  { id: "1", Name: "Dr.Binit Thakurathi", description: "This is testing", image: Doctora },
  { id: "2", Name: "Dr.Jiten Bhattarai", description: "This is testing", image: Doctora },
  { id: "3", Name: "Dr.Bibek Angde", description: "This is testing", image: Doctora },
];
function Meet() {
  return (
    <>
      <div className="container-meet-specialist">
        <h2 className="textcolor_secondary">
          Meet <span className="textcolor_primary">Our Specialist</span>
        </h2>
      </div>
      <div className="container-meet-mapping">
        {specialists.map((specialista, index) => (
          <Meetcard key={specialista.id} specialista={specialista} />
        ))}
      </div>
    </>
  );
}

export default Meet;

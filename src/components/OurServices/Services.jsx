import ServiceCard from "./ServiceCard";
import "./Services.css";
const Services = () => {
  const services = [
    {
      title: "Dental Implants",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      imageUrl: "../../src/assets/images/hero-teeth.png",
    },
    {
      title: "Maxillofacial Surgery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      imageUrl: "../../src/assets/images/hero-teeth.png",
    },
    {
      title: "Endodontics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      imageUrl: "../../src/assets/images/hero-teeth.png",
    },
  ];
  return (
    <div className="services_container">
      <h2 className="title_font textcolor_secondary">Exceptionally High</h2>
      <h2 className="title_font textcolor_primary">Standards of Dentistry</h2>
      <div className="services_cards">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};
export default Services;

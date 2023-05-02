const ServiceCard = ({service}) => {
  return (
    <div className="servicecard_container">
      <div className="servicecard_image">
        <img src={service.imageUrl} alt="ServiceImage" />
      </div>
      <div className="servicecard_content">
        <h3>{service.title}</h3>
        <p>
          {service.description}
        </p>
      </div>
    </div>
  );
};
export default ServiceCard;

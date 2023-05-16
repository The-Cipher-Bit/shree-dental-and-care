
import { LazyLoadImage } from "react-lazy-load-image-component";

const Meetcard = ({ specialista }) => {
  return (
    <>
      <div className="container-specialist">
        <div className="container-specialist-image">
          <LazyLoadImage effect="black-and-white" src={specialista.image} alt="doctors" />
        </div>
        <h3 className="textcolor_secondary">{specialista.Name}</h3>
        <p className="textcolor_secondary">{specialista.description}</p>
      </div>
    </>
  );
};
export default Meetcard;

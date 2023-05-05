import "./appointment.css";
import { useState } from "react";
import Rightpic from "../../assets/images/appoint-right.png";
const Appointment = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    age: "",
    email: "",
    date: "",
    message: "",
  });
  return (
    <>
      <div className="container-main-appointment">
        <h2 className="textcolor_secondary title_font"style={{fontSize:'2.8rem'}}>
          Book an{" "}
          <span className="textcolor_primary title_font" style={{fontSize:'2.8rem'}}>Appointment</span>
        </h2>
        <div className="conatiner-appointment-form">
          <div className="appointment-left">
            <img src={Rightpic} alt="#" />
          </div>
          <div className="appointment-right">
            <form action="#" method="get">
              <div className="form-field">
                <label htmlFor="Fullname">Full Name</label>
                <input
                  type="text"
                  className="fullnanme"
                  value={formData.fullname}
                  onChange={(ev) =>
                    setFormData({ ...formData, fullname: ev.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  onChange={(ev) => setFormData({ address: ev.target.value })}
                  className="address"
                  value={formData.address}
                />
              </div>
              <div className="form-field">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="age"
                  onChange={(ev) =>
                    setFormData({ ...formData, age: ev.target.value })
                  }
                  value={formData.age}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="email"
                  value={formData.email}
                  onChange={(ev) =>
                    setFormData({ ...formData, email: ev.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  className="date"
                  value={formData.date}
                  onChange={(ev) =>
                    setFormData({ ...formData, date: ev.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Consultants Problems</label>
                <input
                  type="text"
                  className="message"
                  value={formData.message}
                  onChange={(ev) =>
                    setFormData({ ...formData, message: ev.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Appointment;

import "./appointment.css";
import { useState,useEffect} from "react";
import { HiOutlineXCircle } from "react-icons/hi";
const Appointment = () => {
  const [response, setResponse] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    age: "",
    email: "",
    date: "",
    message: "",
  });
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setFetching(true);
    const { fullname, address, age, email, date, message } = formData;
    const res = await fetch("https://shree-dental-and-care.vercel.app/api/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        address,
        age,
        email,
        date,
        message,
      }),
    });
    try{
    const data = await res.json();
    setFetching(false);
    if (data.status === '200') {
      setResponse(data.message);
      setShowResponse(true);
      setFormData({
        fullname: "",
        address: "",
        age: "",
        email: "",
        date: "",
        message: "",
      });
    } else {
      setResponse(data.message);
      setShowResponse(true);
    }
    }catch(err){
      console.log(err);
      setFetching(false);
      setResponse('Something went wrong');
      setShowResponse(true);
    }
  
  };
 useEffect(()=>{
    const timer = setTimeout(() => {
      setShowResponse(false);
    }, 3000);
    return () => clearTimeout(timer);
 },[showResponse]);

  return (
    <>
    { fetching && <div className="loader">
        <p>Sending mail ...</p>
    </div>}
    {
      !fetching && (
        <div className="container-main-appointment">
     
        <h2 className="textcolor_secondary title_font"style={{fontSize:'2.8rem'}}>
          Book an{" "}
          <span className="textcolor_primary title_font" style={{fontSize:'2.8rem'}}>Appointment</span>
        </h2> 
        {showResponse && (
          <div className="response">
            <p>{response}</p>
            <HiOutlineXCircle onClick={() => {
              setResponse(null)
              setShowResponse(false)
              }} />
          </div>
        ) }
        <div className="conatiner-appointment-form">
          <div className="appointment-left">
            {/* <img src={Rightpic} alt="#" /> */}
          </div>
          <div className="appointment-right">
            <form onSubmit={handleSubmit}>
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
                  onChange={(ev) => setFormData({...formData, address: ev.target.value })}
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
                required
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
                <textarea
                  rows={5}
                  cols={50}
                  type="text"
                  className="message"
                  value={formData.message}
                  onChange={(ev) =>
                    setFormData({ ...formData, message: ev.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <input type="submit" value="send"/>
              </div>
            </form>
          </div>
        </div>
      </div>
      )
    }
      
    </>
  );
};
export default Appointment;

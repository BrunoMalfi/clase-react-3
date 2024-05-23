import React, { useState, useEffect } from "react";
import "./Reserve.css"
const Reserve = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        date:"",
        time:"",
        gestNumber:""
    });

    const initialState = {
        name: "",
        email: "",
        date:"",
        time:"",
        gestNumber:""
    };

    const clearState = () => {
        setData(initialState);
    };

    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit =  (event) => {
        event.preventDefault();
        console.log("sending data..." + data.name + " " + data.email);
        
        localStorage.setItem(data.name,JSON.stringify(data));

        clearState();
    };

    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState("")
    const validateForm = () => {
        const emailEegex = /[@.]/g;
        switch (true) {
            case !data.name:
              setMessage("");
              break;
            case data.name.length < 3:
              setMessage("Name must be at least 3 characters");
              setBtnDisabled(true);
              break;
             case !data.email.match(emailEegex):
                 setMessage("Add a valid e-mail arddres");
                 break;
            case data.date.length == 0 :
                setMessage("Add booking date");
                break;
            case data.time.length == 0 :
                    setMessage("Add booking time");
                break;
            case data.gestNumber.length == 0 :
                    setMessage("Add number of gests");
                break;

            default:
              setMessage("");
              setBtnDisabled(false);
            break;
          }
      };
    
    useEffect(() => {
        validateForm();
      }, [data]);


  return (
    <>
    <form onSubmit={handleSubmit} id="simple-form">
        <div className="form-group">
            <label for="name">Name:</label>
            <input
                type="text"
                placeholder="name"
                value={data.name}
                onChange={handleInputChange}
                name="name"
            />
      </div>
      <div className="form-group">
        <label for="email">E-mail:</label>
        <input
            type="email"
            placeholder="email"
            value={data.email}
            onChange={handleInputChange}
            name="email"
        />
      </div>
      <div className="form-group">
        <label for="date">Date:</label>
        <input
            type="date"
            placeholder="2024-01-01"
            value={data.date}
            onChange={handleInputChange}
            name="date"
        />
      </div>
      <div className="form-group">
        <label for="time">Time:</label>
        <input
            type="time"
            placeholder="13:00"
            value={data.time}
            onChange={handleInputChange}
            name="time"
        />
      </div>
      <div className="form-group">
        <label for="gestNumber">Gest Number:</label>
        <input
            type="number"
            placeholder="4"
            value={data.gestNumber}
            onChange={handleInputChange}
            name="gestNumber"
        />
      </div>
        
        
        <button type="submit" disabled={btnDisabled} >Submit</button>
    </form>
    {message}
    </>
  )
}

export default Reserve
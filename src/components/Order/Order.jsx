import React, {useState} from 'react';
import Login from '../Login/Login';
import useToken from '../Login/useToken'
import {useNavigate} from 'react-router-dom'

export default function Order() {
  const navigate = useNavigate();

  const { token, setToken } = useToken();
  const [form, setForm] = React.useState({
    pork: false,
    tofu: false
  });

  if(!token) {
    return <Login setToken={setToken} />
  }

  const handleChange = () => {
    setForm({
      mains: document.getElementById("pork").checked ? "pork" : "tofu",
      brocoli: document.getElementById("brocoli").checked,
      carrots: document.getElementById("carrots").checked,
      rice: document.getElementById("rice").checked,
    })
  }

  const handleSubmit = (event) => {
    handleChange()

    fetch('http://localhost:3030/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

     console.log(form)
     navigate("/confirm");
  };

  return(
    <div>
      <h2 >Order</h2>

      <form onSubmit={handleSubmit}>
        <h3>Mains</h3>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="mains" id="pork" onChange={handleChange} />
          <label className="form-check-label" for="flexRadioDefault1">
            Pork
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="mains" id="tofu" onChange={handleChange} />
          <label className="form-check-label" for="flexRadioDefault2">
            Tofu
          </label>
        </div>

        <h3>Sides</h3>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="brocoli" onChange={handleChange} />
          <label className="form-check-label" for="brocoli">
            Broccoli
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="carrots" onChange={handleChange} />
          <label className="form-check-label" for="carrots">
            Carrots
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="rice" onChange={handleChange} />
          <label className="form-check-label" for="rice">
            Rice
          </label>
        </div>

        <button type="submit">Order now</button>
      </form>
    </div>
  );
}
import React, {useState} from 'react';
import Login from '../Login/Login';
import {signedIn} from '../Login/useToken'
import {useNavigate} from 'react-router-dom'

export default function Order() {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    pork: false,
    tofu: false
  });

  if(!localStorage.getItem('token')) {
    console.log("off we go")
    navigate('/login')
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
      body: JSON.stringify({...form, token: localStorage.getItem('token')})
    })

     console.log(form)
     navigate("/confirm");
  };

  return(
    <div>
      <h2 className="text-center">Order</h2>

      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-sm text-center border border-secondary rounded-3" style={{"padding": "12px", "border-width": "12px"}}>
          <h3>Mains</h3>
          
          <div className="d-flex  justify-content-center">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="pork" value="" />
              <label className="form-check-label" htmlFor="inlineRadio1">Pork</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="tofu" value="" />
              <label className="form-check-label" htmlFor="inlineRadio2">Tofu</label>
            </div>
          </div>
        </div>

        <div className="col-sm text-center border border-danger rounded-3" style={{"padding": "12px", "border-width": "12px"}}>
        <h3>Sides</h3>
          <div className="d-flex justify-content-center">
         <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" value="" id="brocoli" onChange={handleChange} />
          <label className="form-check-label" htmlFor="brocoli">
            Broccoli
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" value="" id="carrots" onChange={handleChange} />
          <label className="form-check-label" htmlFor="carrots">
            Carrots
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" value="" id="rice" onChange={handleChange} />
          <label className="form-check-label" htmlFor="rice">
            Rice
          </label>
        </div>
        </div>
        </div>
        <div className="col-sm text-center border border-success rounded-3" style={{"padding": "12px", "border-width": "12px"}}>
        <h3>Dessert</h3>
        <div className="d-flex justify-content-center">
         <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" value="" id="icecream" onChange={handleChange} />
          <label className="form-check-label" htmlFor="icecream">
            Ice Cream
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" value="" id="spudding" onChange={handleChange} />
          <label className="form-check-label" htmlFor="spudding">
            Sticky Toffee Pudding
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" value="" id="ccake" onChange={handleChange} />
          <label className="form-check-label" htmlFor="ccake">
            Banoffee Cheesecake
          </label>
        </div>
        </div>
        </div>
        </div>

        <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm text-center">
        <button type="submit" className="col-sm">Order now</button>
        </div>
        <div className="col-sm"></div>
        </div>
      </form>
    </div>
  );
}
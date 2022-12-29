import React from "react";
import { Link } from "react-router-dom";

import crisps from './crisps.jpg'
import pork from './pork.jpg'
import tofu from './tofu.jpg'
import icecream from './icecream.jpg'
import spud from './spud.jpg'
import ccake from './ccake.jpg'

function Posts() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={crisps}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Crisps</h1>
            <p>Starter</p>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={pork}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Pork loin</h1>
            <p>With honey garlic sauce, brocoli, carrots and rice</p>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={tofu}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Tofu</h1>
            <p>With honey garlic sauce, brocoli, carrots and rice</p>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={icecream}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Chocolate Ice Cream</h1>
            <p>Homemade Ice Cream</p>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={spud}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Sticky Toffee Pudding</h1>
            <p>Homemade Desert</p>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={ccake}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Cheesecake</h1>
            <p>Homemade Desert</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Posts;
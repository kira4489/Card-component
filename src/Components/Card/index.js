import React from "react";
import "./index.css";

const Card = () => {
  return (
    <div className="container__description">
      <h1>
        Get <strong className="container__subtitle">insights</strong> that help your business grow.
      </h1>
      <p>
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <ul className="list-important">
        <li>
          <b>10k+ </b>
          <p>Companies</p>
        </li>
        <li>
          <b>314</b>
          <p>templates</p>
        </li>
        <li>
          <b>12m+</b>
          <p>queries</p>
        </li>
      </ul>
    </div>
  );
};

export default Card;

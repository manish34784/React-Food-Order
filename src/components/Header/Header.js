import React, { Fragment } from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

export default function Header(props) {
  console.log("Header props: ", props);
  return (
    <Fragment>
      <header className="header">
        <h2>Meals</h2>
        <HeaderCartButton openCart={props.openCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Foods image" />
      </div>
    </Fragment>
  );
}

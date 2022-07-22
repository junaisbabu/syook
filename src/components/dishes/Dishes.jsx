import React, { useContext } from "react";
import { Context } from "../../context/context";
import DishesList from "./DishesList";
import "./dishes.css";
import Header from "./Header";

function Dishes() {
  const { dishes } = useContext(Context);

  return (
    <>
      <Header />
      <div className="dishes-container container">
        <div className="row justify-content-center">
          {dishes &&
            dishes.map((item) => {
              return <DishesList item={item} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Dishes;

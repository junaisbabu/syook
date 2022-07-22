import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

function Result() {
  const navigate = useNavigate();
  const { votes } = useContext(Context);
  console.log(votes);
  return (
    <div className="container col-sm-10 col-md-6">
      <table class="table table-dark table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Dish Name</th>
            <th scope="col">Point</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{votes[0]}</td>
            <td>{30}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{votes[1]}</td>
            <td>{20}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>{votes[2]}</td>
            <td>{10}</td>
          </tr>
        </tbody>
      </table>

      <div className="btn-container d-flex justify-content-center">
        <button
          className="btn btn-warning m-2"
          onClick={() => navigate("/dishes")}
        >
          Edit
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Result;

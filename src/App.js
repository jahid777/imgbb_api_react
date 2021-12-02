import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const handleSubmit = () => {};

  const handleInput = () => {};
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h5>select your product</h5>
        <select
          name="product"
          className="form-control"
          required
          onClick={handleInput}
        >
          <option value="shirt">This is shirt</option>
          <option value="pant">this is pant</option>
        </select>

        <h5 className="mt-5">select your country</h5>
        <select
          name="country mb-5"
          className="form-control"
          onClick={handleInput}
        >
          <option value="BD">BD</option>
          <option value="US">US</option>
        </select>
        <div className="mt-3 ">
          <label for="NameInput" className="form-label">
            Name
          </label>
          <input
            onClick={handleInput}
            type="text"
            className="form-control"
            id="NameInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onClick={handleInput}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="priceInput" className="form-label">
            Price
          </label>
          <input
            onClick={handleInput}
            type="email"
            className="form-control"
            id="priceInput"
            aria-describedby="emailHelp"
          />
        </div>
        <input type="file" name="photo" id="" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import Select from "react-select";
const Inputform = () => {
  const options = [
    { value: "item1", label: "item1" },
    { value: "item2", label: "item2" },
    { value: "item3", label: "item3" },
  ];
  const [select, setSelect] = useState("");
  const [data, setData] = useState({
    name: "",
  });
  const [terms, setterms] = useState();

  const handleselect = (value) => {
    setSelect(value);
  };
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  console.log(terms);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="formBg">
        <div className="formContainer">
          <form onSubmit={(e) => submitHandler(e)} className="setForm">
            <div class="row1">
              <div class="col">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => handle(e)}
                  class="form-control mt-3"
                  placeholder="First name"
                  aria-label="First name"
                  value={data.name}
                  required
                />
              </div>
              <Select
                id="selectdata"
                placeholder="Select Option"
                value={select}
                options={options}
                onChange={(e) => handleselect(e)}
              />
              <div>
                <label>Agree to terms and conditions:</label>
                <input
                  type="checkbox"
                  onChange={(e) => setterms(e)}
                  id="terms"
                  value={terms}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-info mt-3">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Inputform;

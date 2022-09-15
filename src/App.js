import "./App.css";
import React, { useState } from "react";

function App() {
  const [position, setPosition] = useState();
  const [type, setType] = useState();
  const [avail, setAvail] = useState(false);
  const [show, setShow] = useState();
  const [arr, setArr] = useState([]);
  const [arrVal, setArrVal] = useState([]);
  const [updArr, setUpdArr] = useState({});
  const emp = {
    position: position,
    type: type,
    avail: avail,
    showDetails: function () {
      if (avail) {
        setShow(
          `position :${position} 
          type:${type} 
          & able to accepting order.`
        );
      } else {
        setShow(
          `position of Employee is :${position} 
          type is :${type} 
          & not able to accepting order.`
        );
      }
    },
  };
  const showKeys = () => {
    setArr(Object.keys(emp));
  };
  const showValues = () => {
    setArrVal(Object.values(emp));
  };

  const update = () => {
    const foodItems = { 1: "1", 2: "2" };
    setUpdArr(Object.assign(emp, foodItems));
  };
  const prevent = () => {
    Object.freeze(emp);
  };
  const submit = () => {
    const employee = Object.create(emp);
    employee.showDetails();
  };
  return (
    <div className="App">
      <label htmlFor="position">Position:</label>
      <select
        name="position"
        id="position"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      >
        <option value="cashier">cashier</option>
        <option value="manager">manager</option>
      </select>
      <label htmlFor="type">Type:</label>
      <select
        name="type"
        id="type"
        value={type}
        onChange={(event) => setType(event.target.value)}
      >
        <option value="hourly">hourly</option>
        <option value="monthly">monthly</option>
        <option value="daily">daily</option>
      </select>
      <label htmlFor="availibility">Availibility:</label>
      <select
        name="availibility"
        id="availibility"
        value={avail}
        onChange={(event) => setAvail(event.target.value)}
      >
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      {/* <TASK 1 */}
      <div>
        <button onClick={submit}>Submit</button>
      </div>
      <div>
        <p>{show}</p>
      </div>
      <hr />
      {/* TASK2  */}
      <div>
        <h3>Number of Keys: {Object.keys(emp).length}</h3>
        <button onClick={showKeys}>Show keys</button>
        {arr.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <hr />
      {/* TASK 3 */}
      <div>
        <button onClick={showValues}>Show Values</button>
        {arrVal.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <hr />
      {/* TASK 4 */}
      <div>
        <pre>{`${Object.entries(emp)}`}</pre>
      </div>
      <hr />
      {/* TASK 5  */}
      <button onClick={update}>Show updated object</button>
      <pre>{`${Object.entries(updArr)}`}</pre>
      <hr />
      {/* TASK 6 ;   */}
      <button onClick={prevent}>task 6</button>
    </div>
  );
}

export default App;

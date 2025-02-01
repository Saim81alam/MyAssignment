import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [answer, setAnswer] = useState(0);

  function calculate(text) {
    let result = 0;
    if (input1 == 0 || input2 == 0) alert("Plese enter Number First");
    else {
      switch (text) {
        case "ADD":
          result = input1 + input2;
          setAnswer(result);
          result = 0;
          break;
        case "SUB":
          if (input1 > input2) {
            result = input1 - input2;
          } else {
            result = input2 - input1;
          }
          setAnswer(result);
          result = 0;
          break;
        case "MUL":
          result = input1 * input2;
          setAnswer(result);
          result = 0;
          break;
        case "DIV":
          if (input1 > input2) {
            result = input1 / input2;
          } else {
            result = input2 / input1;
          }
          setAnswer(result);
          result = 0;
          break;

        default:
          break;
      }
    }
  }

  return (
    <div className="card">
      <h1>CALCULATOR</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="ENTER FIRST NUMBER"
          onChange={(e) => setInput1(parseInt(e.target.value))}
        ></input>
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="ENTER SECOND NUMBER"
          onChange={(e) => setInput2(parseInt(e.target.value))}
        ></input>
      </div>
      <div
        className="btn-group mt-4"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={(e) => calculate(e.target.innerText)}
        >
          ADD
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={(e) => calculate(e.target.innerText)}
        >
          SUB
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={(e) => calculate(e.target.innerText)}
        >
          MUL
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={(e) => calculate(e.target.innerText)}
        >
          DIV
        </button>
      </div>
      <div className="answer border border-1 mt-4 rounded">
        RESULT : - {answer}
      </div>
    </div>
  );
}

export default Calculator;

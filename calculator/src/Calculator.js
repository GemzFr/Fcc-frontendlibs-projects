import React, {useState} from 'react'
import Button from './Button'

const DisplayBox = ({initialResult = "0", initialFormula = "", initialCalculated = false}) => {
  const [formula, setFormula] = useState(initialFormula);
  const [result, setResult] = useState(initialResult);
  const [calculated, setCalculated] = useState(initialCalculated);

  const handleClick = (e) => {
    const value = e.target.value;
    const oftype = e.target.dataset.oftype;
    const operators = /[/*+-]/;
    const decimalCheck = /(-?\d+\.\d*)$/;
    const lastChar = formula.charAt((formula.length - 1)); 
    e.preventDefault();

    /* if (calculated) {
      setCalculated(false)
      if (oftype === "number") {
        setFormula(value);
        setResult(value)
      } else if (oftype === "operator") {
        setFormula(formula => formula + value);
        setResult(value)
      }
    } */

    switch (oftype) {
      case "number": 
        if (calculated) {
          setFormula(value);
          setResult(value);
          setCalculated(false);
          break;
        }
        setFormula(formula => formula + value);
        (result !== "0" && !lastChar.match(operators))? setResult(result => result + value) : setResult(value)
        break;

      case "clear": 
        setFormula(initialFormula);
        setResult(initialResult);
        setCalculated(initialCalculated);
        break;

      case "decimal":
        if (calculated) {
          setFormula("0.");
          setResult("0.");
          setCalculated(false);
        } 
        if (formula.match(decimalCheck)) break;
        else {
          setFormula(formula => formula + value);
          setResult(result => result + value);
        }
        break;

      case "operator":
        if (calculated) {
          setFormula((result + value));
          setResult(value);
          setCalculated(false);
          break;
        } 
        if (lastChar.match(operators)) {
          if (value === "-" && lastChar !== "-") { 
            setFormula(formula => formula + value);
            setResult(value);
            break;
          } else if (value !== "-" && lastChar === "-") {
            const expression = formula.slice(0,-2);
            setFormula(expression + value);
            setResult(value);
            break;
          }
          const expression = formula.slice(0,-1);
          setFormula(expression + value);
          setResult(value);
        }
        else {
          setFormula(formula => formula + value);
          setResult(value);
        }
        break;

      case "equals":
        const toResult = eval(formula.replace(/[^0-9+\-*/.]/g, '')).toString()
        setFormula(formula => formula + (value + toResult));
        setResult(toResult);
        setCalculated(true);
        break;

      default:
        break;
    } 

  }

  return(
    <div className="display-wrapper container d-flex flex-row flex-wrap align-items-center justify-content-start">
      <div className="formula">{formula}</div>
      <div id="display" className="display">{result}</div>
      <Button handleClick={handleClick}/>
    </div>
  )
}

export default DisplayBox
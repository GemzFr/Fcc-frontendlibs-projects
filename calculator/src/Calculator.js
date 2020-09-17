import React, {useState} from 'react'
import Button from './Button'

const DisplayBox = ({initialResult = "0", initialFormula = ""}) => {
  const [formula, setFormula] = useState(initialFormula);
  const [result, setResult] = useState(initialResult);

  const handleClick = (e) => {
    const value = e.target.value;
    const oftype = e.target.dataset.oftype;
    const operators = /[/*+-]/;
    const decimalCheck = /(-?\d+\.\d*)$/;
    const lastChar = formula.charAt((formula.length - 1)); 
    e.preventDefault();

    switch (oftype) {
      case "number": 
        setFormula(formula => formula + value);
        (result !== "0" && !lastChar.match(operators))? setResult(result => result + value) : setResult(value)
        break;

      case "clear": 
        setFormula(initialFormula);
        setResult(initialResult);
        break;

      case "decimal": 
        if (formula.match(decimalCheck)) break;
        else {
          setFormula(formula => formula + value);
          setResult(result => result + value);
        }
        break;

      case "operator":
        if (lastChar.match(operators)) {
          if (value === "-" && lastChar !== "-") {
            setFormula(formula => formula + value);
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
import React, {useState} from 'react';
import TextInput from './TextInput';
import Button from './Button'



function Form(props) {

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const computeBmi = () => {
    let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight("")
    setWeight("")
  };
  const getBmi = (bmi) => {
    
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  };


  return (
    <div>   
      <div>
        <h1 style={{fontFamily:"'Work Sans', sans-serif"}}>BMI Calculator App</h1>
      </div>
      <br></br>

      <div className="row">
        <TextInput
          label="Height: "
          placeholder="Enter height in cm"
          handleChange={handleHeightChange}
          value={height}
        />
      </div>
      <div className="row">
        <TextInput
          label="Weight: "
          placeholder="Enter weight in kg"
          handleChange={handleWeightChange}
          value={weight}
          
        />
        
      </div>
      <div className="row">
        <Button label="CALCULATE" onClick={computeBmi} />
      </div>
      <br></br>
      <div className="row">
        {
          isNaN(bmi)?null:<h3 className="inp">Your BMI = {bmi}</h3> 
        }
        
      </div>
      <div className="row">
        <h3 className="inp">{bmiClass}</h3>
      </div>

      {/* <div>
      {
          isNaN(bmi)?null:<button>Try Again</button> 
        }
      </div> */}


    </div>
  );
}

export default Form;






            {/* <div>
              <button className="stopwatch-btn stopwatch-btn-yel" 
                      onClick={console.log("Yo")}>Reset</button>
              <button className="stopwatch-btn stopwatch-btn-gre" 
                      onClick={computeBmi}>Submit</button>
            </div> */}

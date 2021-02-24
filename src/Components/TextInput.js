import React from "react";
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
  return (
    <div>
      <label>{props.label}</label>

      <TextField id="standard-basic" type="number"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange} />
      
 
      
    </div>
  );
};

export default TextInput;
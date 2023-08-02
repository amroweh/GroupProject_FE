import React, { useState } from "react";
import DatePicker from "react-date-picker";
import {FormGroup, Form} from 'react-bootstrap';
import dateselector from "./css/dateselector.css"


const DateSelector = (props) => {
  
  return (
    <div>
    <FormGroup>
        <Form.Control onChange={props.dateChangeHandler} type="date" className="date"></Form.Control>
    </FormGroup>
    </div>
  )
}

export default DateSelector

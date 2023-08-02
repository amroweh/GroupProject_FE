import React, { useState } from "react";
import DatePicker from "react-date-picker";
import {FormGroup, Form} from 'react-bootstrap';
import dateselector from "./css/dateselector.css"


const DateSelector = (props) => {
  
  return (
    <div className="container" style={{marginBottom: "30px"}}>
    <FormGroup style={{textAlign: "left"}}>
        <Form.Label>Please choose a date to check different dates:</Form.Label>
        <Form.Control onChange={props.dateChangeHandler} type="date" className="date"></Form.Control>
    </FormGroup>
    </div>
  )
}

export default DateSelector

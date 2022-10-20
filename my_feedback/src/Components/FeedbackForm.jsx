import React from 'react'
import Card from "../Shared/Card"
import Button from "../Shared/Button"
import {useState} from "react";

function FeedbackForm() {
        const[text, setText] = useState("")
        const handleChange =(e)=>{
                setText(e.target.value)
        }
  return (
    <Card>
        <form>
        <h2>How would you rate?</h2>
    <div className="input-group">
        <input 
        onChange={handleChange} 
        type="text" 
        placeholder='write here...' 
        value={text}
        />
        <Button type="submit" >Send</Button>
    </div>
        </form>
     
      
    </Card>
  )
}

export default FeedbackForm

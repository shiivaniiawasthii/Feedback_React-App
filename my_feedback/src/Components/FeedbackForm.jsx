import React from 'react'
import Card from "../Shared/Card"
import Button from "../Shared/Button"
import {useState} from "react";
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {
        const[text, setText] = useState("")
        const[rating, setRating] = useState(10)
        const handleChange =(e)=>{
                setText(e.target.value)
        }
        const handleSubmit =(e)=>{
          e.preventDefault()
          const newFeedback={
                text,rating,
          }
          handleAdd(newFeedback)
          setText("")

        }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <h2>How would you rate?</h2>
        {/* ----rating--- */}
        <RatingSelect select={(rating)=>setRating(rating)}/>
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

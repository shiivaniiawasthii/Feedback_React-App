import React from 'react'
import FeedbackItems from './FeedbackItems'

function FeedbackList({feedback,handleDelete}) {
      console.log(feedback,"<= feedback") 
      if(!feedback || feedback.length===0)return("No Feedback Yet") 
  return (
    <div className='feedback-list'>
{feedback.map((item)=>

<FeedbackItems key={item.id} item={item} handleDelete={handleDelete}/>


)}
    </div>
  )
}

export default FeedbackList

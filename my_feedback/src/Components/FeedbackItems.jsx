import React from 'react';
import Card from '../Shared/Card';
import {FaTimes} from "react-icons/fa"

function FeedbackItems({item,handleDelete}) {
  return ( 
    <Card reverse={true}>
    
     <div className='num-dislay'> {item.rating}</div>
     <button className="close"onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple '/>
     </button >
     <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItems

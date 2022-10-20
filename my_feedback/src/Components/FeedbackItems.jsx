import React from 'react';
import Card from '../Shared/Card';
import {FaTimes} from "react-icons/fa"

function FeedbackItems({item,handleDelete}) {
  return ( 
    <Card>
    
     <div className='num-dislay'> Rating :{item.rating}</div>
     <button className="close"onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple '/>
     </button >
     <div className='text-display'> Text :{item.text}</div>
    </Card>
  )
}

export default FeedbackItems

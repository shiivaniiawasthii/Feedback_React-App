import React from 'react'

function FeedbackStats({FeedbackCal}) {
      
        // let sum =0,count=0,ans;
        // FeedbackCal.map((item)=>{
        //         sum+=item.rating
        //         count++
        // })
        // ans = Math.floor(sum/count);

        let average = FeedbackCal.reduce((acc,curr)=>{
                return acc+curr.rating
        },0)/FeedbackCal.length
        console.log(Math.floor(average));
  return (
    <div>
      <h3>Average-Rating: {isNaN(average)?0: average}</h3>
      <h3>Review: {FeedbackCal.length}</h3>

    </div>
  )
}

export default FeedbackStats

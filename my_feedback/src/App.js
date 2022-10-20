
import './App.css';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './Data/Data';
import { useState } from 'react';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const  deleteFeedback =(id)=>{
    console.log(id,"<= which has to deleted")
    if(window.confirm("Are you sure to delete this??")){
     setFeedback(feedback.filter((item)=>item.id !==id))
    }
 }
  return (
    <div className="App">
      <Header/>
      <FeedbackStats FeedbackCal={feedback}/>
     <div className='container'>
      <FeedbackForm/>
     <FeedbackList feedback={feedback}
     handleDelete={deleteFeedback}/>
    </div>
    </div>
  );
}

export default App;

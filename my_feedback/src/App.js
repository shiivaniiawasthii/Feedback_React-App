import{BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import "./index.css"
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './Data/Data';
import { useState } from 'react';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import AboutPage from "./Pages/AboutPage";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const addFeedback =(newFeedback)=>{
    newFeedback.id = Date.now()
console.log(newFeedback)
setFeedback([newFeedback,...feedback])
  }
  
  const  deleteFeedback =(id)=>{
    console.log(id,"<= which has to deleted")
    if(window.confirm("Are you sure to delete this??")){
     setFeedback(feedback.filter((item)=>item.id !==id))
    }
 }
  return (
    
<Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback}/>
                  <FeedbackStats FeedbackCal={feedback} />
                  <FeedbackList  feedback={feedback} handleDelete={deleteFeedback}/>
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          {/* <AboutIconLink /> */}
        </div>
      </Router>
      
  );
}

export default App;

    



  
 
      
  
   
     
     
     
 
        
      
    
   
    
   
   

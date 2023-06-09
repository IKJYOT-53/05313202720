import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [trains,setTrains] = useState("")
  const getTrains = async () => {
    let result = axios.get("http://127.0.0.1:5000/trains");
    result.then((result) => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getTrains();
  }, [])
  
  return (
    <div className="App">
      {trains}
    </div>
  );
}

export default App;

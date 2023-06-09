import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
function App() {
  const [trains,setTrains] = useState("")
  const getTrains = async () => {
    let result = axios.get("http://localhost:5000/trains");
    result.then((result) => {
      setTrains(result.data)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getTrains();
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      {JSON.stringify(trains)}
    </div>
  );
}

export default App;

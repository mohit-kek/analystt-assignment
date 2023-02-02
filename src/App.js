import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserInfo from './UserInfo';

function App() {
  const [accordion, setAccordion] = useState(false);
  const [data, setData] = useState([]);

  // const data = {
  //   name: "abc",
  //   contact: "78787887",
  //   city: "delhi",
  //   state: "delhi",
  // };

  const handleToggle = (id) => {

    const findUser = data.find((user) => user.id === id);
  setAccordion(prev => !prev);
}

const fetchData = async () => {
  let res = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .catch((err) => {
      console.log("Err", err);
    })
  console.log(res.data);
  setData(res.data);
}

useEffect(() => {
  fetchData()
}, [])

return (
  <div className="container">

    {
      data.map((item) => (
        <div className="user" key={item.id}>
          <div className='user__data'>
            <span>{item.company.name}</span>
            <div >
              <h2>Contact</h2>
              <span>{item.name}</span>
            </div>
            <div>
              <h2>City</h2>
              <span>{item.address.city}</span>
            </div>
            <div>
              <h2>State</h2>
              <span>{item.address.street}</span>
            </div>
            <button className="btn" onClick={() => handleToggle(item.id)}>{accordion ? "Hide Details" : "View Details"}</button>
          </div>
          {
            accordion && <UserInfo item={item} />
          }

        </div>
      ))
    }



  </div >
)
}

export default App;

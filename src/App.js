import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Accordion from './Accordion';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    let res = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((err) => {
        console.log("Err", err);
      })
    setData(res.data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const selectPageHander =(selectedPage) => {
if (selectedPage >= 1 && selectedPage <= Math.ceil(data.length/3) && selectedPage !== page)
    setPage(selectedPage);
  }

  return (
    <div className="container">
      {
        data.slice(page * 3 - 3, page * 3).map(item => (
          <Accordion data={item} key={item.id} />
        ))
      }
      {
        data.length > 0 && (
          <div className="pagination">
            <span><MdKeyboardArrowLeft onClick={() => selectPageHander(page - 1)} /></span>
            {
              [...Array(Math.ceil(data.length / 3))].map((_, i) => {
                return <span className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHander(i + 1)} key={i}>{i + 1}</span>
              })
            }
            <span><MdKeyboardArrowRight onClick={() => selectPageHander(page + 1)} /></span>

          </div>
        )
      }

    </div >
  )
}

export default App;

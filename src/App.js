import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [myData, setMyData] = useState([])
  useEffect(() => {
    async function fetchData() {
      // make the api call on load of this component
      // https://developer.trademe.co.nz/api-reference/catalogue-methods/search-the-blu-ray-catalogue/
      const response = await fetch('https://api.trademe.co.nz/v1/bluray/find.json?search=batman');
      const jsonData = await response.json();

      // store the result somewhere
      setMyData(jsonData.List); // as per the docs the array is in another property called List
    }
    fetchData();
  }, []);


  // display the result on the page
  // todo: css.
  return (
    <div >
      HI, you got {myData.length} data
      { myData.map(data => <div className="movie-card">name: {data.Name},  Year: {data.MovieYear}</div>)}
    </div>
  );
}

export default App;

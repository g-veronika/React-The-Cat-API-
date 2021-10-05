import {useState, useEffect} from 'react'; 
import './App.css';

function App() {

  const [dataImage, setDataImage] = useState();

  useEffect(()=> {

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      console.log(response)
      return response.json();
    })
    .then(data => {
      console.log(data)
      setDataImage(data[0].url)
    })

  }, [])

  return (
    <div className="App">
      {dataImage && <img src={dataImage} alt="cat image" style={{width: "500px"}}/>}
    </div>
  );
}

export default App;

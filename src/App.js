import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
function App() {
  const ref = useRef("");
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/2")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
    // console.log()
  }, []);
  function datimage() {
    window.location.reload();
    // console.log(dogImage);
  }
  return (
    <>
      <div className="App" ref={ref}>
        {/* <h2>Start editing to see some magic happen!</h2> */}
        {dogImage &&
          dogImage.map((dog) => <img height="50%" width="50%" src={dog}></img>)}
      </div>
      <button onClick={datimage}>Refresh</button>
    </>
  );
}
export default App;

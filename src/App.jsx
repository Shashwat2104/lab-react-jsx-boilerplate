import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};

function App() {
  const images = imageData();
  return (
    <div className="App">
      <h1>Kalvium gallary</h1>
      {images.map((el) => {
        return (
          <div key={el.id}>
            <img src={el.img} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

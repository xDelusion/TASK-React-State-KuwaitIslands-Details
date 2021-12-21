
import './App.css';
import Header from './Components/Header';
import IslandForm from './Components/IslandForm';
import IslandList from './Components/IslandList';


function App() {

  let island = {
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg"
  }

  return (

    <div>
      <Header />

      <div className="homePage">
        <IslandList />
        <IslandForm island={island} />
      </div>
    </div>
  );
}

export default App;

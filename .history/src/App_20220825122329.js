import './App.css';
import Home from './components/Home';
import Tour from './components/Tour';
import data from './data'

function App() {
  // Mapping through the data file
  const places = data.map(place => {
    return <Tour 
              key = {place.id}
              {...place}
            />
  })

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Tour /> */}
      {places}
    </div>
  );
}

export default App;
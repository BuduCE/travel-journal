import './App.css';
import Home from './components/Home';
import Tour from './components/Tour';

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
      <Tour />
    </div>
  );
}

export default App;
import './App.css';
import Container from './components/weather_app/Container'
import {LocationProvider} from "./components/context/LocationContex"

function App() {
  return (
      <LocationProvider>
        <Container/>
      </LocationProvider>
  );
}

export default App;

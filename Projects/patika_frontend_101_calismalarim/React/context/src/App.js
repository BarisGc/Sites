
import './App.css';
import Container from './components/Container';
import {ThemeProvider} from './context/ThemeContext';
import {UserProvider} from './context/UserContext';

function App() {
  return (
  <ThemeProvider>
    <UserProvider>
    {/* bu bölge children */}
      <Container/>
    </UserProvider>
  </ThemeProvider>
  ); 
}

export default App;

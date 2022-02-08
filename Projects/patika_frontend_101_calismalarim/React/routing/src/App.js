
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./components/Home"
import Users from "./components/Users"
// import User from "./components/User"
import About from "./components/About"
import Error404 from "./components/Error404"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink activeStyle={{backgroundColor:"black"}} to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/about">About</NavLink>  
              {/* "active" ismiyle custom bir css kullanabilirsin */}
            </li>
            <li>
              <NavLink activeStyle={{backgroundColor:"black"}} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/" exact component={Home} /> bunu kullan ya da exact'sız en alta koy */}
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          {/* <Route path="/user/:id" component={User} /> */}
          <Route path="/" exact> {/* bunu en alta koy yoksa problem oluyor ya da exact ile yazman lazım yoksa "/" başladığı için direk çalıştırır her zaman */}
            <Home />
          </Route>
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>

  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// ayrı ayrı component dosyaları oluşturup import ettiğim için bu şekilde yazmaya gerek kalmadı.

export default App;

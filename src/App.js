import logo from './logo.svg';

import {client} from './lib/client'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signin from './pages/Signin';
import Media from './pages/Media'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
const handleClicker = () => {
 const query = `*[_type == "author"]{name,image,bio}`;
  client.fetch(query).then((author) => {
    console.log(author)
  })

}
  return (
    <div className="bg-blue-100">
      <Router>
      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/" component={Login} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/media" component={Media} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from './components/navigationBar'
import Home from './components/home/home'
import Services from './components/services/services'
import Register from './components/users/register'
import LogIn from './components/sessions/logIn'
import ProjectList from './components/projects/projectList'
import ProjectCreate from './components/projects/projectCreate'
import ProjectEdit from './components/projects/projectEdit'
import ProjectDetails from './components/projects/projectDetails'
import DesignsCreate from './components/designs/designCreate'
import DesignsList from './components/designs/designsList'
import Switch from 'react-bootstrap/esm/Switch';
//import Footer from './components/footer'



function App() {
  return (
    <div id="content">
      <Router>
        <NavigationBar />{/* */}
        <Switch>
          <Route path="/" exact component={Home} />{/* */}
          <Route path="/services" exact component={Services} />{/*TODO */}
          <Route path="/register" exact component={Register} />{/* */}
          <Route path="/login" exact component={LogIn} />{/* */}
          <Route path="/projects" exact component={ProjectList} />{/*TODO */}
          <Route path="/projects/create" exact component={ProjectCreate} />{/* */}
          <Route path="/projects/edit" exact component={ProjectEdit} />{/* */}
          <Route path="/projects/detail/:id" exact component={ProjectDetails} />{/* */}
          <Route path="/designs/:company/create" exact component={DesignsCreate} />{/*TODO */}
          <Route path="/designs/:company" exact component={DesignsList} />{/*TODO */}
        </Switch>

      </Router>
    </div>
  );
}

export default App;

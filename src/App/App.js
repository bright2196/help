import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AmbiancePage from "../pages/AmbiancePage";
import Authentification from "../pages/Authentification";
import Calendar from "../pages/Calendar";
import Connexion from "../pages/Connexion";
import CurrentPlay from "../pages/CurrentPlay";
import Home from "../pages/Home";
import Inscription from "../pages/Inscription";
import MenuPlayer from "../pages/MenuPlayer";
import ModifyProfile from "../pages/ModifyProfile";
import MyAccount from "../pages/MyAccount";
import MyLike from "../pages/MyLike";
import MyProfile from "../pages/MyProfile";
import Questionnaire from "../pages/Questionnaire";
import HooksPage from "../pages/HooksPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/ambiance" component={AmbiancePage} />
          <Route path="/Home" component={Home} />
          <Route path="/mon-agenda" component={Calendar} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/musique-en-cours" component={CurrentPlay} />
          <Route path="/" exact component={Authentification} />
          <Route path="/inscription" component={Inscription} />
          <Route path="/plus" component={MenuPlayer} />
          <Route path="/modifier-mon-profil" component={ModifyProfile} />
          <Route path="/mon-compte" component={MyAccount} />
          <Route path="/mes-likes" component={MyLike} />
          <Route path="/mon-profil" component={MyProfile} />
          <Route path="/quizz" component={Questionnaire} />
          <Route path="/Hooks" component={HooksPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

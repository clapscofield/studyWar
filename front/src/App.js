import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import PaginaInicial from "features/paginaInicial";
import CadastroInstituicao from "features/cadastroInstituicao";
import CriarGuerraEstudos from "features/criacaoGuerraEstudos/views/criarGuerraEstudos";
import LandingInst from "features/LandingInst";
import LandingEst from "features/LandingEst";

const App = props => {
  return (
    <Router>
      <Switch>
        <Route path="/pagina-inicial" render={(props) => <PaginaInicial {...props} />} />
        <Route path="/cadastro-instituicao" render={(props) => <CadastroInstituicao {...props} />} />


        <Route path="/landing-inst" render={(props) => <LandingInst {...props} />}  />
        <Route path="/criar-guerra" render={(props) => <CriarGuerraEstudos {...props} />} /> 
        <Route path="/landing-est" render={(props) => <LandingEst {...props} />} />

        <Route path="/components" render={(props) => <Index {...props} />} />
        <Route
            path="/landing-page"
            render={(props) => <LandingPage {...props} />}
        />
        <Route
            path="/register-page"
            render={(props) => <RegisterPage {...props} />}
        />
        <Route
            path="/profile-page"
            render={(props) => <ProfilePage {...props} />}
        />
        <Redirect from="/" to="/pagina-inicial" />
      </Switch>
    </Router>
  );
};

export default App;
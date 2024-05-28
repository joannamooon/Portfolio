import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes } from "react-router-dom";

import { About } from "../pages/about";
import { Home } from "../pages/home";

import { Projects } from "../pages/projects";
import React from "react";
import { Socialicons } from "../components/socialicons";
import withRouter from "../hooks/withRouter"

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;

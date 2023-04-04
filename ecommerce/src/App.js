// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";
// import Layout from "./pages/Layout";
// import "./styles/shared.css";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/products" component={Products} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/layout" component={Layout} />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./App.css";

export const AppContext = React.createContext();

function App() {
  const [basename, setBasename] = useState("/");

  return (
    <AppContext.Provider value={{ basename, setBasename }}>
      <Router basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;

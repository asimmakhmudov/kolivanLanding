import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

i18n.init({
  resources: {
    az: {
      translation: require('./translate/az.json'),
    },
    en: {
      translation: require('./translate/en.json'),
    },
  },
  lng: localStorage.getItem("language") || "az",
  fallbackLng: "az",
});

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Router>
          <Navbar />
          <Home />
        </Router>
      </I18nextProvider>
    </div>
  );
}

export default App;

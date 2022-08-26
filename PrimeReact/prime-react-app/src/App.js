import React from 'react';

import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";                                  //primeflex

import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";

function App({ props }) {
  const items = [
      { label: "Computer" },
      { label: "Notebook" },
      { label: "Accessories" },
      { label: "Backpacks" },
      { label: "Item" },
  ];

  const home = {
      icon: "pi pi-home",
      url: "https://www.primefaces.org/primereact/showcase",
  };

  return (
      <div className="App">
          <div class="topbar shadow-2">
              <div className="card">
                  <BreadCrumb model={items} home={home} />
              </div>
          </div>
          <h5>Raised Buttons</h5>
          <Button label="Primary" className="p-button-raised" />
          <Button
              label="Secondary"
              className="p-button-raised p-button-secondary"
          />
          <Button
              label="Success"
              className="p-button-raised p-button-success"
          />
          <Button label="Info" className="p-button-raised p-button-info" />
          <Button
              label="Warning"
              className="p-button-raised p-button-warning"
          />
          <Button label="Help" className="p-button-raised p-button-help" />
          <Button label="Danger" className="p-button-raised p-button-danger" />
      </div>
  );
}

export default App;

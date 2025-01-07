import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDownElement = document.getElementById("app");
const root = ReactDOM.createRoot(appDownElement);
const button1 = React.createElement("button", null, "Soy El boton1");
const button2 = React.createElement("button", null, "Soy El boton2");
const button3 = React.createElement("button", null, "Soy El boton3");

const app = React.createElement(React.Fragment, null, [button1, button2, button3]);
root.render(app)
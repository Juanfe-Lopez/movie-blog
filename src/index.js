import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-l81w8lr2jvlpmvle.us.auth0.com"
    clientId="hLyc4xz9VJUY9BtbwVNWT1Q8LocmXUby"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
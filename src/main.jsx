import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "remixicon/fonts/remixicon.css";

import App from "./App";
import AuthProvider from "./contexts/auth-provider";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider
        domain="http://localhost:1000"
        tenant="server-local"
        clientId="63e4c142d7790d18a0942dc4"
        clientSecret="$2b$04$wsIQODcadMaOtMHYXdFODuk6khAfGHVtzB6Te1CEojS7cNlx6BJHm"
        redirectUri={window.location.origin + "/notes"}
        audience="http://localhost:1337"
        scope="read:notes write:notes update:notes delete:notes"
      >
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);

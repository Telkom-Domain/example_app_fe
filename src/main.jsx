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
        domain="https://api-dev.domain-dev.site"
        tenant="development"
        clientId="64070cdfb96e6dcb31cb15c6"
        clientSecret="$2b$04$4D9HaW3TJOYvVzAxvI8en.V7oQp5wFbI3wpmGm81fmcU04mNBw2iK"
        redirectUri={window.location.origin + "/notes"}
        audience="http://host.docker.internal:1337"
        scope="read:notes write:notes update:notes delete:notes"
      >
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);

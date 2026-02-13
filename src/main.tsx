import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <div>
        <h1>Welcome to Amplify Practice!</h1>
        <p>This is a simple React app using AWS Amplify.</p>
      </div>
    </Authenticator>
  </React.StrictMode>,
);

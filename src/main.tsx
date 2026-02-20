import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <div>
        <h1>User Details</h1>
        <Authenticator>
          {({ signOut, user }) => (
            <div>
              <p>Username: {user?.username}</p>
              <p>UserId: {user?.userId}</p>
              <p>LoginId: {user?.signInDetails?.loginId}</p>
              <button onClick={signOut}>Sign Out</button>
            </div>
          )}
        </Authenticator>
      </div>
      <App />
    </Authenticator>
  </React.StrictMode>
);

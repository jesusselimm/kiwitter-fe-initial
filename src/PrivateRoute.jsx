import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./UserContextDepo";

export default function PrivateRoute({ children, ...rest }) {
  
    const { user } = useContext(UserContext);
  
    console.log("private route içindeyiz");
  
    return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
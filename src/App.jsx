import "./App.css";
import { Switch, Route } from "react-router-dom";
import PageLayout from "./PageLayout";
import Login from "./Login";
import Signup from "./Signup";
import { UserContexDepo } from "./UserContextDepo";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <UserContexDepo>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/" exact>
          {/* /?variant=most_liked */}
          <PageLayout>Home</PageLayout>
        </Route>
        <Route path="/profile/:nick">
          <PageLayout>Profile page</PageLayout>
        </Route>
        <PrivateRoute path="/detail/:twitId">
            <PageLayout>Twit detail</PageLayout>
        </PrivateRoute>
      </Switch>
      </UserContexDepo>
    </div>
  );
}

export default App;

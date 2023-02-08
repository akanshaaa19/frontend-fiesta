import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import NavigationBar from "./components/Navigation Bar/Navigation";
import store, { uiActions } from "./store";
import Modal from "./components/Modal/Modal";
import AuthForm from "./components/Auth.jsx/AuthForm";
import Home from "./pages/Home";

function App() {
  const authState = useSelector((state) => state.ui.authState);
  return (
      <BrowserRouter>

        {authState && (
          <Modal>
            <AuthForm />
          </Modal>
        )}
        <NavigationBar
          name="blub"
          navlinks={[
            { title: "Review", link: "/review" },
            { title: "Find", link: "/find" },
            { title: "Create", link: "create" },
          ]}
          
        />
        <Route path="/" exact>
          <Home />
        </Route>
      </BrowserRouter>
  );
}

export default App;

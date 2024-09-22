import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import Addbook from "./Components/Addbook";


function App() {
  return (
   <>
    <Provider store={store} >
          <Header >
            <Addbook/>
          </Header>
          <Outlet />
     </Provider>
   
   </>
  );
}

export default App;
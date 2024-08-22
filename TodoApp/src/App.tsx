import { Provider } from "react-redux";
import Dashboard from "./ui/dashboard";
import store from "./ui/store.js";
function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;

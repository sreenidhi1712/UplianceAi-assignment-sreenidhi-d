
import { Provider } from "react-redux"
import store from "./GlobalData/Store"
import Home from "./pages/Home"


function App() {
  return (
    <div>
      <Provider store={store}>
          <Home/>
      </Provider>
    </div>
  )
}

export default App

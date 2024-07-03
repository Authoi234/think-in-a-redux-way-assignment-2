import { Provider } from "react-redux";
import store from "./redux/store";
import InputForm from './components/InputForm';
import Header from './components/Header';
import DataDisplay from "./components/DataDisplay";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <InputForm></InputForm>
        <DataDisplay></DataDisplay>
      </div>
    </Provider>
  );
}
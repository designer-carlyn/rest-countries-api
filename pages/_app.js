import "@/scss/layout/index.scss";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component }) {
  return (
    <>
      <Provider store={store}>
        <Component />
      </Provider>
    </>
  );
}

import { Provider } from "react-redux";
import { store, persistore } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>{children}</PersistGate>
    </Provider>
  );
};

export default ReduxProvider;

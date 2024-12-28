import { useContext, createContext, useState } from "react";
const Alert = createContext(undefined);

export const AlertPrv = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: "success",
    message: "",
  });

  return (
    <Alert.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: "", message: "" }),
      }}
    >
      {children}
    </Alert.Provider>
  );
};
export const useAlertContext = () => useContext(Alert);

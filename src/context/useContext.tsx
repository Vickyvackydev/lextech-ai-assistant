/* eslint-disable react/jsx-no-constructed-context-values */

import { dataProps } from "@/types";
import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Props {
  // i set params types for the context
  showsent: boolean;
  setShowSent: React.Dispatch<SetStateAction<boolean>>;
  addproductModal: boolean;
  transactionsuccess: boolean;
  setTransactionsuccess: React.Dispatch<SetStateAction<boolean>>;
  setAddProductModal: React.Dispatch<SetStateAction<boolean>>;
  actionstate: string;
  setActionstate: React.Dispatch<SetStateAction<string>>;
  inputdetailsModal: boolean;
  setInputDetailsModal: React.Dispatch<SetStateAction<boolean>>;
  selected: dataProps | null;
  setselected: React.Dispatch<React.SetStateAction<dataProps | null>>;
  showbox: boolean;
  setShowBox: React.Dispatch<SetStateAction<boolean>>;
  selectedBox: Array<[]>;
  setSelectedBox: React.Dispatch<SetStateAction<Array<[]>>>;
  handleSelector: any;
  addDebitCard: boolean;
  setAddDebitCard: React.Dispatch<React.SetStateAction<boolean>>;
  state: string;
  setState: React.Dispatch<SetStateAction<string>>;
  showSearchBar: boolean;
  setShowSearchBar: React.Dispatch<SetStateAction<boolean>>;
  selectedLog: string;
  setSelectedLog: React.Dispatch<SetStateAction<string>>;
  showtransactionslayout: boolean;
  setShowtransactionlayout: React.Dispatch<SetStateAction<boolean>>;
  selectedMessage: any;
  setSelectedMessage: React.Dispatch<SetStateAction<any | null>>;
}

const AppContext = createContext<Props>({
  // i define the context state
  handleSelector: () => {},
  showbox: false,
  setShowBox: () => {},
  selectedBox: [],
  setSelectedBox: () => [],
  showsent: false,
  setShowSent: () => {},
  transactionsuccess: false,
  setTransactionsuccess: () => {},
  addproductModal: false,
  setAddProductModal: () => {},
  actionstate: "",
  setActionstate: () => {},
  inputdetailsModal: false,
  setInputDetailsModal: () => {},
  selected: null,
  setselected: () => {},
  addDebitCard: false,
  setAddDebitCard: () => {},
  state: "",
  setState: () => {},
  showSearchBar: false,
  setShowSearchBar: () => {},
  selectedLog: "",
  setSelectedLog: () => {},
  showtransactionslayout: false,
  setShowtransactionlayout: () => {},
  selectedMessage: null,
  setSelectedMessage: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selected, setselected] = useState<dataProps | null>(null);
  const [inputdetailsModal, setInputDetailsModal] = useState(false);
  const [actionstate, setActionstate] = useState<string>("");
  const [addproductModal, setAddProductModal] = useState(false);
  const [transactionsuccess, setTransactionsuccess] = useState(false);
  const [showsent, setShowSent] = useState(false);
  const [showbox, setShowBox] = useState(false);
  const [selectedBox, setSelectedBox] = useState<any>([]);
  const [addDebitCard, setAddDebitCard] = useState(false);
  const [state, setState] = useState("home");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [selectedLog, setSelectedLog] = useState("fiat-wallet");
  const [showtransactionslayout, setShowtransactionlayout] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  const handleSelector = (id: any) => {
    setSelectedBox((prevSelectedBox: any[]) => {
      if (prevSelectedBox.includes(id)) {
        return prevSelectedBox.filter((box_id: any) => box_id !== id);
      } else {
        return [...prevSelectedBox, id];
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        selected,
        setselected,
        inputdetailsModal,
        setInputDetailsModal,
        actionstate,
        setActionstate,
        addproductModal,
        setAddProductModal,
        transactionsuccess,
        setTransactionsuccess,
        showsent,
        setShowSent,
        showbox,
        setShowBox,
        selectedBox,
        setSelectedBox,
        handleSelector,
        addDebitCard,
        setAddDebitCard,
        state,
        setState,
        showSearchBar,
        setShowSearchBar,
        selectedLog,
        setSelectedLog,
        showtransactionslayout,
        setShowtransactionlayout,
        selectedMessage,
        setSelectedMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppQuery = (): Props => useContext(AppContext);

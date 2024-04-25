import { useState } from "react";
import { AddItemButton } from "./components/styles";
import { Column } from "./components/Column";
import { CustomDragLayer } from "./components/CustomDragLayer";
import { addList } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./components/styles";
import { AddNewItem } from "./components/AddNewItem"; // Don't forget to import AddNewItem

function App() {
  const { lists, dispatch } = useAppState();
  const [isAddNewItemVisible, setIsAddNewItemVisible] = useState(true);

  const handleAddList = (text: string) => {
    dispatch(addList(text));
    setIsAddNewItemVisible(false);
  };

  return (
    <>
      <AppContainer>
        <CustomDragLayer />
        {lists.map((list) => (
          <Column key={list.id} id={list.id} text={list.text} />
        ))}
        {isAddNewItemVisible && (
          <AddNewItem
            toggleButtonText="+ Create new list"
            onAdd={handleAddList}
          />
        )}
      </AppContainer>
    </>
  );
}

export default App;

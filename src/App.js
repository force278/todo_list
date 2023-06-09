import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  
  const [listState, setListState] = useState([])
  const [modalState, setModalState] = useState({active:false, index:null})

  // Главный стиль
  let AppStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  } 

  // Стиль для текста о пустом списке
  let EmptyTextStyle = { 
    color: 'black',
    marginTop: '15px'
  }


  return (
    <div style={AppStyle}>
      { /* Компонент список */ }
      <ToDoList listState={listState} setListState={setListState}>
        { /* Проверка на пустой список */
          listState.length !== 0 ? listState.map((item, index)=>{
            return(
                <ToDoItem key={index} text={item.text} markerColor={item.markerColor} setModalState={setModalState} index={index} />
            )
          }) : <h4 style={EmptyTextStyle}>Тут пока пусто🥺</h4>
        } 
      </ToDoList>
      <Modal modalState={modalState} setModalState={setModalState} listState={listState} setListState={setListState} />
    </div>
  );
}

export default App;

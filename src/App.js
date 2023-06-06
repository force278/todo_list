import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import { useState } from "react";

function App() {
  
  const [listState, setListState] = useState([])

  // Главный стиль
  let AppStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center'
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
              <ToDoItem key={index} text={item} />
            )
          }) : <h2 style={EmptyTextStyle}>Тут пока пусто🥺</h2>
        } 
      </ToDoList>
    </div>
  );
}

export default App;

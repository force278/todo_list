import { useState } from "react"


// Компонент Список
function ToDoList({children, listState, setListState}) {
    // Состояние для добавляемого элемента в инпуте
    const [itemState, setItemState] = useState({text:'', markerColor:''})

    // Функция добавления элемента в список
    function addItemToList() {
        if (itemState.text !== '') {
            // Юзаем оператор расширения и создаем новый массив с нашим новым элементом в конце
            setListState([...listState, itemState])
            // Инпут на ноль
            setItemState({text:'', markerColor:''})
        }
    }

    // Стиль для списка
    let ListStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'SlateGray',
        paddingBottom: '15px',
        width: '500px',
        height: 'max-content',
        boxShadow: ' 0.3em 0.3em 1em rgba(0,0,0,0.3)',
        
    }

    let HeaderTextStyle = {
        backgroundColor: 'white',
        fontSize: '28px',
        fontWeight: 'bold',
        width: 'max-content',
        height: 'max-content',
        position: 'relative',
        paddingLeft: '10px',
        paddingRight: '10px',
        top: '10px',
        marginLeft: '20px',
        borderRadius: '10px'
    }

    // Стиль для дива с инпутом и кнопкой
    let InputBlockStyle = {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
        alignItems: 'center'
    }

    // Стиль для инпута
    let InputStyle = {
        paddingLeft: '10px',
        borderRadius: '10px',
        borderWidth: '1px',
        height: 'max-content'
        
    }

    // Для кнопки + 
    let AddButton = {
        marginLeft: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        width: '30px',
        height: '30px',
        borderWidth: '1px',
        borderRadius: '30px',

    }

    return(
        <div>
            <div style={HeaderTextStyle}>План на день</div>
            <div style={ListStyle}>
                {children}
            </div>
            <div style={InputBlockStyle}>
                {/* Ограничил максимальную длину текста */}
                <input style={InputStyle} maxLength={32} placeholder="Добавьте задачу..." value={itemState.text} onChange={(e)=>{setItemState({text:e.target.value, markerColor: ''})}}></input>
                <button style={AddButton} onClick={addItemToList}>+</button>
            </div>
        </div>
    )
}

export default ToDoList;
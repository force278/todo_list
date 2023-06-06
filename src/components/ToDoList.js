import { useState } from "react"


// Компонент Список
function ToDoList({children, listState, setListState}) {
    // Состояние для добавляемого элемента в инпуте
    const [itemState, setItemState] = useState('')

    // Функция добавления элемента в список
    function addItemToList() {
        // Юзаем оператор расширения и создаем новый массив с нашим новым элементом в конце
        setListState([...listState, itemState])
        // Инпут на ноль
        setItemState('')
    }

    // Стиль для списка
    let ListStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'gray',
        paddingBottom: '15px',
        width: '500px',
        height: 'max-content',
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
        fontSize: '24px',
        fontWeight: 'bold',
        width: '50px',
        height: '50px',
        borderWidth: '1px',
        borderRadius: '50px',

    }

    return(
        <div>
            <h2>План на день</h2>
            <div style={ListStyle}>
                {children}
            </div>
            <div style={InputBlockStyle}>
                {/* Ограничил максимальную длину текста */}
                <input style={InputStyle} maxLength={30} value={itemState} onChange={(e)=>{setItemState(e.target.value)}}></input>
                <button style={AddButton} onClick={addItemToList}>+</button>
            </div>
        </div>
    )
}

export default ToDoList;

// Компонент элемента списка

function ToDoItem({text, markerColor, setModalState, index}) {

    let ItemStyle = {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '95%',
        height: '10%',
        textAlign: 'center',
        alignItems: 'center',
        padding: '10px',
        marginTop: '15px'
        
    }

    let CircleStyle = {
        borderRadius: 20,
        width: 20,
        height: 20,
        backgroundColor: markerColor ? markerColor : 'RoyalBlue',
    }   // Цвет маркера пока захардкодил, потом поменяю


    let TextStyle = {
        paddingLeft: '10px',
        fontSize: '18px',
    }

    let MoreStyle = {
        marginLeft: 'auto',
        borderWidth: 0,
        fontSize: '10px',
        fontWeight: 'bold'
    }




    return (
        <div style={ItemStyle}>
            <div style={CircleStyle}></div>
            <div style={TextStyle}>{text}</div>
            <button style={MoreStyle} onClick={()=>{setModalState({active:true, index: index})}}>. . .</button>
        </div>
    )
}

export default ToDoItem;
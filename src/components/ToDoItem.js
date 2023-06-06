
// Компонент элемента списка

function ToDoItem({text, markerColor}) {

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
        backgroundColor: markerColor ? markerColor : 'forestgreen',
    }   // Цвет маркера пока захардкодил, потом поменяю

    

    let TextStyle = {
        paddingLeft: '10px',
        fontSize: '18px',
    }

    return (
        <div style={ItemStyle}>
            <div style={CircleStyle}></div>
            <div style={TextStyle}>{text}</div>
        </div>
    )
}

export default ToDoItem;
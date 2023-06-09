import { useRef, useState } from "react"

function Modal({modalState, setModalState, listState, setListState}) {
    const inputElement = useRef()
    const inputColorElement = useRef()

    let ModalInactiveStyle = {
        opacity:0,
    }

    let ModalActiveStyle = {
        zIndex: 1,
        height:  '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        transition: '0.5s',
    }

    let FormStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        height: 'max-content',
        backgroundColor: 'white',
        borderRadius: '10px'
    }

    let CloseStyle = {
        display: 'flex',
        marginLeft: 'auto',
        borderWidth: 0,
        fontSize: '10px',
        borderRadius: '10px',
    }

    let InputStyle = {
        marginLeft: '10px',
        borderRadius: '10px',
        fontSize: '10px',
        borderWidth: '1px',
        width: '180px'
    }

    let InputColorStyle = {
        marginLeft: '10px',
        width: '20px',
        height: '20px'
    }

    let TextStyle = {
        fontSize: '12px',
        paddingLeft: '10px',
        marginBottom: '0px'
    }

    let SaveBtnStyle = {
        borderRadius: '10px',
        borderWidth: '0px',
        width: '80px',
        backgroundColor: 'PaleGreen',

    }

    let DeleteBtnStyle = {
        borderRadius: '10px',
        borderWidth: '0px',
        width: '80px',
        backgroundColor: 'RosyBrown'
    }

    let BtnDivStyle = {
        display: 'flex',
        fontSize: '12px',
        justifyContent: 'space-around',
        marginTop: '10px',
        marginBottom: '10px'
    }

    function editItem() {
        if (inputElement.current.value)
            listState[modalState.index].text = inputElement.current.value
        listState[modalState.index].markerColor = inputColorElement.current.value
        setListState(listState)
        setModalState({active:false, index:null})
    }

    function deleteItem() {
        listState.splice(modalState.index, 1)
        setListState(listState)
        setModalState({active:false, index:null})
    }

    return (
        <div style={modalState.active ? ModalActiveStyle : ModalInactiveStyle }>
            {modalState.active ? 
                <div style={FormStyle}>
                    <button style={CloseStyle} onClick={() => {setModalState({active:false, index:null})}}>X</button>
                    <p style={TextStyle}>Текст задачи</p>
                    <input style={InputStyle} ref={inputElement}  placeholder={listState[modalState.index].text} maxLength={32} />
                    <p style={TextStyle}>Цвет метки</p>
                    <input style={InputColorStyle} type="color" ref={inputColorElement} />
                    <div style={BtnDivStyle}>
                        <button style={SaveBtnStyle} onClick={editItem}>Сохранить изменения</button>
                        <button style={DeleteBtnStyle} onClick={deleteItem}>Удалить задачу</button>
                    </div>
                </div>
            : null}
        </div>
    )
}

export default Modal
import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/user'

const UserRow = (props) => {

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" >
            {props.user.id + " " + props.user.firstName + ' ' + props.user.secondName}
            <div className="btn-group sticky-right" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={()=> props.setCurrentId(props.user.id)}>Редактировать</button>
                <button type="button" className="btn btn-secondary" onClick={()=>{
                    props.deleteUser(props.user.id)
                    }}>Удалить</button>
            </div>
        </li>
    )
}

const mapActionToProps = {
    setCurrentId: actions.setCurrentId,
    deleteUser: actions.Delete
}

export default connect(null, mapActionToProps)(UserRow)
import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import UserRow from './UserRow'
import * as actions from '../actions/user'

const UserList = (props) => {

    useEffect(()=> {
        props.fetchAllUsers()
    },[])

    console.log(props)
    
    return (
        <div className="card">
            <ul className="list-group list-group-flush">
                {props.userList.map(user => <UserRow user={user} key={user.id}/>)}
            </ul>
        </div>
        )
}

const mapStateToProps = state => ({
    userList: state.user.list
})

const mapActionToProps = {
    fetchAllUsers: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(UserList)
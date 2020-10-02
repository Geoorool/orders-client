import React, { useEffect } from 'react'
import useForm from './useForm'
import { connect } from 'react-redux'
import * as actions from '../actions/user'

const initialFieldValues = {
    firstName : '',
    secondName : '',
    lastName : '',
    dateOfBirth : '',
    phoneNumber : ''
}

const UserInfo = ( props ) => {
    
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()
        if(props.userId==-1){
            props.createUser(values, ()=>{window.alert('Запись добавлена')})
        }
        else{
            props.updateUser(props.userId, values, ()=>{window.alert('Запись изменена')})
            props.setCurrentId(-1)
        }
    }

    useEffect(()=>{
        console.log(props.userId)
        if(props.userId!=-1)
         setValues({
             ...props.userList.find(x => x.id==props.userId)
         })
    },[props.userId])

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                    name = "firstName"
                    className="form-control" 
                    type="text" 
                    placeholder="Фамилия" 
                    value={values.firstName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                    name = "secondName"
                    className="form-control" 
                    type="text" 
                    placeholder="Имя" 
                    value={values.secondName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                    name = "lastName"
                    className="form-control" 
                    type="text" 
                    placeholder="Отчество" 
                    value={values.lastName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                    name = "phoneNumber"
                    className="form-control" 
                    type="text" 
                    placeholder="Телефон" 
                    value={values.phoneNumber}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>Дата рождения</label>
                <input 
                    name = "dateOfBirth"
                    className="form-control" 
                    type="date" 
                    value={values.dateOfBirth}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

const mapStateToProps = state => ({
    userList: state.user.list,
    userId: state.user.userId
})

const mapActionToProps = {
    createUser: actions.create,
    updateUser: actions.update,
    setCurrentId: actions.setCurrentId
}

export default connect(mapStateToProps, mapActionToProps)(UserInfo)
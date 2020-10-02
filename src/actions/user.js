import api from './api'

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL',
    SET_ID : 'SET_ID'
}

export const fetchAll = () => dispatch => {
    api.user().fetchAll()
    .then(
        response => {
            console.log(response)
            dispatch({
                type : ACTION_TYPES.FETCH_ALL,
                payload : response.data
            })
        }
    ).catch(err => console.log(err))
}

export const create = (data) => dispatch => {
    api.user().create(data)
    .then(response => {
        console.log(data)
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload : response.data
        })
    }).catch(err => console.log(err))
}

export const update = (id, data) => dispatch => {
    api.user().update(id, data)
    .then(response => {
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload : [id, ...data]
        })
    }).catch(err => console.log(err))
}

export const Delete = (id) => dispatch => {
    api.user().delete(id)
    .then(response => {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload : id
        })
    }).catch(err => console.log(err))
}

export const setCurrentId = (id) => ({
    type : ACTION_TYPES.SET_ID,
    payload: id
})
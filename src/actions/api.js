import axios from 'axios'

const baseUrl = 'https://localhost:44336/api/'

export default {
    user(url = baseUrl + 'users/'){
        return {
            fetchAll : () => axios.get(url),
            fetchById : id => axios.get(url + id),
            create : newRecord => axios.post(url, newRecord),
            update : (id, updateRecord) => axios.put(url+id, updateRecord),
            delete : id => axios.delete(url+id)
        }
    }
}
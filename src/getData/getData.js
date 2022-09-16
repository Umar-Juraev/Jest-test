const axios = require('axios')
const mapArrToString = require('../mapArrToString/mapArrToString')

const URL ='https://jsonplaceholder.typicode.com/users'
const getData = async()=>{
    try {
        const response = await axios.get(URL)
        const userIds = response.data.map(item=>item.id)
        return mapArrToString(userIds)
        // return userIds
    } catch (error) {
        
    }
}

module.exports = getData
const axios = require('axios')

async function modelUser(data){
console.log(data, "model")
  const response = await axios.post('http://localhost:7000/user', data)
  console.log(response)
  return response.data
}
 
async function fetchUser(id){
  
  const response = await axios.get('http://localhost:7000/user/'+id)
  return response.data
}
  
async function updateuser(id,data) {

  const response=await axios.put('http://localhost:7000/user/'+id,data)
  return response.data
}
 
async function deleteuser(id,data) {

  const response=await axios.delete('http://localhost:7000/user/'+id,data)
  return response.data
}

module.exports = { fetchUser, modelUser, updateuser, deleteuser} 
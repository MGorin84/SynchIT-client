import api from '../config/api'


export async function updateUser(userInfo) {
  console.log("updateUser", userInfo)
  const response = await api.patch(`/users/${userInfo._id}`, userInfo);
  console.log("back from patch",response.data)
  return response.data
}

export async function deleteUser(userInfo) {
  const response = await api.delete(`/users/${userInfo._id}`, userInfo);
  return response.data
}

export async function getAllUsers(users) {
  const response = await api.get(`/users`, users)
  return response.data
}
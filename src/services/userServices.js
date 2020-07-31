import api from '../config/api'


export async function updateUser(userInfo) {
  console.log("updateUser", userInfo)
  const response = await api.patch(`/users/${userInfo._id}`, userInfo);
  console.log("back from patch",response.data)
  return response.data
}
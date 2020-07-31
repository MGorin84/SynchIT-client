import api from '../config/api'; 

export async function loginUser(userInfo){
    console.log(userInfo)
    const response = await api.post('/auth/login', userInfo);
    console.log("got user back from server: ", response);
    return response.data
}

export async function logoutUser(){
    return api.get('/auth/logout');
}

export async function registerUser(userInfo) {
    const response = await api.post('auth/register', userInfo);
    return response.data
}

export async function userAuthenticated() {
    const response = await api.get('auth/user');
    if(response.status === 200) {
        const userResponse = await api.get(`users/${response.data._id}`);
        return userResponse.data
    } 
    // console.log(response)
    return null
}
import axios from 'axios';

export const serverRequest = (token) => {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  }

  if(token){
    headers['x-access-token'] = token;
  }

  const axiosInst = axios.create({
    baseURL: '/api/v1',
    headers
  });

  axiosInst.interceptors.request.use(async function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  });

  return axiosInst;

}

import axios from 'axios';

export const serverRequest = (token=null) => {

  const axiosInst = axios.create({
    baseURL: '/api/v1',
    headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Authorization': `Bearer ${token}`,
    }
  });

  axiosInst.interceptors.request.use(async function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  });

  return axiosInst;

}

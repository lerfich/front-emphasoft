import axios from 'axios'

export const saveAuthToken =  async (a) => {

  // // const loginData = {
  // //   "username": "test_super",
  // //   "password": "Nf<U4f<rDbtDxAPn"
  // // }
  //
  // const result = await axios.post('http://emphasoft-test-assignment.herokuapp.com/api-token-auth/', loginData)
  // window.localStorage.setItem('token', result.data.token);
  // console.log(result.data.token, '<- token; also got getItem ->', window.localStorage.getItem('token'))
};

export const getAuthToken = () => {
  return window.localStorage.getItem('token');
};

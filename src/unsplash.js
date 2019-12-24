import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID afe0c1b4db044fcda044540c7987a52f418c37eef6f5ac57c1c1b7d37b161488'
  
      }
})
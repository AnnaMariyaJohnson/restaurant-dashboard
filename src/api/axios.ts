import axios from  'axios'

const api=axios.create({
    baseURL:'http://loacalhost:5215/api',
});
export default api;
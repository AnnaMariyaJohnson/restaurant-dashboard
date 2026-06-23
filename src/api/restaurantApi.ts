import api from './axios'

export const restaurantApi={
    getRestaurant:async(id:string)=>{
        const response=await api.get(`/Restaurant/${id}`);
        return response.data;
    }
}
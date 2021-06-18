import Axios from "axios";

const produccion = false;
const BaseUrl = produccion ? "https://resource-grupogit.herokuapp.com/" : "http://localhost:3000/";

export const ChargeData = ( url ) => {
    return async( ) => {
        await Axios.get(BaseUrl+url).then( resp => {
        }).catch(error => {
        });
    }
}

export const Post = async( url, data ) => {
    return await Axios.post(BaseUrl + url, data).then( resp => {
        return resp.data
    }).catch( (error) => {
        return error
    });
    
}

export const Updating = async( url, data) => {
    await Axios.put(BaseUrl+url, data).then( resp => {
            
    }).catch((error) => {
    });
    
}

// Metodos Delete
export const Deleting = ( url, id ) => {
    return async ()  => {
        await Axios.delete(BaseUrl+url).then( resp => {
            if (resp.data){

            } else {
            }
        }).catch((error) => {
        });
    }
}





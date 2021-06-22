import Axios from "axios";

import Swal from 'sweetalert2'

const produccion = true;
const BaseUrl = produccion ? "https://backend-pruebas.herokuapp.com/" : "http://localhost:3000/";

export const ChargeData = ( url ) => {
    return async( ) => {
        await Axios.get(BaseUrl+url).then( resp => {
        }).catch(error => {
        });
    }
}


export const Get = ( url ) => {
    return Axios.get(BaseUrl + url).then( resp => {
        return resp.data
    }).catch( (error) => {
        return error
    });
    
}

export const Post = async( url, data ) => {
    return await Axios.post(BaseUrl + url, data).then( resp => {
        return resp.data
    }).catch( (error) => {
        return error
    });
    
}

export const PostTicket = async( url, data ) => {
    return await Axios.post(BaseUrl + url, data).then( resp => {
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    }).catch( (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
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





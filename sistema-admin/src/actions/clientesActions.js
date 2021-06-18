import  Swal from 'sweetalert2';
import Axios from "axios";

const produccion = false;
const BaseUrl = produccion ? "https://resource-grupogit.herokuapp.com/" : "http://localhost:3000/";


export const GetClients = async (url) => {
    let response;
    await Axios.get(BaseUrl+url).then( resp => {
        response = resp.data;
    }).catch( e => {
        Swal.fire('Error', e.message, 'error');
    });
    return response;
}
export const PutClients = async (data, url) => {
    let response;
    await Axios.put(BaseUrl+url, data).then( resp => {
        Swal.fire('Actualización exitosa', resp, 'Ok');;
    }).catch( e => {
        console.log(e.response)
        Swal.fire('Error', e.message, 'error');
    });
}

export const DeleteClients = async (url) => {
    let response;
    await Axios.delete(BaseUrl+url).then( resp => {
        Swal.fire('Se ha eliminado al cliente', '', 'success')
    }).catch( e => {
        Swal.fire('Error', e.message, 'error');
    });

    return response

}


export const CreateClient = async (data, url) => {
    let response;
    await Axios.post(BaseUrl+url, data).then( resp => {
        Swal.fire('Se ha agregado exitosamente', '', 'success')
    }).catch( e => {
        console.log(e.response)
        Swal.fire('Error', e.message, 'error');
    });


    return response;
}
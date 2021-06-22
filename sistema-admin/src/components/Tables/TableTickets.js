import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import {useParams} from 'react-router-dom';
import { GetClients,DeleteClients } from '../../actions/clientesActions';
import ModalEditTicket from "components/Modal/ModalEditTicket";

import Modal from '@material-ui/core/Modal';
const  TableTickets = () => {
  const {IDequipo} = useParams()
  const [equipos, setEquipos] = React.useState([])
  const columns = [
    {
      title: "ID",
      field: "idTicket"
    },
    {
      title: "Nombre",
      field: "nombre"
    },
    {
      title: "Fecha",
      field: "fecha"
    },
    {
        title: "Status",
        field: "tipoTicket"
      },
      {
        title: "Cliente",
        field: "clientes.nombreClient"
      },
      {
        title: "Encargado",
        field: "usuarios.name"
      }
  ];
  const [open, setOpen] = React.useState(false);
  const [idT, setID] =React.useState();

  const handleOpen  = async (id) => {
    await GetClients(`tickets/${id}`).then(result => setID(result));;
    setOpen(true);
  };
 console.log(idT)
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const arr = [{}]
      const resp = await GetClients('tickets/');
    //   const resp2 = await GetClients('clients/'); 
    //   arr.push(resp)
    //   arr.push(resp2)
      setEquipos(resp);
      console.log(resp);        
    }
    fetchData();
  }, []); 
  function handleClick(id) {
      console.log(id, 'finalizaste los catalogos');
    // history.push(`/Accesorios/${rute}`);
  }


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalEditTicket idT={idT}/>
      </Modal>
    <MaterialTable
      title="Incidentes en curso"
      columns={columns}
      data={equipos}
      actions={[
        {
          icon:'edit',
          tooltip: 'Editar',
          onClick: (event, rowData) => {handleOpen(rowData.idTicket)}
        }, rowData => ({
          icon: 'add',
          tooltip: 'Nuevo requerimiento',
          onClick: (event, rowData) => {handleClick(rowData.idTicket)}
        })
      ]}
      options={{
        actionsColumnIndex: -1,
        exportButton: true
      }}
    />
    </div>
  );
}
export default TableTickets;
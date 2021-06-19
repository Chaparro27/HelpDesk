import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import {useParams} from 'react-router-dom';
import { GetClients,DeleteClients } from '../../actions/clientesActions';

const  TableTickets = () => {
  const {IDequipo} = useParams()
  const [equipos, setEquipos] = React.useState()
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
      }
  ];

  useEffect(() => {
    const fetchData = async () => {
      const resp = await GetClients('tickets/');
      setEquipos(resp);        
    }
    fetchData();
  }, []); 
  function handleClick(id) {
      console.log(id, 'finalizaste los catalogos');
    // history.push(`/Accesorios/${rute}`);
}

  return (
    <MaterialTable
      title="Incidentes en curso"
      columns={columns}
      data={equipos}
      actions={[
        {
            icon:'edit',
            tooltip: 'Editar',
            onClick: (event, rowData) => {handleClick(rowData.idTicket)}
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
  );
}
export default TableTickets;
import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import {useParams} from 'react-router-dom';
import { GetClients,DeleteClients } from '../../actions/clientesActions';
import ModalEmpleado from "components/Modal/ModalEmpleado";
import ModalRequerimiento from "components/Modal/ModalRequerimiento";
import ModalCustom from 'components/Modal/ModalCustom';

const  TableTickets = () => {
  const {IDequipo} = useParams()
  const [equipos, setEquipos] = React.useState([])
  const columns = [
    {
      title: "ID",
      field: "idCliente"
    },
    {
      title: "Nombre",
      field: "nombreClient"
    },
    {
      title: "Correo",
      field: "correo"
    },
    {
        title: "Fecha",
        field: "fecha"
      }
  ];
  const [open, setOpen] = React.useState(false);
  const [op, setOp] = React.useState(false);
  const [idT, setID] =React.useState();

  const handleOp  = async (id) => {
    setID(id)
    setOp(true);
  };
  const handleCl = () => {
    setOp(false);
  };

  const handleOpen  = async (id) => {
    await GetClients(`clients/${id}`).then(result => setID(result));;
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const arr = [{}]
      const resp = await GetClients('clients/');
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
      
      <ModalCustom
        handleModalClose={ handleClose }
        openModal={ open }
        component={ ModalEmpleado  }
        idT={idT}
        />
      
      <MaterialTable
        title="Empleados"
        columns={columns}
        data={equipos}
        actions={[
          {
            icon:'edit',
            tooltip: 'Editar',
            onClick: (event, rowData) => {handleOpen(rowData.idCliente)}
          }
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
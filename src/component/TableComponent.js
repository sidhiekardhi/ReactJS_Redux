import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { faEdit, faInfo, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import {Container,Button, Row, Col, Spinner } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { DeleteUser } from '../action/UserAction';
const { SearchBar } = Search;

//di gunakan untuk menghapus data, karena menghapus nya di table jadi aksi deletenya ada di class ini,
// menggunakan dispatch untuk mengambil aksi dispatch dengan method DeleteUser yg ada di UserAction.js
const handleClick= (dispatch, id) => {
    swal({
        title: "Apakah anda yakin ingin menghapus data ini?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            dispatch(DeleteUser(id))
          swal("Data User Di hapus!", {
            icon: "success",
          });
        } else {
          swal("Data Belum Di Hapus!");
        }
      });
}

//untuk sortirr
  const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
  }];

  //menampilkan nilai dari state.user.users
  const mapStateToProps = (state) => {
    return {
      users: state.users.users,
      error: state.users.error,
    }
  }

  //datafield untuk mengambil field yg ada di API, jadi di sesuaikan dengan namanya ya
const TableComponent = (props) => {
    const columns = [
        {
        dataField: 'id',
        text: 'ID',
        sort: true,
        headerStyle: () => {
            return {width: "5%"};
        },
        }, {
        dataField: 'nama',
        text: 'Nama',
        sort: true,
        }, {
        dataField: 'email',
        text: 'Email',
        sort: true,
        },
         {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
            return (
            <div>
                <Link to={"detail/"+ row.id}>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faInfo}/> Detail
                </Button>
                </Link>
                <Link to={"edit/"+row.id}>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faEdit}/> Edit
                </Button>
                </Link>
                    {/* handleclick butuh 2 parameter yg satu untuk mengambil dispatch di UserAction, dan id */}
                <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>
                    <FontAwesomeIcon icon={faTrash}/> Delete
                </Button>
               
            </div>
            );
            }
        }];
    return (
        <Container>
            {/* di kasih logika kalo nggak dapet data maka error, dan jika berhasil maka menampilkan datanya */}
           {props.users ?     <ToolkitProvider
             bootstrap4 keyField='id' data={ props.users } columns={ columns } defaultSorted={ defaultSorted } 
            search>
            {
                props => (
                <div>
                    <Row>
                        <Col>
                        <Link to={"create/"}>
                        <Button color="dark" className="mr-2">
                            <FontAwesomeIcon icon={faUserPlus}/> Create User
                        </Button>
                        </Link>
                        </Col>
                        <Col>
                        <div className="float-right">
                        <SearchBar { ...props.searchProps } placeholder="Search"/>
                        </div>
                        
                        </Col>
                    </Row>
                    <BootstrapTable 
                    { ...props.baseProps } pagination={ paginationFactory() }
                    />
                </div>
                )
            }
            </ToolkitProvider>: 
            (
                <div className="text-center">
                    {/* jika error menampilkan error jika suksess muncul spinner */}
                {props.error ? <h1>{props.error}</h1> : <Spinner color="success" />}
                    
                </div>
            )
            }
         
            
        </Container>

    )
}

export default connect(mapStateToProps, null) (TableComponent)

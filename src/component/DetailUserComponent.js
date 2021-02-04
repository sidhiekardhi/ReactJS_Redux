import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap';

//di class ini berisi komponent yang nantinya akan di panggil di detail container
//selain itu di gunakan juga untuk menampung state dari store redux yg sudah di set di user.js dan userAction
//mapsToProps berfungsi untuk menampung nilainya dan inisialisasi lagi menjadi variabel baru yaitu user detail, error detail

const mapStateToProps = (state) => {
    return {
    userDetail: state.users.userDetail,
    errorDetail: state.users.errorDetail,
    }
  }

const DetailUserComponent = (props) => {
    
    return (
        <Table>
          <tbody>
            <tr>
                <td width="200">Nama</td>
                <td width="10">:</td>
                <td>{props.userDetail[0].nama}</td>
                <td>{console.log(props.userDetail[0].nama)} </td>
            </tr>
            <tr>
                <td width="200">Email</td>
                <td width="10">:</td>
                <td>{props.userDetail[0].email} </td>
            </tr>
          </tbody>
        </Table>
      );
}

export default connect(mapStateToProps, null) (DetailUserComponent)

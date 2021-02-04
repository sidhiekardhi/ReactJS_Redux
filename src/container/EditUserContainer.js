import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../component/BackComponent'
import { connect } from 'react-redux'
import FormComponent from '../component/FormComponent'
import {  UpdateUser, UserActionDetail } from '../action/UserAction'
import swal from "sweetalert";

//mapsStateToProps di gunakan untuk menampung nilai menggantikan state.users.postUserCreate(user.js)
const mapStateToProps = (state) => {
    return {
        postUserCreate: state.users.postUserCreate,
        errorUserCreate: state.users.errorUserCreate,
    }
  }

class EditUserContainer extends Component {

    //memanggil dispatch methode UserActionDetail dengan id, ketika dapat nilainya langsung di tampilkan hampir sama kaya detail
    componentDidMount(){
        this.props.dispatch(UserActionDetail(this.props.match.params.id))
    }
//memanggil dispatch methode Update User, dengan parameter data yg di kirim dan id yg mau di update
    handleSubmit(data){
        this.props.dispatch(UpdateUser(data, this.props.match.params.id))
    }

    render() {
        //jika berhasil update atau gagal ada alert nya (belom bisa)
        if(this.props.postUserCreate || this.props.errorUserCreate) {
            if(this.props.errorUserCreate){
                swal("Failed!", this.props.errorUserCreate, 'Failed')
            } else {
                swal("User Update!", 'Berhasil', 'Sukses')
            }
        }
        return (
            <Container>
                <BackComponent/>
                <h1>Edit User</h1>
                {/* memanggil component yg ada di form component dan method submit nya memanggil method di atas*/}
                <FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, null) (EditUserContainer)

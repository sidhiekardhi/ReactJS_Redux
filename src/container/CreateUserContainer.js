import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../component/BackComponent'
import FormComponent from '../component/FormComponent'
import { connect } from 'react-redux'
import { PostUser } from '../action/UserAction'
import swal from "sweetalert";


//untuk mengetahui response menggunakan postUserCreate
const mapStateToProps = (state) => {
    return {
        postUserCreate: state.users.postUserCreate,
        errorUserCreate: state.users.errorUserCreate,
    }
  }

class CreateUserContainer extends Component {
    //ketika tambah data melakukan action, actionnya ada di userAction.js
    handleSubmit(data){
        this.props.dispatch(PostUser(data))
    }

    render() {
        //jika berhasil maka muncul alert sukses jika gagal muncul alert failed
        if(this.props.postUserCreate || this.props.errorUserCreate) {
            if(this.props.errorUserCreate){
                swal("Failed!", this.props.errorUserCreate, 'Failed')
            } else {
                swal("User Created!", "Nama "+this.props.postUserCreate.nama+ "Email : "+ this.props.postUserCreate.email, 'Sukses')
            }
        }
        return (
            <Container>
                <BackComponent/>
                <h1>
                    Create User
                </h1>
                {/* memanggil component yg ada di form component dan method submit nya memanggil method di atas*/}
                <FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, null) (CreateUserContainer)
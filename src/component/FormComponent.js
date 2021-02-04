import React, { Component } from 'react'
import {  reduxForm, Field, Form} from "redux-form";
import { connect } from 'react-redux'
import { Col, FormGroup, Label, Row, Button, Input } from 'reactstrap';
import UserValidation from '../validations/UserValidation';

//class ini berfungsi untuk membuat form yang akan di gunakan tambah data

const renderField=({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta : {
        touched , error, warning
    },
}) =>(
    <Row>
        <Col md="12">
            <Label htmlFor="{input}" className="col-form-label">
                {label}
            </Label>
        </Col>
        <Col md="12">
            <Input
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            > </Input>
            {touched &&
            ((error && <p style={{color: 'red'}}>{error}</p>) || (warning && <p style={{color: 'yellow'}}></p>))
            }
        </Col>
    </Row>
)

//berisi untuk ketika ke menu edit secara otomatis akan mengambil nilainya dan di tampilkan , selain itu
//lalu di buatkan variabel baru nama dan email
const mapStateToProps = (state) => {
    console.log(state.users.userDetail[0].nama);
    return {
        initialValues : {
            nama: state.users.userDetail[0].nama,
            email: state.users.userDetail[0].email
        }
    }
  }

class FormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Col md={6}>
                        <Field
                        type="text"
                        name="nama"
                        component={renderField}
                        label="Nama :"
                        />
                        <Field
                        type="text"
                        name="email"
                        component={renderField}
                        label="Email :"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Col md="12">
                        <FormGroup>
                            <Button
                            color="dark"
                            type="submit"
                            disabled={this.props.submitting}>
                                Submit
                            </Button>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </form>
        )
    }
}

//redux form bernama reduxForm , ada validate juga untuk memvalidasi
//enableReinitialize di gunakan untuk menampilkan di form edit data
FormComponent = reduxForm({
    form:"formCreateUser",
    validate:UserValidation,
    enableReinitialize: true,
})(FormComponent)

export default connect(mapStateToProps, null) (FormComponent)

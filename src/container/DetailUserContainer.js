import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../component/BackComponent'
import { connect } from 'react-redux'
import { DeleteUserActionDetail, UserActionDetail } from '../action/UserAction'
import DetailUserComponent from '../component/DetailUserComponent'

//memanggil detail User
class DetailUserContainer extends Component {
    //dispatch memanggil method UserActionDetail dari UserAction dan butuh parameter yg nilainya id
    componentDidMount(){
        this.props.dispatch(UserActionDetail(this.props.match.params.id))
        // this.props.dispatch(DeleteUserActionDetail)
    }
    render() {
        return (
            <Container>

                <BackComponent/>
                {/* mengambil nilai dari row.id di table component */}
                <h1>Detail User id nya {this.props.match.params.id}</h1>
                <DetailUserComponent></DetailUserComponent>
            </Container>
        )
    }
}

export default connect() (DetailUserContainer)

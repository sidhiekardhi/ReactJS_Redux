import React, { Component } from 'react'
import TableComponent from '../component/TableComponent'
import { connect } from 'react-redux'
import { DeleteDataUser, UserAction } from '../action/UserAction'

class HomeContainer extends Component {

    //memanggil method dispatch dengan method UserAction dan deleteUser yg sudah terhubung dengan redux di UserAction.js
    componentDidMount(){
        this.props.dispatch(UserAction())
        this.props.dispatch(DeleteDataUser())
    }
    render() {
        return (
            <div>
                <TableComponent/>
            </div>
        )
    }
}

export default connect() (HomeContainer)

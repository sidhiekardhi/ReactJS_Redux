import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button} from 'reactstrap'

//component untuk pindah halaman ke belakang
const BackComponent = () => {
    return (
        <Row>
            <Col>
            <Link to={"/"}>
                <Button color="dark">
                <FontAwesomeIcon icon={faArrowLeft}/> Back
                </Button>
            </Link>
            </Col>
        </Row>
    )
}

export default BackComponent

import { Button, Col, Image, Row } from "react-bootstrap"

const Demo6 = () => {
    return (

        <Row>
            <Col md={6} className={"m-t-20 m-b-20"}>
            <span>Are you Satisfied with what we Offer?</span>
            </Col>
            <Col md={6} className={"align-self-center text-right"}>
                <Button href="https://wrappixel.com/templates/monsteradmin/" target="_blank" className={"btn btn-outline btn-rounded btn-default buy-btn m-t-10 m-b-10"}>BUY MONSTER ADMIN</Button>
            </Col>
        </Row>

    )
}

export default Demo6
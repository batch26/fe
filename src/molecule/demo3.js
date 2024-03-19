import { Col, Image, Row } from "react-bootstrap"

const Demo3 = (prop) => {
    return (

        <Row>
            <Col md={6}>
                <small className="text-info">FOR MAIN DASHBOARD VERSION</small>
                <h2 className="text-white">Light Version of Monster Admin with
                    <br /> Light & Dark Sidebar Option
                </h2>
                <Image src={prop.image} alt="image" className="img-responsive m-t-30" />
            </Col>

            <Col md={6} className={"text-right"}>
                <small className="text-info">FOR MAIN DASHBOARD VERSION</small>
                <h2 className="text-white">Light Version of Monster Admin with
                    <br /> Light & Dark Sidebar Option
                </h2>
                <Image src={prop.image} alt="image" className="img-responsive m-t-30" />
            </Col>
        </Row>


    )
}

export default Demo3
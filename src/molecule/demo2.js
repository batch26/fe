import { Col, Image, Row } from "react-bootstrap"

const Demo2 = (prop) => {
    return (

        <Col lg={3} md={6} >
            <Image src={prop.image} alt="Monster admin template" />
            <h4 className="font-500">{prop.title}</h4>
            <p>{prop.paragrap}</p>
        </Col>


    )
}

export default Demo2
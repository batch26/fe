import { Col, Image } from "react-bootstrap"

const Demo4 = (prop) => {
    return (

        <Col lg={4} md={4} >
            <Image src={prop.image} alt="Monster admin template" />
            <h4 className="font-500">{prop.title}</h4>
            <p>{prop.paragrap}
            <br />{prop.baris}
            </p>
        
        </Col>


    )
}

export default Demo4
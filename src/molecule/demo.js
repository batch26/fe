import { Col, Image } from "react-bootstrap"

const Demo = (prop) => {
    console.log(prop.image)
    return (
        <Col md= {4} className={"mt-40"}>
            <div className="image-box"> 
                <Image src={prop.image} alt="demo1" className="img-responsive" />
                <div className="image-overly">
                    <a className="btn btn-rounded btn-info" href="../main/index2.html" target="_blank">Live Preview</a>
                </div>
            </div>
            <h5 className="p-20">{prop.label}</h5>
        </Col>
    )
}

export default Demo
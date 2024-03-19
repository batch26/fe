import { Card, Col, Container, Form, FormControl, Row, Button, FormGroup } from "react-bootstrap"
import Navigation from "../../organism/navbar"
import logo from "../../static/images/monster-admin-logo.png"
import { useState } from "react"
import axios from 'axios';
import Footer from "../../organism/footer"
import useMessage from "../../hooks/useMessage";
const Login = () => {
    const [changePassword, setChangePassword] = useState({
        email: "",
        password: ""
    })
    const message = useMessage();
    const handlechange = (e) => {
        const { name, value } = e.target
        console.log(value)
        setChangePassword({ ...changePassword, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault();

        // const token = JSON.parse(localStorage.getItem('user'));
        // const token =  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiU3RhZmYiLCJzdWIiOiJmcml6a3k4NjFAZ21haWwuY29tIiwiaWF0IjoxNzEwODI3NjE2LCJleHAiOjE3MTA4NDU2MTZ9.V4H4FkCXmI0toabMhJhQeg7M3QtWW7YFYEMnbp6d3pg"
        console.log(changePassword)
        axios.post("https://worm-famous-mongoose.ngrok-free.app/api/account/authenticating",changePassword)
        .then((response)=>{
        
            let token  = response.data.token
            localStorage.setItem("user", token)
            message.success(response)
        }).catch((error)=>{
            message.error(error)
            console.log(error)
        })
    }


    return (
        <div className="fix-header">
            <div id="main-wrapper">
                <header className="topheader">
                    <div className="fix-width">
                        <Navigation logo={logo} />
                    </div>
                </header>
                <div className="page-wrapper" >
                    <Container fluid >
                        <div className="fix-width" >
                            <Row className={"justify-content-center banner-text"} >
                                <Col md={5} className={"m-b-10"}>
                                    <Card>
                                        <Card.Header className="card-headers border-0 font-weight-bold mt-2 ">Form Change Password</Card.Header>
                                        <Card.Body>
                                            <Form.Group className={"mb-4"}>
                                                <FormControl
                                                    placeholder={"Type Your email"}
                                                    name="email"
                                                    value={changePassword.email}
                                                    type="text"
                                                    onChange={handlechange} />
                                            </Form.Group>
                                            <Form.Group className={"mb-4"}>
                                                <FormControl
                                                    placeholder={"Type Your New Password"}
                                                    name="password"
                                                    value={changePassword.password}
                                                    type="password"
                                                    onChange={handlechange} />
                                            </Form.Group>
                                            <Button variant="primary" size="lg" onClick={submit}>Submit</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Login    
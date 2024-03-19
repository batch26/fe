import { Card, Col, Form, FormControl, Button } from "react-bootstrap"
const FormChangePassword = () => {
    return (
        <Col md={5} className={"m-b-10"}>
            <Card>
                <Card.Header className="card-headers border-0 font-weight-bold mt-2 ">Form Change Password</Card.Header>
                <Card.Body>
                    <Form.Group className={"mb-4"}>
                        <FormControl
                            placeholder={"Type Your Email"}
                            name="email"
                            type="text" />
                    </Form.Group>
                    <Form.Group className={"mb-4"}>
                        <FormControl
                            placeholder={"Type Your Old Password"}
                            name="oldPassword"
                            type="password" />
                    </Form.Group>
                    <Form.Group className={"mb-4"}>
                        <FormControl
                            placeholder={"Type Your New Password"}
                            name="newPassword"
                            type="password" />
                    </Form.Group>
                    <Button variant="primary" size="lg">Submit</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default FormChangePassword
import { Button,Container,Row,Col } from "react-bootstrap"
import React from "react"
const About =()=>{
 return(
    <div>
        <Container className="text-center aboutme">
            <Row>
                <Col><h3>Tentang Kami</h3></Col>
            </Row>
            <Row>
                <Col><p>kami perusahaan mixmol akan bersungguh sungguh melayani anda <br></br>dengan sepenuh hati dan memberi pelayanan yan maksimal</p></Col>
            </Row>
            <Button variant="warning">Selengkapnya</Button>
        </Container>
    </div>
 )
}
export default About
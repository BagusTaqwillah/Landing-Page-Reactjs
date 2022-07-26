import React from "react"
import cimolcImg from'../assets/img/cimolc.jpg';
import cimolaImg from'../assets/img/cimola.jpg';
import cimollImg from'../assets/img/cimoll.jpg';
import { Button ,Container,Row,Col,Card} from 'react-bootstrap';
const  Konten =()=>{
return(
    <div>
        <Container>
            <Row>
                <Col className="text-center mt-3"><h3>Produk</h3></Col>
            </Row>
            <Row>
                <Col md="4">
                <Card>
                <Card.Img variant="top" src={cimolcImg} />
                <Card.Body>
                    <Card.Title>Cimol Coklat</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title
                    </Card.Text>
                    <Container>
                        <Row>
                            <Col ><Button variant="warning" className="tombol">Beli</Button></Col>
                            <Col><Button variant="warning" className="tombol">Detail</Button></Col>
                        </Row>
                    </Container>
                </Card.Body>
                </Card>
                </Col>
                <Col md="4">
                <Card>
                <Card.Img variant="top" src={cimolaImg} />
                <Card.Body>
                    <Card.Title>Cimol Abon</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title 
                    </Card.Text>
                    <Container>
                        <Row>
                            <Col><Button variant="warning" className="tombol">Beli</Button></Col>
                            <Col><Button variant="warning"  className="tombol">Detail</Button></Col>
                        </Row>
                    </Container>
                </Card.Body>
                </Card>
                </Col>
                <Col md="4">
                <Card>
                <Card.Img variant="top" src={cimollImg} />
                <Card.Body>
                    <Card.Title>Cimol Mozzarela</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title 
                    </Card.Text>
                    <Container>
                        <Row>
                            <Col><Button variant="warning"  className="tombol">Beli</Button></Col>
                            <Col><Button variant="warning"  className="tombol">Detail</Button></Col>
                        </Row>
                    </Container>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
)
}
export default Konten
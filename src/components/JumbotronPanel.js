import React from "react";
import cimolImg from"../assets/img/thumbnail.jpg";
import{Container,Row,Col,} from 'react-bootstrap';
const JumbotronPanel=()=>{
return(
    <div className="slogan p-5">
        <Container>
            <Row>
                <Col>
                    <h3 className="text-warning">MixMol( cimol variant rasa)</h3>
                    <p>MixMol Adalah Nama Brand Produk Cimol yang memiliki ciri khas produk cimol yang varian rasa dan pengemasanya menggunakan frozen food</p>
                </Col>
                <Col>
                <img className="thumbnail" src={cimolImg} alt="Logo"/>
                </Col>
            </Row>
        </Container>
    </div>
)
}
export default JumbotronPanel
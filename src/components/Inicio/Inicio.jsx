import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import browni from './img/browni.jpg';
import ibrain from './img/ibrain.jpg';
import gerardo from './img/gerardo.jpg';
import flor from './img/flor.jpg';
import alva from './img/alva.jpg';
import colors from './img/colors.jpg';
import { useState } from 'react';
import "../../../public/css/Inicio.css";


function PagInicio() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectIndex) => {
        setIndex(selectIndex);
    }
    return (
        <div className="container-todo">
            <div className="carousel justify-content around">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img src={browni} text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={browni} text="First slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={browni} text="First slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="cards">
                <Card style={{ width: '20rem' }}>
                    <Card.Img src={ibrain} alt='Imagen'></Card.Img>
                    <Card.Body>
                        <Card.Title>Adan Ibrain Mejia De Jesus</Card.Title>
                        <br />
                        <Card.Subtitle>Administración</Card.Subtitle>
                        <br />
                        <Card.Text className="text-justify">
                            Aplica y desarrolla todos los conocimientos acerda de la planeaciòn,
                            organización, dirección y control empresarial, organiza procesos
                            internos de la empresa, realiza procesos de control.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img src={gerardo} alt='Imagen'></Card.Img>
                    <Card.Body>
                        <Card.Title>Gerardo Reyes Alva</Card.Title>
                        <br />
                        <Card.Subtitle>Porducción</Card.Subtitle>
                        <br />
                        <Card.Text className="text-justify">
                            Dirige, planifica y coordina la producción del producto Brown Bost.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img src={flor} alt='Imagen'></Card.Img>
                    <Card.Body>
                        <Card.Title>Sharon Mariel Gomez Hernández</Card.Title>
                        <br />
                        <Card.Subtitle>Director de la empresa</Card.Subtitle>
                        <br />
                        <Card.Text className="text-justify">
                            Desarrolla y ejecuta las estrategias de la empresa para cumplir con
                            los objetivos de la empresa en materia de documentación, conocer a
                            los clientes, supervisa y organiza el proceso y a sus trabajadores.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img src={alva} alt='Imagen'></Card.Img>
                    <Card.Body>
                        <Card.Title>Jose Antonio Alva Montes</Card.Title>
                        <br />
                        <Card.Subtitle>Control de calidad</Card.Subtitle>
                        <br />
                        <Card.Text className="text-justify">
                            Hace cumplir las expectativas de los clientes y mejora el desempeño
                            general de la compañia. Su funciòn principal es coordinar y
                            supervisar los equipos de computrabajo para cumplir los lineamientos
                            establecidos.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <br />

            <div className="transparent-box">
                <div className="box-content">
                    <h3 className="box-title">TODO EL PODER EN UNA MORDIDA</h3>
                    <div className="fondo">
                        <Image src={colors} alt="Imagen" fluid />
                    </div>
                </div>
            </div>
            <div className="container-form">
                <div className="text-section">
                    <h3>Texto a la Izquierda</h3>
                    <p>Aquí puedes agregar tu texto descriptivo o cualquier otro contenido que desees mostrar en la parte izquierda.</p>
                </div>
                <div className="form-section">
                    <div className="form">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Write your message here..." />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>

            <br />
            <div>
                <Link to="/crear_publicacion" className="btn btn-success">Sistema</Link>
            </div>
        </div>
    );
}

export default PagInicio;
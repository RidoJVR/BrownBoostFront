import { Card } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import usuario from './img/usuario.jpg';
import browni from './img/browni.jpg';


function PagInicio() {
    return (
        <div className="container-todo">
            
            <div className="cards d-flex justify-content-around">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={usuario} alt='Imagen'></Card.Img>
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

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={usuario} alt='Imagen'></Card.Img>
                    <Card.Body>
                        <Card.Title>Gerardo Reayes Alva</Card.Title>
                        <br />
                        <Card.Subtitle>Porducción</Card.Subtitle>
                        <br />
                        <Card.Text className="text-justify">
                            Dirige, planifica y coordina la producción del producto Brown Bost.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={usuario} alt='Imagen'></Card.Img>
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

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={usuario} alt='Imagen'></Card.Img>
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
            <div>
                <h3>Organigrama</h3>
                <div>

                </div>
            </div>

            <div className="carousel justify-content around">
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        <img src="./img/browni.jpg" alt="Imagen" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="./img/browni.jpg" alt="Imagen" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="./img/browni.jpg" alt="Imagen" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


            <br />
            <div>
                <Link to="/crear_publicacion" className="btn btn-success">Sistema</Link>
            </div>
        </div>
    );
}

export default PagInicio;
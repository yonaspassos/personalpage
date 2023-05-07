import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ProfilePic from '../../images/profile-pic.png'

const About = props => {
    return (
        <section>
            <Container fluid>
                <h3>Sobre</h3>
                <Row>
                    <Col>
                        <Image fluid src={ProfilePic}/>
                    </Col>
                    <Col className="text-start justify-content-center align-items-center d-flex">
                        <p>Profissional de Front-end 4 anos de experiência em JavaScript, HTML e CSS e com 1 ano de experiência em React e React Native. Foco em aprendizado constante e atualização de ferramentas. Possui habilidades em Python, HTML5 semântico, CSS3, Styled-Components, Design Responsivo, plataformas LMS, Node, Gulp, Git e metodologias ágeis, boas práticas, JavaScript(ES6), React.js, React-Native e mobile first. Busca constante de melhoria como profissional mantendo-se atualizada. Sou uma pessoa muito proativa e gosto muito de compartilhar conhecimentos e ser desafiada.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;
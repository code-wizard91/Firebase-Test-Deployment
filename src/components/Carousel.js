import React from 'react';

import Card from '../components/Card';
import evverest from '../assets/images/evverest.png';
import socket from '../assets/images/socket.png';
import mentalh from '../assets/images/mentalh.png';
import geneva from '../assets/images/geneva.png';
import adware from '../assets/images/adware.png';
import shapeit from '../assets/images/shapeit.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Shape It',
                    subTitle: 'Ecommerce website deployed on the Azure Cloud',
                    imgSrc: shapeit,
                    link: 'https://www.shape-it.eu/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Mental Health Uk',
                    subTitle: 'React based highly scalable Web application',
                    imgSrc: mentalh,
                    link: 'https://mentalhealth-uk.org/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A double Glazing Company website',
                    imgSrc: evverest,
                    link: 'https://www.everest.co.uk/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Geneva Motors',
                    subTitle: 'A international car show website',
                    imgSrc: geneva,
                    link: 'https://www.gims.swiss/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Socket.IO',
                    subTitle: 'A online real time cloud hosted chat application',
                    imgSrc: socket,
                    link: 'https://socket.io/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Adware',
                    subTitle: 'A online tech security company',
                    imgSrc: adware,
                    link: 'https://www.adaware.com/',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
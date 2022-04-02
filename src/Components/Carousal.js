import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './Carousal.css'
import FrontButtons from './FrontButtons'

// const url = process.env.REACT_URL;

function Carousal() {
    const [states, setStates] = useState([]);

    useEffect(async () => {
        const token = localStorage.getItem('token');
        if (token != null) {
            console.log("i am here.")
            const response = await fetch("http://localhost:8080/states/all", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.status === 200) {
                const json = await response.json();
                setStates(json);
                console.log(json);
            }
            else {
                //error
            }
        }
    }, [])

    return (
        <div>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.fabhotels.com/blog/wp-content/uploads/2019/08/Temple-in-India_600.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://deih43ym53wif.cloudfront.net/taj-mahal-agra-india-shutterstock_88978975_77c3ca4697.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static-blog.treebo.com/blog/wp-content/uploads/2018/06/Khajuraho.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.tripsavvy.com/thmb/cj54aeRGnPYTZQbXWD6MZee0Y9U=/2122x1194/smart/filters:no_upscale()/GettyImages-531732818-592d24ec3df78cbe7e956e68.jpg"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg"
                        alt="Five slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/b/shore-temple-built-pallavas-unesco-s-world-heritage-site-located-mamallapuram-mahabalipuram-tamil-nadu-south-india-216870064.jpg"
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="front">
                <FrontButtons data={states} />
            </div>
        </div>
    )
}

export default Carousal
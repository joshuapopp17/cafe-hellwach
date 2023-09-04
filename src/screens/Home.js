import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../styles/home.css'
import banner from '../assets/edited/banner.png'
import eye from '../assets/EyeLogoHollow.png'
import making from '../assets/edited/making.png'
import beans from '../assets/edited/beans.png'
import seats from '../assets/edited/seats.png'
import drink from '../assets/edited/drink.png'
import { Link, useNavigate } from 'react-router-dom'
import { AnimationOnScroll  } from 'react-animation-on-scroll'

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className='home-screen'>
        <Image src={banner} style={{width: '100%', marginTop: 20}}/>
            <section>
                <h1 className='hero-caption'>A PLAYFUL CAFE IN THE HEART OF BERLIN</h1>
                <h2 className='hero-info'>145 Krümmer Str., Berlin</h2>
                <h2 className='hero-info'>Mon - Sat</h2>
                <h2 className='hero-info'>7am - 8pm</h2>
            </section>
        <section>
            <Container>
                <Row className='g-0'>
                    <Col sm={6}><Image src={making} className='image-row'/></Col>
                    <Col sm={6}>
                        <div className='photo-caption'>
                            <h3 className='photo-caption-text'>We have mastered the craft for over 15 years.</h3>
                            <a onClick={() => navigate(`/menu`)}><h2 className='button'>View our menu</h2></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="order-last order-sm-first" sm={6}>
                        <div className='photo-caption'>
                            <h3 className='photo-caption-text'>Quality in house roasts guarantee a fresh and exciting flavor.</h3>
                            <a onClick={() => navigate(`/store`)}><h2 className='button'>View in store</h2></a>
                        </div>
                    </Col>
                    <Col sm={6}><Image src={beans} className='image-row'/></Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container  className='story-container' style={{backgroundColor: '#594A42'}}>
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                    <h1 className='story-container-text sc-header'>Story</h1>
                    <h4 className='story-container-text sc-text'>We started making coffee in 2008, and have never stopped since.
                        Coming from a creative background as artists we decided to take an
                        artsy and playful approach. The goal was to create a space where
                        creatives can come together and work in the same space and share their crafts.
                        Over the 15 years we can confidently say that we have achieved that goal.
                        Stay creative and stay hellwach. - Cafe Hellwach Founders
                    </h4>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                    <h1 style={{marginTop: 50}} className='story-container-text sc-header'>Our Guarantee</h1>
                    <h4 className='story-container-text sc-text'>
                        One thing we strive for is 100% ethically sourced ingredients. For this reason,
                        all our products come from small businesses that prioritize human rights and the environment.
                        Lastly, 10% of our profits go to organizations that fight for just working conditions in developing nations.
                        Thank you for your support.
                    </h4>
                </AnimationOnScroll>
            </Container>
        </section>
        <Image src={seats}  className='image-people'/>
        <section>
            <div className='eyes-container'>
                <Image src={eye} className='eyes-image'/>
                <Image src={eye} className='eyes-image'/>
            </div>
            <h2 className='eyes-text'>Stay creative, stay hellwach.</h2>
        </section>
    </div>
  )
}

export default Home
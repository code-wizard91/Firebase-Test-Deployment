import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Our Team here at Deployment Solutions love building modern robust solutions using the most upto date software and technologies, We take pride in creating highly scalable, resilient and cost effective solutions for our clients. </p>

            <p>We have a very high level of quality control and follow the Agile/Scrum based project management structure to ensure great efficiency and time management. We promise our solutions will be tailored to solve your problems effectively.</p>

            <p>Constantly updating our skillset to meet the needs of the market, we have experience working with both Web Technologies and Cloud technologies to provide solutions that are fast, efficient and secure</p>

    

            </Content>
        </div>
    );

}

export default AboutPage;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce Website"
              description="This is an e-commerce website built with JavaScript, HTML, CSS, Node.js, Express, and MongoDB. The website allows users to view products, add products to their cart, and manage their accounts."
              ghLink="https://github.com/maruf1921/online_shop"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Housing Data Exploration & Prediction with ML"
              description="A machine learning model designed to predict house prices based on various features like location, size, and market trends. The project leverages regression techniques and data analysis to provide accurate property value estimates."
              ghLink="https://github.com/maruf1921/house_price_ML"
              demoLink="https://housepricestramlit.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fast Food Nutritional Analysis"
              description="A thorough analysis of fast food items and their nutritional profiles across US restaurants, including data cleaning, comparison, and ranking based on nutritional values. The project also identifies healthier options and visualizes nutritional distributions and trends."
              ghLink="https://github.com/maruf1921/Fast-Food-Nutritional-Analysis"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="YouTube-Video-Downloader"
              description="YouTube, the second most popular global website, is widely recognized as the top video hosting platform. However, there are limitations to directly downloading videos from YouTube.

This is a simple YouTube video downloader that allows you to download videos from YouTube in a variety of formats."
              ghLink="https://github.com/maruf1921/YouTube-Video-Downloader"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Morse-Code"
              description="Morse code is a method used in telecommunication to encode text characters as standardized sequences of two different signal durations, called dots and dashes, or dits and dahs."
              ghLink="https://github.com/maruf1921/Morse-Code"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Internet Speed Test"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/maruf1921/Internet-Speed-Test"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

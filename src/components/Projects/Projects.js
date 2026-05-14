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
              imgPath={editor}
              isBlog={false}
              title="EcoSync"
              description="A containerized full-stack resource management system designed to streamline resource synchronization and data management. Built with Node.js and SQL, the entire environment is orchestrated using Docker for seamless deployment and scalability."
              ghLink="https://github.com/maruf1921/CS24-P2-DIIT_RUNTIME_TERROR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ocular Disease Detection"
              description="A high-complexity AI project focusing on medical image classification. Using Deep Learning and advanced neural networks, this system detects and classifies various ocular diseases, demonstrating the power of AI in healthcare diagnostics."
              ghLink="https://github.com/maruf1921/OCULAR-DISEASES-DETECTION-AND-CLASSIFICATION-USING-DEEP-LEARNING-"
              demoLink="https://ocular-diseases-detection-and-cq1s.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Full-Stack E-Commerce Ecosystem"
              description="A comprehensive MERN stack platform featuring secure JWT authentication, dynamic product management with Multer image uploads, and a responsive frontend with a persistent shopping cart and admin dashboard."
              ghLink="https://github.com/maruf1921/ONLINE_SHOP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Multilingual RAG System"
              description="An advanced AI system implementing Retrieval-Augmented Generation (RAG). It enables efficient querying and information retrieval across multiple languages using modern vector databases and large language models (LLMs)."
              ghLink="https://github.com/maruf1921/MULTILINGUAL-RAG-SYSTEM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="English AI Conversation Buddy"
              description="An AI-driven interactive tool built with TypeScript to help users practice English conversation. It bridges the gap between AI language models and intuitive web interfaces for a seamless learning experience."
              ghLink="https://github.com/maruf1921/ENGLISH-AI-CONVERSATION-BUDDY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Turf Booking Website"
              description="A functional web application built with JavaScript for managing turf bookings. It handles complex booking logic, scheduling, and user coordination, demonstrating robust full-stack web development capabilities."
              ghLink="https://github.com/maruf1921/TURF_BOOKING_WEBSITE"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import ContentContainer from "../components/ContentContainer";

function About() {
  return (
    <ContentContainer heading="About Us">
      <p className="mb-4">
        Welcome to our platform dedicated to ecological volunteer programs. Our
        mission is to connect individuals with opportunities to make a positive
        impact on the environment through volunteering.
      </p>
      <p className="mb-4">
        We believe that everyone has a role to play in preserving the planet for
        future generations. Our platform provides access to a wide range of
        volunteer opportunities focused on environmental conservation,
        sustainability, and community engagement.
      </p>
      <p className="mb-4">
        Whether you are passionate about protecting wildlife, reducing waste, or
        educating others about sustainable practices, you will find a program
        that aligns with your values and interests. Our partners include local
        and global organizations committed to making a difference.
      </p>
      <p className="mb-4">
        Join us in our mission to create a greener, healthier world. Together,
        we can make a lasting impact.
      </p>
      <p className="mb-4">
        Thank you for visiting our platform. We look forward to helping you find
        the perfect opportunity to contribute to environmental conservation.
      </p>
    </ContentContainer>
  );
}

export default About;

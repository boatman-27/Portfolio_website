import React from "react";
import ExperienceBackbone from "./ExeprienceBackbone";

const Experience = () => {
  return (
    <div className="project-heading">
      <h1>
        Work <strong className="key_words">Experience</strong>
      </h1>
      <div className="experience-section">
        <ExperienceBackbone
          JobTitle="Research Assistant"
          Duration="June 2023 - December 2023"
          Company="German Universty of Technology in Oman (GUtech)"
          desc={[
            "IoT Integration: Develop and implement software solutions to seamlessly connect and manage IoT devices, enabling remote monitoring and data collection. This includes configuring sensor data transmission protocols, ensuring data accuracy, and troubleshooting connectivity issues.",
            "Machine Learning Development: Lead the development of a deep learning model leveraging a diverse dataset to predict and identify seafood species from images. Utilize state‐of‐the‐art machine learning techniques and tools to train and fine‐tune the model for accuracy and reliability.",
            "Data Preprocessing: Prepare and preprocess the image dataset, including data cleaning, augmentation, and feature extraction, to optimize the deep learning model's performance.",
            "Web Application Development: Utilize Python and Django frameworks to create a user-friendly website that integrates the developed software solutions for IoT device management and machine learning-based seafood species identification.",
          ]}
        />
        <ExperienceBackbone
          JobTitle="Teaching Assistant"
          Duration="June 2023 - December 2023"
          Company="German Universty of Technology in Oman (GUtech)"
          desc={[
            "Tutorial Sessions: Conducting tutorial sessions to supplement classroom instruction and provide additional assistance to students in understanding complex mathematical concepts. These sessions involve explaining fundamental principles, solving practice problems, and offering guidance on challenging topics.",
            "Collaborative Engagement: Engaging in collaborative discussions with the course instructor and fellow TAs to enhance teaching methodologies, develop instructional materials, and address any concerns related to student progress or course management.",
            "Academic Support: Offering individualized academic support to students through office hours, email correspondence, or online platforms. This involves addressing inquiries, clarifying concepts, and providing additional resources to enhance learning outcomes.",
            "Midterm and Final Exams: Collaborating with the course instructor in designing, proctoring, and grading midterm and final examinations. This includes preparing exam materials, ensuring academic integrity during testing, and accurately assessing student performance through grading assignemnts, midterm and final exams, and final projects.",
          ]}
        />
      </div>
    </div>
  );
};

export default Experience;

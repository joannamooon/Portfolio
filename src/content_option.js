const logotext = "Joanna Moon";
const meta = {
    title: "Joanaa Moon",
    description: "I'm Joanna, a student at the University of Waterloo studying Computer Science and Statistics",
};

const introdata = {
    title: "Joanna Moon",
    animated: {
        first: "Human AI Interaction",
        second: "Applied Machine Learning",
    },
    description:"Hello! I'm in my 2A, studying Statistics and Computer Science at the University of Waterloo. Currently, I am working at Cresta AI as a Junior Conversational AI Design Intern.",
    your_img_url: "",
};

const dataabout = {
    title: "Research Interests",
    aboutme: "My research is primarily focused on the development of AI tools for communities, specifically exploring the implementation of LLM agents with model-level interactions or user-centered evaluations. I aim to create tools that embrace social consciousness, beyond considerations of model precision and performance.",
};
const worktimeline = [{
        jobtitle: "University of Waterloo",
        where: "Statistics, Computer Science (BS)",
        date: "Sep 2023 - April 2028",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "WATonomous - AI Engineer",
        period:"Sep 2023 - April 2024",
        description: "Developed and optimized Python-based algorithms with CNN's for real-time object detection and path planning.",
    },
    {
        title: "UWaterloo MathSoc - Full Stack Developer",
        period:"April 2024 - Present",
        description: "Contributed to the development of a new website for MathSoc, rebuilding the frontend while also building a new custom content management system (CMS), to allow for greater site quality, developer and admin maintainability, and site customizability going forward. Stack: pug, Express, JSON, and SCSS.",
    },
    {
        title: "VEX Robotics - Team 82855T",
        period:"Sep 2022 - June 2023",
        description: "Software Team - Implemented an optometry system in C++ to increase precision by enhancing the capabilities of the sensors. Tournament Champions at VEX Robotics Ontario Provincial Championships 2023 <3",
    },
];

const awards = [{
    title: "Gwanjeong Educational Foundation Scholarship - Masters Degree",
    period:"Sep 2023 - June 2025",
},
{
    title: "ACM/IEEE Human Robot Interaction (HRI 2023) - Best Student Paper Award",
    period:"March 2022",
},
{
    title: "Robert S Ann Morley Research Grant - Cornell University",
    period:" December 2021 ",
},
];

const workexperience = [{
    title: "Junior Conversational AI Design Intern",
    period: "Sep 2024 - Dec 2024",
    description: "As part of Cresta's Conversation AI Design team, I designed and developed AI conversation models to provide real-time coaching and assistance for contact center agents.",
}];


const researchexperience = [
];

const dataportfolio = [
];

const projectportfolio = [
    {
        title: "Magic Sketchpad",
        description: "Magic Sketchpad is an interactive web application that leverages machine learning to enhance your drawing experience. Built with the help of the Magenta Sketch-RNN model, this tool allows users to create sketches that are completed by an AI, providing a collaborative drawing experience between humans and machines. *Built with Javascript, HTML/CSS*",
        github: "https://github.com/joannamooon/sketch-rnn",
        website: "https://joannamooon.github.io/sketch-rnn/"
    },
    {
        title: "Multilingual Chatbot for PDFs",
        description: "Integrated Cohere’s API, Streamlit, and Langchain to create a chatbot that processes PDFs and answers questions in various langues. *Built with Python, Langchain, and Streamlit*",
        github: "https://github.com/joannamooon/cohere-api-pdf-chatbot",
        website: "https://joannamooon-cohere-api-pdf-chatbot-app-rpbpwu.streamlit.app"
    },
    {
        title: "Llama Bank Query",
        description: "A financial query engine using Hugging Face transformers and Langchain, paired with a Streamlit interface for real-time data analysis and report generation of financial documents. *Built with Python, Langchain, Pytorch, Hugging Face Transformers, Streamlit*",
        github: "https://github.com/joannamooon/Llama-Bank",
    },
    {
        title: "YouTube-to-MP3",
        description: "A Python application that converts YouTube links to MP3 files for downloading. *Built with Python and customtkinter* ",
        github: "https://github.com/joannamooon/YouTube-to_mp3",
    },
    {
        title: "ASL Translator",
        description: "Leverages OpenCV and scikit-learn for computer vision capabilities to facilitate data collection and the training of the machine learning model, while MediaPipe is employed for its advanced hand landmark estimation capabilities, encompassing over 20 distinct landmarks, thereby enhancing the accuracy of gesture recognition. *Built with Python, OpenCV, scikit-learn, MediaPipe*",
        github: "https://github.com/joannamooon/ASLTranslator",
    },
    {
        title: "Flappy Bird AI",
        description: "Designed and implemented a reinforcement learning algorithm to train the Al to play Flappy Bird autonomously. *Built with Python, NEAT*",
        github: "https://github.com/joannamooon/flappy_bird_ai",
    },
    {
        title: "Omok AI",
        description: "A Omok game engine that uses the min-max optimization algorithm along with the alpha-beta pruning algorithm so to enable strategic gameplay and decision-making capabilities. *Built with Python, Pygame*",
        github: "https://yw6524.wixsite.com/carat",
    },
];

const contactConfig = {
    YOUR_EMAIL: "y9moon@uwaterloo.ca",
    YOUR_FONE: "-",
    description: "- ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/joannamooon",
    linkedin: "https://www.linkedin.com/in/joannamoon05/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    researchexperience,
    workexperience,
    worktimeline,
    services,
    introdata,
    contactConfig,
    socialprofils,
    projectportfolio,
    logotext,
    awards,
};
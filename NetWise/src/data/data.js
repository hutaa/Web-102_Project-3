import q3Img from '../assets/IP-Routing.webp'; 
import q4Img from '../assets/Data-Transer-TCP.png'; 
import q7Img from '../assets/Encryption-Compression.png'; 
import q8Img from '../assets/Communication.jpg'; 
import q10Img from '../assets/Firewalls.jpg'; 


const flashcards = [
    {
        id: 1,
        question: "What does OSI stand for?",
        answer: "Open Systems Interconnection",
        image: "",
        category: "easy"
    },
    {
        id: 2,
        question: "How many layers are in the OSI model?",
        answer: "7 layers",
        image: "",
        category: "easy"
    },
    {
        id: 3,
        question: "What layer of the OSI model is responsible for routing and IP addressing?",
        answer: "Layer 3 – Network Layer",
        image: q3Img,
        category: "medium"
    },
    {
        id: 4,
        question: "Which OSI layer ensures reliable data transfer using TCP?",
        answer: "Layer 4 – Transport Layer",
        image: q4Img,
        category: "medium"
    },
    {
        id: 5,
        question: "What OSI layer does HTTP operate at?",
        answer: "Layer 7 – Application Layer",
        image: "",
        category: "easy"
    },
    {
        id: 6,
        question: "Which layer converts data into electrical or optical signals?",
        answer: "Layer 1 – Physical Layer",
        image: "",
        category: "easy"
    },
    {
        id: 7,
        question: "Which OSI layer is responsible for encryption and compression?",
        answer: "Layer 6 – Presentation Layer",
        image: q7Img,
        category: "medium"
    },
    {
        id: 8,
        question: "What layer is responsible for establishing, maintaining, and ending communication sessions?",
        answer: " Layer 5 – Session Layer",
        image: q8Img,
        category: "medium"
    },
    {
        id: 9,
        question: "What is the main function of the Data Link Layer?",
        answer: "Provides MAC addressing and error detection for local delivery",
        image: "",
        category: "medium"
    },
    {
        id: 10,
        question: "At which OSI layer do firewalls typically operate, and why?",
        answer: "Primarily at Layer 3 (Network) and Layer 4 (Transport) to filter traffic based on IP addresses and ports; some advanced firewalls also inspect Layer 7 (Application) data for deeper packet inspection.",
        image: q10Img,
        category: "hard"
    },
];

export default flashcards;

import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import Img1 from "../assets/bannerImg1.png";
import Img2 from "../assets/bannerImg2.png";
import { FaBook, FaComputer } from "react-icons/fa6";

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "For Students",
    link: "#",
  },
  {
    id: 3,
    title: "Resources",
    link: "#",
  },
  {
    id: 4,
    title: "About us",
    link: "#",
  },
  {
    id: 5,
    title: "Contact us",
    link: "#",
  },
];

export const WhyChooseUsData = [
  {
    id: 1,
    title: "One-on-one Teaching",
    desc: "All of our special education experts have a degree in special education.",
    link: "/",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    desc: "Our tutors are always available to respond as quick as possible for you",
    link: "/",
    icon: <FaDumbbell />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Our digital whiteboard equipped with audio and video chat fetures.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fe6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Choose an expert tutor based on your budget and per hour.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];

export const BannerData = [
  {
    id: 1,
    image: Img1,
    tag: "CUSTOMIZE WITH YOUR SCHEDULE",
    title: "Personalized Professional Online Tutor on Your Schedule",
    subtitle:
      "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
    link: "#",
    reverse: false,
  },
  {
    id: 2,
    image: Img2,
    tag: "CUSTOMIZE WITH YOUR SCHEDULE",
    title: "Talented and Qualified Tutors to Serve You for Help",
    subtitle:
      "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
    link: "#",
    reverse: true,
  },
];

export const SubjectCardList = [
  {
    id: 1,
    name: "Engineering",
    icon: <FaComputer />,
    color: "#0063ff",
    delay: 0.2,
  },
  {
    id: 2,
    name: "English",
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.3,
  },
  {
    id: 3,
    name: "Programming",
    icon: <FaComputer />,
    color: "#922aee",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Science",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.5,
  },
  {
    id: 5,
    name: "History",
    icon: <FaBook />,
    color: "#075267",
    delay: 0.6,
  },
  {
    id: 6,
    name: "Psychology",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.7,
  },
  {
    id: 7,
    name: "Web design",
    icon: <FaComputer />,
    color: "#b93838",
    delay: 0.8,
  },
  {
    id: 8,
    name: "See all",
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9,
  },
];

export const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "This platform has been a game-changer for my studies. The courses are well-structured, and the instructors are amazing!",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve Smith",
    feedback:
      "Thanks to the resources and support, I was able to land my dream job. Highly recommend it!",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen",
    feedback:
      "This platform has been a game-changer for my studies. The courses are well-structured, and the instructors are amazing!",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Ariana",
    feedback:
      "Thanks to the resources and support, I was able to land my dream job. Highly recommend it!",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];

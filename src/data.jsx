// Project Section Images
import ProjectOne from "./assets/projects/project-one.png";
import ProjectTwo from "./assets/projects/project-two.jpg";
import ProjectThree from "./assets/projects/project-three.jpg";

// Skills Section Images
import Html from "./assets/language-logo/html.svg";
import Css from "./assets/language-logo/css.svg";
import Javascript from "./assets/language-logo/javascript.svg";
import Typescript from "./assets/language-logo/typescript.svg";
import Tailwind from "./assets/language-logo/tailwind-css.svg";
import Bootstrap from "./assets/language-logo/bootstrap.svg";
import VueJs from "./assets/language-logo/vue-js.svg";
import ReactJs from "./assets/language-logo/react-js.svg";
import GitHub from "./assets/language-logo/github.svg";
import Photoshop from "./assets/language-logo/adobe-photoshop.svg";
import Illustrator from "./assets/language-logo/adobe-illustrator.svg";

// Testimonials Section Images
import CompanyOne from "./assets/testimonials/askbootstrap.png";
import CompanyTwo from "./assets/testimonials/akaal-creatives.png";
import CompanyThree from "./assets/testimonials/company.jpg";

// Projects section
export const projects = [
  {
    id: 1,
    poster: ProjectOne,
    title: "Fast Food Delivery Template",
    description:
      "Our comprehensive fast food delivery HTML template integrates HTML, CSS, Bootstrap, and JavaScript to deliver a fully responsive design. It ensures seamless user experiences across diverse devices and screen sizes, optimizing convenience and accessibility.",
    links: {
      preview: "https://chanpreetsembhi.github.io/fast-food/",
      githubrepo: "https://github.com/ChanpreetSembhi/fast-food",
    },
  },
  {
    id: 2,
    poster: ProjectTwo,
    title: "Health Consultation Digital Card",
    description:
      "Create a mobile-friendly health consultation digital card using HTML and Tailwind CSS, offering streamlined access to vital information and services for optimal user convenience and efficiency.",
    links: {
      preview: "https://chanpreetsembhi.github.io/health-consultation/",
      githubrepo: "https://github.com/ChanpreetSembhi/health-consultation",
    },
  },
  {
    id: 3,
    poster: ProjectThree,
    title: "Save Your Id",
    description:
      "Build a mobile-only two-page website with Vue.js, Vue Router, Tailwind CSS, and Appwrite for database integration, focusing on secure ID saving and seamless user experience.",
    links: {
      preview: "https://saveid.vercel.app/",
      githubrepo: "https://github.com/ChanpreetSembhi/save-id",
    },
  },
];

// Skills Section
export const skills = [
  {
    id: 1,
    logo: Html,
    name: "HTML",
  },
  {
    id: 2,
    logo: Css,
    name: "CSS",
  },
  {
    id: 3,
    logo: Javascript,
    name: "Javascript",
  },
  {
    id: 4,
    logo: Typescript,
    name: "Typescript",
  },
  {
    id: 5,
    logo: Tailwind,
    name: "Tailwind Css",
  },
  {
    id: 6,
    logo: Bootstrap,
    name: "Bootstrap",
  },
  {
    id: 7,
    logo: VueJs,
    name: "Vue Js",
  },
  {
    id: 8,
    logo: ReactJs,
    name: "React Js",
  },
  {
    id: 9,
    logo: GitHub,
    name: "GitHub",
  },
  {
    id: 10,
    logo: Photoshop,
    name: "Photoshop",
  },
  {
    id: 11,
    logo: Illustrator,
    name: "Illustrator",
  },
];

// Testimonials Section
export const testimonials = [
  {
    id: 1,
    profile: CompanyOne,
    name: "Gurdeep Singh",
    position: "Graphic Designer",
    comment:
      "Working with Frontend Web Developer Chanpreet Singh was fantastic! Their ability to bring my designs to life on the web with precision and creativity was truly impressive.",
  },
  {
    id: 2,
    profile: CompanyTwo,
    name: "Harshdeep Singh",
    position: "Mern Stack Developer",
    comment:
      "Frontend Web Developer Chanpreet Singh is a skilled collaborator in our MERN stack projects. Their dedication to clean, efficient code ensures our frontend shines with functionality and style.",
  },
  {
    id: 3,
    profile: CompanyThree,
    name: "Jared Smith",
    position: "Backend Developer",
    comment:
      "Frontend Web Developer Chanpreet Singh excels in creating seamless user interfaces. Their attention to detail and collaboration skills enhance our backend solutions, resulting in exceptional web applications.",
  },
];

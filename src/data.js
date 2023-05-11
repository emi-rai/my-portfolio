import shapeshifters from './assets/ShapeShifters.gif'
import hikeNE from './assets/HikeNE.gif'
import hike67 from './assets/hike-the-67.gif'
import aeauto from './assets/ae-auto.gif'
import diana from './assets/diana_linkedin.jpeg'
import alix from './assets/alix_linkedin.jpeg'

export const projects = [
  {
    title: "ShapeShifters",
    subtitle: "FastAPI, Redux, Tailwind",
    description:
      "Meet new people with common interests and get active with ShapeShifters ",
    image: shapeshifters,
    link: "https://gitlab.com/Alix-de-Pannemaecker/AE-Autos",
  },
  {
    title: "HikeNE",
    subtitle: "Flask, Jinja, Bootstrap",
    description:
      "Journal all your hikes and track your progress with completing hikes. ",
    image: hikeNE,
    link: "https://www.youtube.com/watch?v=x7B65BOGUzE",
  },
  {
    title: "Hike the 67",
    subtitle: "Django, HTML, CSS",
    description:
     "Keep a blog style log of hikes while tracking progress completing the 67 New England 4000+ footers ",
    image: hike67,
    link: "https://gitlab.com/emi.rai/hike-the-67",
  },
  {
    title: "AE Auto",
    subtitle: "Django, React",
    description:
      "Web application for automobile sales, rental, and service business",
    image: aeauto,
    link: "https://gitlab.com/Alix-de-Pannemaecker/AE-Autos",
  },
];

export const testimonials = [
  {
    quote:
      "She was an outstanding team player who effectively communicated with me as we worked on a project, ensuring we were always on the same page. Emily's ability to identify the root cause of problems and come up with innovative solutions to resolve them was truly inspiring. Her debugging skills were exceptional, and she always made me feel comfortable asking questions or seeking help whenever I needed it.",
    image: diana,
    name: "Diana Angarita",
    company: "Hack Reactor",
    link: "https://www.linkedin.com/in/diana-angaritah/"
  },
  {
    quote:
      "I had the pleasure to work with Emily on a full-stack application development during module 2 of the Hack Reactor intensive coding bootcamp. Always keeping a positive spirit, Emily is a hard-working engineer, and I was impressed by her capacity to learn and not being stuck by any issue we encountered during development. It is also worth mentioning that Emily has an artistic touch and is highly skilled as a front-end developer.",
    image: alix,
    name: "Alix de Pannemaecker",
    company: "Hack Reactor",
    link: "https://www.linkedin.com/in/alix-de-pannemaecker/",
  },
];

export const skills = [
  "JavaScript",
  "React",
  "Python",
  "Django",
  "FastAPI",
  "CSS",
  "PostgreSQL",
  "Redux"
];

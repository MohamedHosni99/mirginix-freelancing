
import {
  serviceIcon1,
  serviceIcon2,
  serviceIcon3,
  serviceIcon4,
  serviceImage1,
  serviceImage2,
  serviceImage3,
  serviceImage4,
  facebook,
  linkedin,
  twitter,
  location,
  call,
  gmail
} from "../assets";


export const navigation = [
  {
    id: "0",
    title: "home",
    url: "#hero",
  },
  {
    id: "1",
    title: "services",
    url: "#services",
  },
  {
    id: "2",
    title: "about",
    url: "#about",
  },
  {
    id: "3",
    title: "contact",
    url: "#contact",
  },
];








export const services = [
  {
    id: "0",
    title: "Cyber Security Solutions",
    text: "We provide organizations with a cutting-edge digital shield against the rising tide of cyber threats: \n• Professional penetration testing and comprehensive vulnerability assessments. \n• Proactive defense systems against advanced cyberattacks. \n• Robust risk management strategies aligned with global standards (ISO, GDPR, NIST). \n• Regular security reports to enhance readiness and build trust with partners and clients.",
    backgroundUrl: "assets/services/card.svg",
    iconUrl:serviceIcon1,
    imageUrl: serviceImage1,
    light: true,
  },
  {
    id: "1",
    title: "Networking Services",
    text: "We transform enterprise infrastructure into fully integrated, reliable, and flexible \nconnectivity systems: \n• Design and development of modern networks that enable digital transformation. \n• Performance assessments to uncover vulnerabilities and boost efficiency. \n• Scalable connectivity solutions that grow alongside business expansion.",
    backgroundUrl: "assets/services/card.svg",
    iconUrl: serviceIcon2,
    imageUrl: serviceImage2,
  },
  
];

export const socials = [

  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
  {
    id: "2",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "#",
  },

];

export const contactDetails = [
  
  {
    id: "0",
    title: "Phone",
    text: "+201151359456",
    iconUrl: call,
  },
  {
    id: "1",
    title: "Email",
    text: "info@mirginx.com",
    iconUrl: gmail,
  },
  {
    id: "2",
    title: "Location",
    text: "Alexandria, Egypt",
    iconUrl: location,
  },
];
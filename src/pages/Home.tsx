import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { useRef } from "react";
import { Faq } from "../components/Faq";
import MentorshipSteps from "../components/MentrorshipSteps";
import MentorshipLongTerm from "../components/MentorshipLongTerm";
import WhatsAppButton from "../components/WhatsAppButton";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export function HomePage() {
  const coursesRef = useRef(null);
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const homeRef = useRef(null);
  return (
    <div>
      <Navbar
        coursesRef={coursesRef}
        servicesRef={servicesRef}
        faqRef={faqRef}
        homeRef={homeRef}
      />
      <Hero reference={homeRef} />
      <GlobalStyle />
      <MentorshipSteps />
      <MentorshipLongTerm />
      <About reference={coursesRef} />
      <Services reference={servicesRef} />
      <Faq reference={faqRef} />
      <Footer />
    </div>
  );
}

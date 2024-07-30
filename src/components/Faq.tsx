import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordian";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "About HRA Solutions?",
    answer:
      "HRA Solutions is an online learning platform offering a wide range of courses and 1-1 personalized mentorship in web development, including frontend, backend, and full stack development,Big Data,QA etc whihc designed to help students gain valuable skills in the field of Software.",
    value: "item-1",
  },
  {
    question: "How is HRA Solutions is different from other platforms?",
    answer:
      "Unlike other platforms, at HRA Solutions we providing dedicated 1-1 personalized mentorship on real time projects and mock interviews.",
    value: "item-2",
  },
  {
    question: "Who are the instructors?",
    answer:
      "Our courses are taught by industry professionals with extensive experience. They bring real-world expertise and insights to the learning experience.",
    value: "item-3",
  },
  {
    question: "How does the one-on-one mentorship program work?",
    answer:
      "Each student is paired with a mentor based on their specific needs and goals. Mentors and students meet regularly to discuss progress, address challenges, and develop strategies for success.",
    value: "item-4",
  },
  {
    question: "How often will I meet with my mentor?",
    answer:
      "The frequency of meetings is flexible and can be customized to fit your schedule. Typically, candidates meet with their mentors weekly 5 days.",
    value: "item-5",
  },
  {
    question: "Can I change my mentor if I am not satisfied?",
    answer:
      "Yes, if you feel that the mentor assigned to you is not a good fit, you can request a change. Our priority is to ensure that you have a productive and positive mentorship experience.",
    value: "item-6",
  },
  {
    question: "Are there any prerequisites for enrolling in the courses?",
    answer:
      "No, we teach our courses such a way that person with no programming background can be up and running no time.",
    value: "item-7",
  },
  {
    question: "How long does each course take to complete?",
    answer:
      "Our course duration varies from course to course. Both Frontend and Backend course can be completed in 30 days and extra 15 days for building project. Full stack course takes about 45 days and 15 days extra for project.",
    value: "item-8",
  },
  {
    question: "How will mentorship help me in my career?",
    answer:
      "Mentorship can help you gain industry-specific knowledge, improve your technical skills, prepare for job interviews, and receive career advice from experienced professionals, ultimately enhancing your employability.",
    value: "item-9",
  },
  {
    question: "How do I track my progress?",
    answer:
      "You and your mentor will set specific goals and milestones. Regular progress reviews and feedback sessions will help you stay on track and measure your progress.",
    value: "item-10",
  },
  {
    question: "Can I participate in the mentorship program remotely?",
    answer:
      "Yes, our mentorship program is fully adaptable to remote participation. Sessions can be conducted via video calls, ensuring that you can benefit from mentorship no matter where you are located.",
    value: "item-11",
  },
  {
    question: " Is there an additional cost for the mentorship program?",
    answer:
      "The cost of the mentorship program varies depending on the level of mentorship and the frequency of sessions. Please refer to our website or contact our admissions office for detailed pricing information.",
    value: "item-12",
  },
];

export const Faq = ({ reference }: any) => {
  return (
    <section
      id="faq"
      className="container sm:mx-auto  py-12 sm:py-20 bg-[#2e2a2a] text-white rounded-2xl"
      ref={reference}
    >
      <div className="lg:w-7/12 mx-auto ">
        <div className="flex justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex justify-center mt-5">
          <Accordion
            type="single"
            collapsible
            className="w-11/12 AccordionRoot"
          >
            {FAQList.map(({ question, answer, value }: FAQProps) => (
              <AccordionItem
                key={value}
                value={value}
                className="border border-[#383838] shadow-xl rounded-lg mb-4"
              >
                <AccordionTrigger className="text-left px-3 no-underline">
                  {question}
                </AccordionTrigger>

                <AccordionContent className="px-3">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex justify-center">
          <h3 className="font-medium mt-4">Still have questions? Contact us</h3>
        </div>
      </div>
    </section>
  );
};

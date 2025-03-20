import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Define the FAQ item type
type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

// Define the props for the component
interface FAQAccordionProps {
  data: FAQItem[];
  questionStyle?: string;
  answerStyle?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ data, questionStyle, answerStyle }) => {
  return (
    <Accordion type="single" collapsible className="w-full md:w-[80%] flex flex-col gap-7 py-3">
      {data.map((faq) => (
        <AccordionItem 
          key={faq.id} 
          value={faq.id} 
          className="border border-gray-700 bg-[#0D0D0D] rounded-lg py-2 px-8"
        >
          <AccordionTrigger className={questionStyle}>
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className={answerStyle}>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;

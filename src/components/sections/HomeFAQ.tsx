"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const questions = [
  {
    question: "How much does a project cost?",
    answer: "Project cost depends on scope, complexity, technology, design requirements, and timeline. We first understand the project and then provide a tailored estimate.",
  },
  {
    question: "How long does development take?",
    answer: "Timelines vary by project. A focused MVP may take several weeks, while larger platforms or complex software can require multiple phases.",
  },
  {
    question: "Can you build an MVP for a startup?",
    answer: "Yes. We can help with product planning, wireframing, design, development, testing, launch, and future scaling.",
  },
  {
    question: "Can you work with an existing website or application?",
    answer: "Yes. We can improve, redesign, optimize, maintain, or extend existing digital products.",
  },
  {
    question: "Do you provide design as well as development?",
    answer: "Yes. Our services include UI/UX, branding, graphic design, 3D, motion, and product design alongside development.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. We offer maintenance, bug fixing, performance optimization, monitoring, security updates, and technical support.",
  },
  {
    question: "Can you work with international clients?",
    answer: "Yes. CORE & CRAFT is structured to support remote collaboration and digital project delivery.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {questions.map(({ question, answer }, index) => {
        const isOpen = openIndex === index;
        const questionId = `home-faq-question-${index + 1}`;
        const answerId = `home-faq-answer-${index + 1}`;

        return (
          <div key={question}>
            <h3>
              <button
                id={questionId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-4 text-left text-sm font-medium text-white transition-colors hover:text-primary-light sm:text-base"
              >
                <span>{question}</span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-primary-light" aria-hidden="true">
                  <Plus size={15} className={isOpen ? "rotate-45 transition-transform" : "transition-transform"} />
                </span>
              </button>
            </h3>
            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              hidden={!isOpen}
              className="max-w-3xl pb-5 pr-10 text-sm leading-6 text-text-secondary"
            >
              {answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
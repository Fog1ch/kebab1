"use client";
import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
export type FAQItem = { question: string; answer: string };
export default function Accordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div
          className={`accordion-item ${open === i ? "is-open" : ""}`}
          key={item.question}
        >
          <h3>
            <button
              id={`${id}-q-${i}`}
              aria-expanded={open === i}
              aria-controls={`${id}-a-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="faq-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.question}</span>
              {open === i ? (
                <Minus aria-hidden="true" />
              ) : (
                <Plus aria-hidden="true" />
              )}
            </button>
          </h3>
          <div
            id={`${id}-a-${i}`}
            role="region"
            aria-labelledby={`${id}-q-${i}`}
            aria-hidden={open !== i}
            className="accordion-panel"
          >
            <div>
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import React, { useState } from 'react';
import './Faq.css'; // Make sure to create this CSS file for styling
import Drop from '../assets/drop.png';

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue lacus eget turpis pharetra, in facilisis ipsum blandit. Nulla facilisi. Vivamus vel turpis vel velit euismod pharetra non sit amet metus.",
      open: false
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue lacus eget turpis pharetra, in facilisis ipsum blandit. Nulla facilisi. Vivamus vel turpis vel velit euismod pharetra non sit amet metus.",
      open: false
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue lacus eget turpis pharetra, in facilisis ipsum blandit. Nulla facilisi. Vivamus vel turpis vel velit euismod pharetra non sit amet metus.",
      open: false
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue lacus eget turpis pharetra, in facilisis ipsum blandit. Nulla facilisi. Vivamus vel turpis vel velit euismod pharetra non sit amet metus.",
      open: false
    }
  ]);

  const toggleFaq = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }));
  };

  return (
    <div>
    <div className='faq'>
      <h1 className='heading'>Frequently Asked Questions</h1>
      <div className='faqs'>
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${faq.open ? 'open' : ''}`}
            key={index}
            onClick={() => toggleFaq(index)}
          >
            <div className='faq-question'>
              {faq.question}
              <img
                src={Drop}
                alt="Drop icon"
                className={`drop-icon ${faq.open ? 'normal' : 'rotate'}`}
              />
            </div>
            <div className='faq-answer'>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className='footer'>
        <div>
        <p className='base_heading'>Need more details? let us assist you</p>
        </div>
        
      <div>
        <button className='basebtn'>Connect With Us</button>
      </div>
      </div>
    </div>
  );
};

export default Faq;

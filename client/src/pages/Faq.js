import React, { useState } from 'react';


const questionsAnswers = [
  {
    question: "What is retort technology?",
    answer: "Retort technology is a cutting-edge process that seals food in airtight packaging and then heat treats it to preserve freshness, taste, and nutritional value without preservatives."
  },
  {
    question: "How are Quick but Healthy meals healthy?",
    answer: "Our meals are crafted with fresh ingredients and without preservatives, ensuring you get a balanced meal. The retort technology helps maintain the natural nutritional value of the food."
  },

  {
    question: "How do I prepare a Quick but Healthy meal?",
    answer: "Our meals are designed for utmost convenience. Simply reheat them in a microwave, stove, or even in hot water, and you’re ready to enjoy a delicious, healthy meal in no time."
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-green-100 py-8 px-4 rounded-lg shadow-md animate-fadeIn">
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Frequently Asked Questions</h2>
      {questionsAnswers.map((qa, index) => (
        <div key={index} className="my-2">
          <div className="p-4 bg-white rounded-lg shadow cursor-pointer" onClick={() => toggleIndex(index)}>
            <h3 className="text-xl text-gray-800 font-semibold flex justify-between items-center">
              {qa.question}
              <span className="text-gray-500 text-lg">{activeIndex === index ? '-' : '+'}</span>
            </h3>
          </div>
          {activeIndex === index && (
            <div className="mt-2 p-4 bg-white rounded-lg shadow">
              <p className="text-gray-600">{qa.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;

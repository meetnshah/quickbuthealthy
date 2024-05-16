import React from 'react';
import { ReactComponent as PhoneIcon } from './icons/phone.svg';  // Ensure you have SVG icons
import { ReactComponent as MailIcon } from './icons/mail.svg';
import { ReactComponent as LocationIcon } from './icons/location.svg';
import './AboutUs.css';

const AboutUsSection = () => {
  return (
    <div className="about-us py-12 px-4 bg-gray-50 shadow-md rounded-lg">
    <h2 className="text-3xl font-bold text-center text-primary mb-6">About Us</h2>
    <p className="text-md text-gray-700 mb-4">
      In today's fast-paced world, finding the time for a nutritious meal can be a challenge. At Quick but Healthy, we're dedicated to providing ready-to-eat meals that don't just save you time but also support your health and well-being. Our meals are crafted using advanced retort technology, ensuring they remain fresh, safe, and preservative-free for longer.
          We believe that healthy eating should be accessible and affordable. That's why our pricing is tailored to be friendly for students and working professionals alike. With Quick but Healthy, you're not just choosing convenience. You're choosing meals that are good for you, good for your wallet, and good for your busy schedule.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <PhoneIcon className="icon" />
          +91 93283 88361
        </div>
        <div className="contact-item">
          <MailIcon className="icon" />
          quickbuthealthy@gmail.com
        </div>
        <div className="contact-item">
          <LocationIcon className="icon" />
          4, Shambhavnath Complex,<br />Tulip Bungalow Road,<br />Ahmedabad, Gujarat - 380054
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;



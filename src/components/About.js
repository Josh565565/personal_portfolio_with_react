import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add('animate');
        } else {
          aboutRef.current.classList.remove('animate');
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="about-container px-20 mt-20 bg-[#e7e6e6] rounded-md" ref={aboutRef}>
      <h1 className="text-center text-3xl font-semibold pt-5 text-blue-500">About Me</h1>
      <div className="flex justify-between py-20">
        <div className="bg-white w-40 rounded p-2 about-item">
          <h3 className="text-center text-blue-600 font-bold pb-2">HOBBIES</h3>
          <ul>
            <li>CODING</li>
            <li>READING</li>
            <li>MUSIC</li>
            <li>SPORT</li>
            <li>MOVIES</li>
          </ul>
        </div>
        <div className="bg-white w-40 rounded p-2 about-item">
          <h3 className="text-center text-blue-600 font-bold pb-2">PRIORITIES</h3>
          <ul>
            <li>CODING</li>
            <li>STUDYING</li>
            <li>MUSIC</li>
            <li>SPORT</li>
            <li>MOVIES</li>
          </ul>
        </div>
        <div className="bg-white w-40 rounded p-2 about-item">
          <h3 className="text-center text-blue-600 font-bold pb-2">SKILLS</h3>
          <ul>
            <li>JAVASCRIPT</li>
            <li>HTML- CSS</li>
            <li>PYTHON</li>
            <li>PRODUCT DESIGN</li>
          </ul>
        </div>
        <div className="bg-white w-40 rounded p-2 about-item">
          <h3 className="text-center text-blue-600 font-bold pb-2">SOFT SKILLS</h3>
          <ul>
            <li>COMMUNICATION</li>
            <li>TEAMWORK</li>
            <li>CREATIVITY</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

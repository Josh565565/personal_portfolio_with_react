import React, { useEffect, useState } from 'react';

const titles = ["Designer", "Mobile Developer", "Web Developer"];

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    if (charIndex < titles[titleIndex].length) {
      setTimeout(() => {
        setCurrentTitle(currentTitle + titles[titleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setCharIndex(0);
        setCurrentTitle('');
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 1000);
    }
  }, [charIndex, titleIndex, currentTitle]);

  return (
    <div id="home" className="flex items-center px-20 justify-between mt-10">
      <div className="w-[500px] flex flex-col gap-5">
        <div>
          <h2 className="text-4xl"><span className="text-blue-400 font-bold">I am a</span> <span>{currentTitle}</span></h2>
        </div>
        <p className="text-balance">
          My name is Okwor Joshua, I create nice and responsive websites. My web
          development journey has been awesome so far.
          I like making a positive impact everywhere I go and I try to be the
          best in whatever I find myself doing.
          I am creative and I love challenging myself to explore new things.
        </p>
      </div>
      <div className="w-[400px] rounded object-cover">
        <img className="object-fill rounded" src="images/Joshua_Okwor2.jpg" alt="joshua" />
      </div>
    </div>
  );
}

export default Home;

import React from 'react';

const menuLinks = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Services', link: '#services' },
  { name: 'Our Work', link: '#our-work' },
];

export const Nav = () => {
  return (
    <section className="flex items-start justify-between h-screen bg-gradient-to-b from-[#057ADA] to-[#6F7DFB]">
      <div className="flex items-center px-6 py-4">
        <h1 className="text-4xl mt-1 ml-60 font-extrabold leading-11 text-white">GD.</h1>
      </div>

      <div className="flex items-center mr-80 mt-5">
        <ul className="hidden md:flex items-center">
          {menuLinks.map((item, i) => (
            <li key={i} className="px-4">
              <a href={item.link} className="text-white">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="ml-4 btn-primary">Enter Now</button>
      </div>
    </section>
  );
};

export default Nav;

import React from 'react';
import IMG1 from '../../assets/ss2.png';
import IMG2 from '../../assets/ss4.png';
import IMG3 from '../../assets/ss5.png';
import IMG4 from '../../assets/ss3.png';
import IMG5 from '../../assets/ss6.png';
import IMG6 from '../../assets/restapi.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'PETS Web Application',
      img: IMG1,
      description:
        'Social media web application for Pets(MERN Stack)',
      technologies: 'React | Redux | Express | Node js | MongoDB | Oracle Cloud',
      link: 'https://petsweb.live/',
      github: 'https://github.com/jani358/MERN-Social-Media-Pets-Web-App',
    },
    {
      id: 2,
      title: ' Edu Blog Website(frontend)',
      img: IMG4,
      description:
        'Responsive Blog Website',
      technologies: 'React.js | Redux | html | css | javascript',
      link: 'https://sprightly-malabi-02da6b.netlify.app/',
      github: 'https://github.com/jani358/Book-Store-MERN-STACK',
    },
    {
      id: 3,
      title: 'My Portfolio',
      img: IMG2,
      description: 'A Portfolio website containing my projects,experience and skills',
      technologies: 'React.js | html | css | javascript',
      link: '#',
      github: 'https://github.com/jani358/My_Portfolio',
    },
    {
      id: 4,
      title: 'Book Store MERN-STACK',
      img: IMG3,
      description: 'A book store made by using MERN Stack',
      technologies: 'React.js | Node.js | Express | MongoDB',
      link: '#',
      github: 'https://github.com/jani358/Book-Store-MERN-STACK',
    },
    {
      id: 5,
      title: 'CRUD-APPLICATION-MERN',
      img: IMG5,
      description:'A simple application made with the basic concepts of MERN stack',
      technologies: 'React.js | Node.js | Express | MongoDB',
      link: '#',
      github: 'https://github.com/jani358/CRUD-APPLICATION-MERN',
    },
    {
      id: 6,
      title: 'MERN-Stack-REST-API-SERVER',
      img: IMG6,
      description:'Developers create REST APIs using NodeJS and ExpressJS, which allows them to create, read, write, and delete data from MongoDB databases (also called CRUD operations).',
      technologies: 'Node.js | Express | MongoDB | Postman ',
      link: '#',
      github: 'https://github.com/jani358/MERN-Stack-REST-API-SERVER-',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

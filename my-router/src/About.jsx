import React from 'react'
import { Link } from 'react-router-dom'
import pexels1 from '../public/Image/pexels1.jpg'
import pexels2 from '../public/Image/pexels2.jpg'
import pexels3 from '../public/Image/pexels3.jpg'


    
const cardData = [
    {
      title: "The Task-Router 2023",
      image: pexels1,
      link: "https://www.guvi.in/blog/top-full-stack-developer-tools/",
      description: "I wandered lonely as a cloud That floats on high o'er vales and hills,When all at once I saw a crowd, A host, of golden daffodils;Beside the lake, beneath the trees, Fluttering and dancing in the breeze.",
      date: "31 August 2023",
      comments: "No Comments"
    },
    {
      title: "The Task-Router 2023",
      image: pexels2,
      link: "https://www.guvi.in/blog/top-must-know-full-stack-development-applications/",
      description: " I wandered lonely as a cloud That floats on high o'er vales and hills,When all at once I saw a crowd, A host, of golden daffodils;Beside the lake, beneath the trees, Fluttering and dancing in the breeze.",
      date: "31 August 2023",
      comments: "No Comments"
    },
    {
      title: "The Task-Router 2023",
      image: pexels3,
      link: "https://www.guvi.in/blog/best-ways-to-learn-full-stack-development/",
      description: "I wandered lonely as a cloud That floats on high o'er vales and hills,When all at once I saw a crowd, A host, of golden daffodils;Beside the lake, beneath the trees, Fluttering and dancing in the breeze.",
      date: "31 August 2023",
      comments: "No Comments"
    }
];
 export default function app(){
    return(
    <div className="container">
    <div className="row g-4">
      {cardData.map((card, index) => (
        <div className="col-lg col-md-6" key={index}>
          <div className="card h-100">
            <div>
              <Link className="nav-link" to={card.link}>
                <img src={card.image} className="card-img-top" alt="..." />
              </Link>
            </div>
            <div className="card-body">
              <p className="card-title">
                <Link className="nav-link" to={card.link}>
                  {card.title}
                </Link>
              </p >
              <p className="card-text" id='text'>{card.description}</p>
              <p className='color'>
                <Link className="nav-link read" to={card.link}>
                  READ MORE »
                </Link>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary d-inline-flex w-100 text-align-left">
                {card.date} <ul><li>{card.comments}</li></ul>
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

    )
}


 
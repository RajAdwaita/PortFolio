import React from 'react'
import "./portfolio.css"
// import IMG from '../../assets/portfolio1.jpg'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: img1,
        title: 'ShoeStore',
        github: 'https://github.com',
        website: 'https://github.com'
    },
    {
        id: 2,
        image: img2,
        title: 'PokemonHub',
        github: 'https://github.com/RajAdwaita/Pokemon-GO',
        website: 'https://timely-selkie-0ae8bc.netlify.app/'
    },
    {
        id: 3,
        image: img3,
        title: 'LadyHub',
        github: 'https://github.com/RajAdwaita/LadyHub',
        website: 'http://apparentlyinnocent.co/'
    },
    {
        id: 4,
        image: img4,
        title: 'BankingAPP',
        github: 'https://github.com',
        website: 'https://adwaitaprojects.netlify.app/'
    },
    {
        id: 5,
        image: img5,
        title: 'BharatnCrypt',
        github: 'https://github.com/RajAdwaita/bharatncrypt',
        website: 'https://otpyrcn.netlify.app/'
    },
    {
        id: 6,
        image: img6,
        title: 'Personal Projects ',
        github: 'https://codesandbox.io/s/personal-projects-g6idwk',
        website: 'https://adwaitaprojects.netlify.app/'
    },

]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Check 'em out</h5>
            <h2>PROJECTS</h2>
            <div className="container portfolio_container">
                {
                    data.map(item => {
                        return (
                            <article className="portfolio_item" key={item.id}>
                                <div className="portfolio_item_image">
                                    <img src={item.image} alt="" className='' />
                                </div>
                                <h3>{item.title}</h3>
                                <div className="portfolio_item_items">
                                    <a href={item.github} className="btn">Github</a>
                                    <a href={item.website} className='btn btn-primary'>Website</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
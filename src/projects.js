import React, {useEffect} from 'react'
import './styles/projects.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import Card from './card';


function Projects() {
  useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
  return (
    <>
        <section className="all-projects" data-aos="fade-in">
            <Card />
        </section>
    </>
  )
}

export default Projects
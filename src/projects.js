import React, {useEffect} from 'react'
import Card from './card'
import SampleCard from './samplecard'
import './styles/projects.css'
import Aos from 'aos';
import "aos/dist/aos.css";


function Projects() {
  useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
  return (
    <>
        <section className="all-projects" data-aos="fade-in">
            <Card className="single-card"
            data-aos="fade-in"
            projectname='ChatX'
            projecttitle="Real Time Chat Application"
            projectdescription="This a group chat app by signing in you can caht here. This app developed with React Js and firebase."
            tools="React Js, Firebase, Pure CSS"
            link="https://chat-app-chatx.netlify.app/"
            github="https://github.com/GairikSharma/Chat-App"
            />
            <Card className="single-card"
            data-aos="fade-in"
            projectname='NewsHunt'
            projecttitle="News Application"
            projectdescription="Here I have used news api to get all the newses, and one more effect animate on scroll. Here you can see good quality css"
            tools="React Js, Pure CSS"
            link="https://newshuntupdated.netlify.app/"
            github="https://github.com/GairikSharma/NewsHunt"
            />
            <Card className="single-card"
            data-aos="fade-in"
            projectname='Quiz App'
            projecttitle="Quiz"
            projectdescription="This a quiz app developed with React Js"
            tools="React Js, Pure CSS"
            link="https://quizgs.netlify.app/"
            github="#"
            />
            <Card className="single-card"
            data-aos="fade-in"
            projectname='Random Certificate'
            projecttitle="Random Certificate Generator"
            projectdescription="Here I have used jsPdf nmp package"
            tools="React Js, jsPdf"
            link="#"
            github="https://github.com/GairikSharma/Random-Certificate-Generetor"
            />
            {/* <Card className="single-card"/> */}
            <SampleCard className="single-card"
            data-aos="fade-in"
            projectname='Basic Projects'
            projecttitle="Basic Projects on HTML, CSS, Javascript"
            projectdescription="You can check my GitHub repository for the beginer projects"
            tools="HTML, CSS, Javascript"
            link="#"
            github="https://github.com/GairikSharma"
            />
        </section>
    </>
  )
}

export default Projects
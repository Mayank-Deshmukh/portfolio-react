import { Container } from "./styles";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import pythonIcon from "../../assets/python-icon.svg";
import cppIcon from "../../assets/cpp-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-ico.svg";
import djangoIcon from "../../assets/django-ico.svg";
import ScrollAnimation from "react-animate-on-scroll";
import DownloadedImage from '../../assets/Mayank Deshmukh.jpg';


export function About(){
  return(
    <Container id="sobre">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
          <img src={DownloadedImage} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
      <div className="about-text">
      <div><br/><hr/><hr/><br/></div>
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
        <p>Myself Mayank, I am a B.tech undergrad with great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me. I'm constantly imporveing my Full-stack developing skills.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
        <p>With my passion for tech , I am very egar to contribute to a bigger cause and work with an innovative team.</p>
        <span style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>open for any work opportunity</span>
        </ScrollAnimation>
        <div><hr/><hr/><br/></div>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills&nbsp;&nbsp;:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={reactIcon} alt="React" /><p>React</p>
            </ScrollAnimation>
          </div>  

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
            <img src={vueIcon} alt="Vue" /><p>Vue.js</p>
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={htmlIcon} alt="Html" /><p>Html5</p>
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={cssIcon} alt="Css" /><p>CSS3</p>
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}> 
            <img src={cppIcon} alt="Css" /><p>C++</p>
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}> 
            <img src={jsIcon} alt="JavaScript" /><p>Javascript</p>
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}> 
            <img src={pythonIcon} alt="Css" /><p>Python</p>
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}> 
            <img src={djangoIcon} alt="Css" /><p>Django</p>
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}> 
            <img src={bootstrapIcon} alt="Css" /><p>Bootstrap</p>
          </ScrollAnimation>
          </div>


          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}> 
            <img src={nodeIcon} alt="Node"/><p>Node</p>
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
            <img src={typescriptIcon} alt="Typescript" /><p>Typescript</p>
          </ScrollAnimation>
          </div>
          <div>
            <div><hr/><hr/><br/></div>
          <ScrollAnimation animateIn="fadeInLeft">
          <h2>Awards</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
        <p><li>- Runner-up at "Pygame" Game Development
            Hackathon at St. Vincent Palotti College, Nagpur, 2020</li></p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
        <p><li>- State Football Tournament 2019-20 (Goalkeeper)</li></p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
        <p><li>- ALACRITY Fest Table Tennis Runner-up (Represented
              FE Department)</li></p>
        </ScrollAnimation>
        </div>
        </div>
      </div>
    </Container>
  )
}

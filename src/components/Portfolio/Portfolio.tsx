import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Project Quest</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/joaotuliojt/dtmoney-trilha-reactjs" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
              <a href="https://joaotuliojt.github.io/dv-musica-library-page/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Personal Portfolio</h3>
              <p> <li>-Devloped and deployed a portfolio website</li>
              <li>-used TypeScript and React frame work</li>
              <li>-very impressive UI design</li>   
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html and CSS</li>
                <li>React.js</li>
                <li>Typerscript</li>
                <li>AWS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Mayank-Deshmukh/Bookshelf.git" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>BookShelf&nbsp;&nbsp;:&nbsp;&nbsp;Library Management System</h3>
              <p><li>-web-app using CRUD operations</li>
                <li>- Enables to track and complete processes, such as
                    issuing book returns and checking availability, from anywhere</li>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html and Css</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </header>
            <div className="body">
              <h3>TopperSecrets</h3>
              <li>- Building a single-page application (SPA) community for
                  competitive exam aspirants.</li>
              <li>- Includes AI-based strategy building, exam information,
                  topper's notes, and recommendations</li>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Material UI</li>
                <li>JSX</li>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
          </div>
          </header>
          <div className="body">
            <h3>Earth Escape</h3>
            <p>
             <li>- Single-player responsive game with highscores, and obstacles.</li>
             <li>- Pygame library in Python.</li>
             <li>- developed within a straight 24-hour sitting during a hackathon.</li>
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Pycharm</li>
              <li>Django</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </header>
            <div className="body">
              <h3>Tic-Tac-Toe with AI</h3>
                <li>- Implemented a tic-tac-toe game with built-in artificial
                  intelligence.</li>
                <li> - win or draw the game but never
                  loses.</li>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html and Css</li>
                <li>AI</li>
                <li>Python</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
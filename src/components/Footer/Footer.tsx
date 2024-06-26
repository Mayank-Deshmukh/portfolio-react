import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span style={{color:'green'}}>Mayank</span>
        <span>Deshmmukh</span>
      </a>
      <div>
        <p>
          This website is made in <img src={reactIcon} alt="React" /> React framework.
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mayank-deshmukh-527106284"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Mayank-Deshmukh"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}

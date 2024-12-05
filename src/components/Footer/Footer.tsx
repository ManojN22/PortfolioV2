import { Container } from './styles'

import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://manoj.loyalo.us" className="logo">
        <span>manoj.</span>
        <span>loyalo.us</span>
      </a>
     
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/manoj-nandakumar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/ManojN22/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      
      </div>
    </Container>
  )
}

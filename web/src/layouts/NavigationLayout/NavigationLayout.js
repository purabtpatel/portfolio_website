import { NavLink, routes } from '@redwoodjs/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const NavigationLayout = ({ children }) => {
  return <>
    <div className="header-background">

      <div className="main-background">
        <div className='navbar'>
          <NavLink to={routes.home()} className='name_nav' >purab-patel</NavLink>
          <NavLink to={routes.home()} className='link_nav' activeClassName='active_link_nav'>_hello</NavLink>
          <NavLink to={routes.about()} className='link_nav' activeClassName='active_link_nav'>_about-me</NavLink>
          <NavLink to={routes.projects()} className='link_nav' activeClassName='active_link_nav'>_projects</NavLink>
          <div className='spacer'></div>
          <NavLink to={routes.contact()} className='contact_nav' activeClassName='active_link_nav'>_contact-me</NavLink>
        </div>


        <main>
          {children}
        </main>

        <div className='footer'>
          <span className='footer_text'>find me in:</span>
          <a className='footer_linkedIn' >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className='footer_icon'/>
          </a>
          <div className='footer_spacer'></div>
          <a className='footer_github'>
          @purabtpatel<FontAwesomeIcon icon={faGithub} size='2x' className='footer_icon'/>
          </a>
        </div>


        {/* <footer> */}
      </div>
    </div>
  </>
}

export default NavigationLayout

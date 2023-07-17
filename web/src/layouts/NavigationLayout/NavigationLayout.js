import { Link, routes } from '@redwoodjs/router'

const NavigationLayout = ({ children }) => {
  return <>
    <div className="header-background">

      <div className="main-background">
        <div className='navbar'>
          <Link to={routes.home()} className='name_nav'>purab-patel</Link>
          <Link to={routes.home()} className='link_nav'>_hello</Link>
          <Link to={routes.about()} className='link_nav'>_about</Link>
          <Link to={routes.projects()} className='link_nav'>_projects</Link>
          <div className='spacer'></div>
          <Link to={routes.contact()} className='contact_nav'>_contact-me</Link>
        </div>


        <main>
          {children}
        </main>
        {/* <footer> */}
      </div>
    </div>
  </>
}

export default NavigationLayout

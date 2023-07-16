import { Link, routes } from '@redwoodjs/router'

const NavigationLayout = ({ children }) => {
  return <>
    <div className="header-background">

      <div className="main-background">
        <nav>
          <ul>
            <li>
              <p className='link'>purab_patel</p>
            </li>
            <li>
              <Link to={routes.home()} className='link'>_hello</Link>
            </li>
            <li>
              <Link to={routes.about()} className='link'>_about</Link>
            </li>
            <li>
              <Link to={routes.projects()} className='link'>_projects</Link>
            </li>
          </ul>
        </nav>

        <div className='header-underline'></div>

        <main>
          {children}
        </main>
        {/* <footer> */}
      </div>
    </div>
  </>
}

export default NavigationLayout

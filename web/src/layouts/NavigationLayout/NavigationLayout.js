import { Link, routes } from '@redwoodjs/router'

const NavigationLayout = ({ children }) => {
  return <>
    <nav>
      <ul>
        <li>
          <p>purab_patel</p>
        </li>
        <li>
          <Link to={routes.home()} className='link'>_hello</Link>
        </li>
      </ul>
    </nav>


    <main>
      {children}
    </main>
  </>
}

export default NavigationLayout

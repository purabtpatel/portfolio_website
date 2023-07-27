import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className='css-blurry-gradient-blue'></div>
      <div className='css-blurry-gradient-green'></div>
      <div className='homebasic'>
        <div classname='home-text-section'>
          <div className='head'>
            <span>Hi, I am</span>
            <h1>Purab Patel</h1>
            {/*add cmd svg here instead of greater than sign*/}
            <h2 className='gradient-blue'>&gt; Fullstack Developer</h2>
          </div>
          <div className='home-info'>

          </div>
        </div>


      </div>
    </>
  )
}

export default HomePage

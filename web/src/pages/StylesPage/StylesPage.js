import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StylesPage = () => {
  return (
    <>
      <div >

        <h1>This is 1st level heading</h1>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h2>This is 2nd level heading</h2>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>This is 3rd level heading</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h4>This is 4th level heading</h4>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h5>This is 5th level heading</h5>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h6>This is 6th level heading</h6>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <h2>Basic block level elements</h2>

        <p>This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of <strong>user style sheets</strong>. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements.</p>

        <p>This is another paragraph. <mark>I think it needs to be added that the set of elements tested is not exhaustive in any sense.</mark> I have selected those elements for which it can make sense to write user style sheet rules, in my opinion.</p>

        <div>This is a <code>div</code> element. Authors may use such elements instead of paragraph markup for various reasons. (End of <code>div</code>.)</div>

        <blockquote>
          <p>This is a <i>block quotation</i> containing a single paragraph. Well, not quite, since this is not <em>really</em> quoted text, but I hope you understand the point. After all, this page does not use HTML markup very normally anyway.</p>
        </blockquote>

        <p>The following contains links to the Comm-244 home page</p>
      </div>
      <div className='spaced'>
        <button className='primary_button'>Button</button>
        <button className='default_button'>Button</button>
        <button className='ghost_button'>Button</button>
      </div>


    </>
  )
}

export default StylesPage

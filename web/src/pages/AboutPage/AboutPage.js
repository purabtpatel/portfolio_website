import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import React, { useState } from 'react';
import { render } from 'react-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AboutPage = () => {
  const [menu, setMenu] = useState('professional_info');
  const [visible, setVisible] = useState(["icon_active", "icon", "icon"]);
  const [active, setActive] = useState(true);



  const renderSubMenuTitle = () => {
    return (
      <>
        {active ?
          <FontAwesomeIcon icon={faCaretDown} size={"lg"} style={{ paddingRight: '10px' }} />
          :
          <FontAwesomeIcon icon={faCaretRight} size={"lg"} style={{ paddingRight: '10px' }} />
        }

        <div>{menu}</div>
      </>
    )
  }
  const renderSubMenu = () => {
    switch (menu) {
      case 'professional_info':
        return (
          active ?
            <>
              <div>
                menu item 1
              </div>
              <div>
                menu item 2
              </div>
              <div>
                menu item 3
              </div>
            </>
            :
            <></>
        )
      case 'personal_info':
        return (
          active ?
            <>
              <div>
                menu item 4
              </div>
              <div>
                menu item 5
              </div>
              <div>
                menu item 6
              </div>
            </>
            :
            <></>
        )
      case 'hobbies_info':
        return (
          active ?
            <>
              <div>
                menu item 7
              </div>
              <div>
                menu item 8
              </div>
              <div>
                menu item 9
              </div>
            </>
            :
            <></>
        )
      default:
        return (
          <>
          </>
        )
    }
  }






  return (
    <>
      <MetaTags title="About" description="About page" />
      <div className='about-page'>

        <div className='about-page_main_menu'>
          <div className='about-page_info_menu'>
            {/* Make the whole horizontal area clickable, refactor this code */}
            <svg id={visible.at(0)}
              className="logo_link" onClick={() => {
                setMenu('professional_info');
                setVisible(["icon_active", "icon", "icon"]);
              }}
              xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" >
              <path className='logo_link' d="M3 3.65186H21C21.2652 3.65186 21.5196 3.75721 21.7071 3.94475C21.8946 4.13228 22 4.38664 22 4.65186V20.6519C22 20.9171 21.8946 21.1714 21.7071 21.359C21.5196 21.5465 21.2652 21.6519 21 21.6519H3C2.73478 21.6519 2.48043 21.5465 2.29289 21.359C2.10536 21.1714 2 20.9171 2 20.6519V4.65186C2 4.38664 2.10536 4.13228 2.29289 3.94475C2.48043 3.75721 2.73478 3.65186 3 3.65186ZM12 15.6519V17.6519H18V15.6519H12ZM8.414 12.6519L5.586 15.4799L7 16.8949L11.243 12.6519L7 8.40886L5.586 9.82386L8.414 12.6519Z" />
            </svg>
            <svg id={visible.at(1)} className={visible[1]} onClick={() => {
              setMenu('personal_info');
              setVisible(["icon", "icon_active", "icon"]);
            }}
              xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 448 512" >{/*<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}
              <path className='logo_link' d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <svg id={visible.at(2)} className={visible[2]} onClick={() => {
              setMenu('hobbies_info');
              setVisible(["icon", "icon", "icon_active"]);
            }} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" >
              <path className='logo_link' d="M17 4.87793C18.5913 4.87793 20.1174 5.51007 21.2426 6.63529C22.3679 7.76051 23 9.28663 23 10.8779V14.8779C23 16.4692 22.3679 17.9954 21.2426 19.1206C20.1174 20.2458 18.5913 20.8779 17 20.8779H7C5.4087 20.8779 3.88258 20.2458 2.75736 19.1206C1.63214 17.9954 1 16.4692 1 14.8779V10.8779C1 9.28663 1.63214 7.76051 2.75736 6.63529C3.88258 5.51007 5.4087 4.87793 7 4.87793H17ZM10 9.87793H8V11.8779H6V13.8779H7.999L8 15.8779H10L9.999 13.8779H12V11.8779H10V9.87793ZM18 13.8779H16V15.8779H18V13.8779ZM16 9.87793H14V11.8779H16V9.87793Z" />
            </svg>
          </div>

          <div className='about-page_info_submenu'>
            <div className='submenu-info' onClick={() => { setActive(!active) }}>
              {renderSubMenuTitle()}

            </div>
            <div className='submenu-info-items'>
              {renderSubMenu()}
            </div>


            <div className='submenu-contact'>
              <FontAwesomeIcon icon={faCaretDown} size={"lg"} style={{ paddingRight: '10px' }} />
              <div>contacts</div>
            </div>
            <div className='submenu-contact-items'>
              <div>
                <FontAwesomeIcon icon={faEnvelope} /> purabtpatel@gmail.com
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} /> {'+1(732)692-3419'}
              </div>
            </div>
          </div>
        </div>

        <div className='about-page_info_content'>

        </div>

        <div className='about-page_code_content'>
        </div>

      </div>


    </>
  )
}

export default AboutPage

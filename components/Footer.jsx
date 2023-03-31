import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className='clearfix'>
      <div className='widgets_wrapper'>
        <div className='container'>
          <div className='column one-fourth'>
            <aside className='widget_text widget widget_custom_html'>
              <div className='textwidget custom-html-widget'>
                <div className='image_frame image_item no_link scale-with-grid no_border' style={{marginBottom:"30px"}}></div>
                <a href="https://www.facebook.com/calibreply/" target='blank' style={{fontSize:"26px", marginLeft:'20px'}}>
                  <i>
                   <FaFacebookF/> 
                  </i>
                </a>
                <a href="https://twitter.com/calibreplywood" target='blank'  style={{fontSize:"26px" , marginLeft:'20px'}}>
                  <i>
                   <FaTwitter/> 
                  </i>
                </a>
                <a href="https://in.pinterest.com/calibreply/" target='blank'  style={{fontSize:"26px" , marginLeft:'20px'}}>
                  <i>
                   <FaPinterestP/> 
                  </i>
                </a>
                <a href="https://www.linkedin.com/in/harish-venkatesh-01a98a1a3/" target='blank'  style={{fontSize:"26px" , marginLeft:'20px'}}>
                  <i>
                   <FaLinkedinIn/> 
                  </i>
                </a>
                <a href="https://instagram.com/calibreply?igshid=YmMyMTA2M2Y=" target='blank'  style={{fontSize:"26px" , marginLeft:'20px'}}>
                  <i>
                   <FaInstagram/> 
                  </i>
                </a>
              </div>
            </aside>
          </div>
          <div className='row new-container'>
              <div className='col-md-3'>
                <Image height='200' width='200' alt='' src='https://www.calibreply.com/img/footer_logo.cbb15836.jpeg'/>
              </div>
              <div className='col-md-3'>
                <aside className='widget_text widget widget_custom_html'>
                  <div className='textwidget custom-html-widget'>
                      <ul>
                        <li>
                          <Link href='/' className='router-link-exact-active router-link-active'>
                              <Image height='50' width='20' alt='' src='https://www.calibreply.com/img/arrow.c2cdd093.png'/>
                              <b>Home</b>
                          </Link>
                        </li>
                        <li>
                          <Link href='/about' className='router-link-exact-active router-link-active'>
                              <Image height='50' width='20' alt='' src='https://www.calibreply.com/img/arrow.c2cdd093.png'/>
                              <b>About Us</b>
                          </Link>
                        </li>
                        <li>
                          <Link href='/tools' className='router-link-exact-active router-link-active'>
                              <Image height='50' width='20' alt='' src='https://www.calibreply.com/img/arrow.c2cdd093.png'/>
                              <b>Tools</b>
                          </Link>
                        </li>
                        <li>
                          <Link href='/gallery' className='router-link-exact-active router-link-active'>
                              <Image height='50' width='20' alt='' src='https://www.calibreply.com/img/arrow.c2cdd093.png'/>
                              <b>Gallery</b>
                          </Link>
                        </li>
                      </ul>
                  </div>
                </aside>
              </div>
              <div className='col-md-3'>
                <aside className='widget_text widget widget_custom_html'>
                  <div className='textwidget custom-html-widget'>
                      <ul>
                        <li>
                          <Link href='/testimonials' className='router-link-exact-active router-link-active'>
                              <Image height='50' width='20' alt='' src='https://www.calibreply.com/img/arrow.c2cdd093.png'/>
                              <b>Testimonials</b>
                          </Link>
                        </li>
                        <li>
                          <Link href='https://blog.calibreply.com/' className='router-link-exact-active router-link-active'>
                              <Image height='50' width='20' alt='' src='https://www.calibreply.com/img/arrow.c2cdd093.png'/>
                              <b>Blog</b>
                          </Link>
                        </li>
                        <li>
                          <Link href='/contact' className='router-link-exact-active router-link-active'>
                              <Image height='50' width='20' alt='' src='https://www.calibreply.com/img/arrow.c2cdd093.png'/>
                              <b>Contact Us</b>
                          </Link>
                        </li>
                        <li>
                          <Link href='/privacy' className='router-link-exact-active router-link-active'>
                              <Image height='50' width='20' alt='' src='https://www.calibreply.com/img/arrow.c2cdd093.png'/>
                              <b>privacy policy</b>
                          </Link>
                        </li>
                      </ul>
                  </div>
                </aside>
              </div>

              <div className='col-md-3'>
                <Image height='100' alt='' width='500' src='https://www.calibreply.com/img/tab-cc.ce5fef60.png'/>
              </div>

          </div>
        </div>
      </div>

      <div className='footer_copy'>
        <div className='container'>
          <div className='column one1' style={{marginBottom: "10px"}}>
            <div className='copyright'>
            © 2023 Calibreply
            <Link target='_blank' rel='nofollow' href='https://www.5ines.com/'> 5inewebsolutions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
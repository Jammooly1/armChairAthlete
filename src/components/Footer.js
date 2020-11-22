import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    {/* <section>
      <h2>Armchair Athletes</h2> 
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section> */}
    <section>
      <h2>Contact Information</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Texas &bull; USA</dd>
        {/* <dt>Phone</dt>
        <dd>(000) 000-0000 x 0000</dd> */}
        <dt>Email</dt>
        <dd>
          <a href="mailto:contact@acathletes.com" target="_blank">contact@acathletes.com</a>
        </dd>
      </dl>
      <ul className="icons">
        {/* <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li> */}
        <li>
          <a href="https://www.instagram.com/armchair.athletes/" target="_blank" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UChddFEdBmxD3OlC3fthjkzg" target="_blank"
            className="icon icon fa fa-youtube-play alt"
          >
            <span className="label">Youtube</span>
          </a>
        </li>
        {/* <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li> */}
      </ul>
    </section>
    {/* <p className="copyright">
       &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>. 
    </p> */}
  </footer>
)

export default Footer

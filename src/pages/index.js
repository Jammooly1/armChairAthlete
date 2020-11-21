import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import aaron from '../assets/images/aaron5.png'
import jamal from '../assets/images/JamalDabas.jpg'
import bball from '../assets/images/bball.png'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Arm Chair Athletes" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who are we? What do we do?</h2>
                </header>
                <p>
                  We are three good friends that want to share our love of basketball and strong opinions of it to one another and to an audience.
                </p>
                <p>
                  We will upload audio/video podcasts weekly discussing current events and popular topics in 
                  todays basketball.
                </p>
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul> */}
              </div>
              <span className="image">
                <img src={bball} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Members</h2>
            </header>
            <ul className="features">
              <li>
                <span>
                  <img src={aaron} alt="" /> 
                  </span>
                <h3>Aaron Rodriguez</h3>
                <p>
                  Creative graphic designer with much innovation. Favorite team is the Dallas Mavericks.
                </p>
              </li>
              <li>
                {/* <span className="icon major style3 fa-copy"></span> */}
                <span>
                  <img src={jamal} alt="" />  
                  </span>
                <h3>Jamal Dabas</h3>
                <p>
                  Software engineer that created this website. Favorite team is the San Antonio Spurs.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Sasank Inagandla</h3>
                <p>  
                  Bitcoin enthusiast and laid back college student. Favorite team is the Los Angeles Clippers.
                </p>
              </li>
            </ul>
            {/* <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Social Media</h2>
              <p>
                Keep up with us by following us on all of our social media
                <br />
                {/* posuere. Nulla massa urna, fermentum eget quam aliquet. */}
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa fa-youtube-play"></span>
                <strong>Youtube</strong> 
              </li>
              
              <li className="style2">
              <Link to="https://www.instagram.com/armchair.athletes/" target="_blank">
                  <span className="icon fa-instagram"></span>
                   </Link>
                <Link to="https://www.instagram.com/armchair.athletes/" target="_blank">
                  <strong>Instagram</strong> 
                </Link>
              </li>
              
              {/* <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus 
              </li> */}
              <li className="style4">
                <span className="icon fa fa-facebook-square"></span>
                <strong>Facebook</strong> 
              </li>
              <li className="style5">
                <span className="icon fa fa-twitter"></span>
                <strong>Twitter</strong> 
              </li>
            </ul>
            {/* <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p> */}
            {/* <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Blog</h2>
              <p>
                Coming soon!
                <br />
                {/* posuere. Nulla massa urna, fermentum eget quam aliquet. */}
              </p>
            </header>
            {/* <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

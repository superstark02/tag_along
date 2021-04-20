import React, { Component } from 'react'
import './App.css';
import w2 from "./Images/w2.png"
import w3 from "./Images/w3.png"
import w4 from "./Images/w4.png"
import w5 from "./Images/w5.png"
import logo from "./Images/logota.png"
import Idea from '../idea';
import Advantages from './advantages';
import Agencies from './agencies';
import Footer from './footer';
import Tiles from '../tiles';

export class Desktop extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="image" >
            <img src={w5} alt="a" width="100%" className="bg" />
          </div>
          <div className="main-title content wrap" >
            <div>
              <div className="wrap" >
                <img src={logo} alt="logo" />
              </div>
              <div>
                tag along.
            </div>
              <div className="sub-main-title wrap" >
                A world to see
            </div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:"#f8f8f8", marginTop:"-10px"}} >
          <div className="wrap" >
            <Idea />
          </div>
        </div>

        <div className="wrap" >
          <div style={{width:"80%"}} >
            <Tiles/>
          </div>
        </div>

        <div style={{ position: "relative" }} >
          <div>
            <img src={w3} alt="a" width="100%" />
          </div>
          <div className="content2 wrap" >
            <Advantages />
          </div>
        </div>

        <div style={{ position: "relative" }} >
          <div>
            <img src={w2} alt="a" width="100%" />
          </div>
          <div className="content3 wrap" >
            <Agencies />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Desktop

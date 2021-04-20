import React, { Component } from 'react'

export class Agencies extends Component {
    render() {
        return (
            <div style={{ color: "white", textAlign: "center" }} >
                <div className="wrap" >
                    <h1>
                        Same rates just as on<br /> Myntra.com or Yatra.com
                    </h1>
                </div>
                <p>
                    Inform us about your trip and plans to travel with people like you
                </p>
                <div>
                    <a href="https://wa.me/919319977851?text=Hi!%20" >
                        <button className="ctc-btn" >
                            <div>
                                <img src="https://img.icons8.com/wired/64/000000/whatsapp.png" />
                            </div>
                            <div>
                                Contact Us
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Agencies

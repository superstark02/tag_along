import React, { Component } from 'react'
import w2 from "./Images/wm1.png"
import w3 from "./Images/wm2.png"
import w4 from "./Images/wm3.png"
import w5 from "./Images/wm4.png"
import logo from "./Images/logota.png"
import Footer from './footer';
import Agencies from './agencies'
import AnimatedText from './animatedText'
import Tiles from './tiles'
import MTiles from './mTiles'

const images = [
    "https://ui-assets-gc.thrillophilia.com/assets/homepage/escapes/escapes-3@1x-485ea4a3443af57a52ac7a4c1731562fbfebf2a438ed65c13681cbfa1886ac27.jpg",
    "https://ui-assets-gc.thrillophilia.com/assets/homepage/escapes/escapes-2@1x-c260a2639d93f40ab2088a8fc48140cb23ed403ec23ec2d4b294b094dbd851b9.jpg",
    "https://ui-assets-gc.thrillophilia.com/assets/homepage/escapes/escapes-1@1x-d50370acdf235255a5855efd059e90fcc5114dba1b97964461f5b26a9f3f1afb.jpg"
]

export class Mobile extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <div className="image" >
                            <img src={w2} alt="a" width="100%" className="bg" />
                        </div>
                        <div className="main-title content wrap" >
                            <div>
                                <div className="wrap" >
                                    <img src={logo} alt="logo" />
                                </div>
                                <div style={{ textAlign: "center" }} >
                                    tag along.
                                </div>
                                <div className="sub-main-title wrap" >
                                    A world to see
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div style={{ width: "90%", textAlign:"center" }} >
                            <div>
                                <h1>
                                    It's Time For New
                                </h1>
                                <div>
                                    <hr color="#ffc94b" style={{ height: "5px", width: "20%" }} ></hr>
                                </div>
                                <div className="wrap" >
                                    <AnimatedText />
                                </div>
                            </div>
                            <div style={{ display: "flex", overflowX:"scroll", width:"auto" }} >
                                {
                                    images.map(item => {
                                        return (
                                            <img src={item} style={{ borderRadius: "10px", margin:"10px" }} width="150%" />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div style={{ position: "relative" }} >
                        <div className="image" >
                            <img src={w3} alt="a" width="100%" className="bg" />
                        </div>
                    </div>

                    <div style={{ backgroundColor: "#3fd0d3", padding: "20px", marginTop: "-10px" }} >
                        <div className="wrap" >
                            <h1>
                                Idea
                            </h1>
                        </div>

                        <div style={{ fontSize: '18px', textAlign: "center" }} >
                            Find people travelling to same destination <br />
                            Share the cost with them
                        </div>

                        <div style={{ padding: "20px", textAlign: 'center' }} >
                            <div className="wrap" style={{ margin: "10px 0px" }} >
                                <img src="https://img.icons8.com/wired/64/000000/information.png" />
                            </div>
                            <div>
                                <h2>
                                    Inform Us
                                </h2>
                            </div>
                            <div className="small-text" >
                                Inform us about your trip. <br /> Like where you plan to go, <br /> for how long and dates
                            </div>
                        </div>

                        <div style={{ padding: "20px", textAlign: "center" }} >
                            <div className="wrap" style={{ margin: "10px 0px" }} >
                                <img src="https://img.icons8.com/wired/64/000000/connected-people.png" />
                            </div>
                            <div>
                                <h2>
                                    Form Group
                                </h2>
                            </div>
                            <div className="small-text" >
                                We will find the similar kind <br /> of the people for you.<br /> Form a group, and plan a trip
                            </div>
                        </div>

                        <div style={{ padding: "20px", textAlign: "center" }} >
                            <div className="wrap" style={{ margin: "10px 0px" }} >
                                <img src="https://img.icons8.com/wired/64/000000/strategy-board.png" />
                            </div>
                            <div>
                                <h2>
                                    Plan Trip
                                </h2>
                            </div>
                            <div className="small-text" >
                                Decide, verify<br /> and pay
                            </div>
                        </div>

                        <div style={{ padding: "20px", textAlign: "center" }} >
                            <div className="wrap" style={{ margin: "10px 0px" }} >
                                <img src="https://img.icons8.com/wired/64/000000/passenger-with-baggage.png" />
                            </div>
                            <div>
                                <h2>
                                    Travel
                                </h2>
                            </div>
                            <div className="small-text" >
                                Off you go to complete your<br /> bucketlist. Make new memories <br /> while spending less.
                            </div>
                        </div>
                    </div>

                    <MTiles/>

                    <div style={{ position: "relative" }} >
                        <div className="image" >
                            <img src={w4} alt="a" width="100%" className="bg" />
                        </div>
                    </div>

                    <div style={{ backgroundColor: "#f8f8f8", marginTop: "-10px" }} >
                        <div style={{ padding: "20px", textAlign: "center" }} >
                            <div className="wrap" style={{ margin: "10px 0px" }} >
                                <img src="https://img.icons8.com/wired/64/000000/money-box.png" />
                            </div>
                            <div>
                                <h2>
                                    Saves Money
                                </h2>
                            </div>
                            <div className="small-text" >
                                Expenses are divided,<br /> on tranport, food,<br /> hotels, bus tickets
                            </div>
                        </div>

                        <div style={{ padding: "20px", textAlign: "center" }} >
                            <div className="wrap" style={{ margin: "10px 0px" }} >
                                <img src="https://img.icons8.com/wired/64/000000/welfare.png" />
                            </div>
                            <div>
                                <h2>
                                    Safety Ensured
                                </h2>
                            </div>
                            <div className="small-text" >
                                One can be a victim of<br /> difficulties which<br /> a group can take care of
                            </div>
                        </div>

                        <div style={{ padding: "20px", textAlign: "center" }} >
                            <div className="wrap" style={{ margin: "10px 0px" }} >
                                <img src="https://img.icons8.com/wired/64/000000/meeting.png" />
                            </div>
                            <div>
                                <h2>
                                    More Fun
                                </h2>
                            </div>
                            <div className="small-text" >
                                It's a great way to meet new<br /> people you would not <br />meet in your daily life
                            </div>
                        </div>

                        <div style={{ padding: "20px", textAlign: "center", paddingBottom: "30px" }} >
                            <div className="wrap" style={{ margin: "10px 0px" }} >
                                <img src="https://img.icons8.com/wired/64/000000/hang-10.png" />
                            </div>
                            <div>
                                <h2>
                                    Party Travel
                                </h2>
                            </div>
                            <div className="small-text" >
                                Off you go to complete your<br /> bucketlist. Make new memories <br /> while spending less.
                            </div>
                        </div>

                    </div>

                    <div style={{ position: "relative" }} >
                        <div className="image" >
                            <img src={w5} alt="a" width="100%" className="bg" />
                        </div>
                        <div className="content wrap" >
                            <Agencies />
                        </div>
                    </div>

                    <Footer />
                </div>
            </div >
        )
    }
}

export default Mobile

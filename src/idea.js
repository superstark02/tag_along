import React, { Component } from 'react'
import AnimatedText from './animatedText'

const images = [
    "https://ui-assets-gc.thrillophilia.com/assets/homepage/escapes/escapes-3@1x-485ea4a3443af57a52ac7a4c1731562fbfebf2a438ed65c13681cbfa1886ac27.jpg",
    "https://ui-assets-gc.thrillophilia.com/assets/homepage/escapes/escapes-2@1x-c260a2639d93f40ab2088a8fc48140cb23ed403ec23ec2d4b294b094dbd851b9.jpg",
    "https://ui-assets-gc.thrillophilia.com/assets/homepage/escapes/escapes-1@1x-d50370acdf235255a5855efd059e90fcc5114dba1b97964461f5b26a9f3f1afb.jpg"
]

export class Idea extends Component {
    render() {
        return (
            <div style={{margin:"100px 0px"}} >
                <div className="wrap" >
                    <div style={{ width: "90%", display:"flex", justifyContent:"space-between" }} >
                        <div>
                            <h1>
                                It's Time For New
                            </h1>
                            <div style={{ display: "flex", justifyContent: "flex-start", width: "20%" }} >
                                <hr color="#ffc94b" style={{ height: "5px", width: "100%" }} ></hr>
                            </div>
                            <AnimatedText />
                        </div>
                        <div style={{display:"flex", justifyContent:"space-evenly"}} >
                            {
                                images.map(item=>{
                                    return(
                                        <div>
                                            <img src={item} style={{borderRadius:"10px"}} width="90%" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="wrap" style={{marginTop:"60px"}} >
                    <h1>
                        Idea
                    </h1>
                </div>
                <div style={{ fontSize: '18px', textAlign: "center" }} >
                    Find people travelling to same destination <br />
                    Share the cost with them
                </div>
                <div className="wrap idea" >
                    <div style={{ padding: "20px" }} >
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
                    <div style={{ padding: "20px" }} >
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
                    <div style={{ padding: "20px" }} >
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
                    <div style={{ padding: "20px" }} >
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
            </div>
        )
    }
}

export default Idea

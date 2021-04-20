import React, { Component } from 'react'

export class MTiles extends Component {
    render() {
        return (
            <div style={{ margin: "100px 0px" }} >
                <div style={{ width: "100%", position: "relative" }} className="wrap" >
                    <div>
                        <div className="big-image" >
                        </div>
                        <div style={{ height: "95vw", color: "white", backgroundColor: "rgba(0,0,0,0.5)", width: "95vw", borderRadius: "30px" }} >
                            <div style={{ marginLeft: "30px" }} >
                                <h1 style={{ margin: "3px" }} >
                                    UPTO
                                </h1>
                                <div style={{ fontSize: "100px", color: "#ffc94b" }} >
                                    70%
                            </div>
                                <h1>
                                    OFF ON GROUP TRAVELS
                            </h1>
                                <button className="ctc-btn" style={{ backgroundColor: "#ffc94b" }} >
                                    <div>
                                        Book Now
                                </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrap" >
                    <div>
                        <div className="wrap mumbai" >
                            MUMBAI
                        </div>
                        <div className="wrap banglore" >
                            BANGLORE
                        </div>
                        <div className="wrap goa" >
                            GOA
                        </div>
                    </div>
                    <div>
                        <div className="wrap kerela" >
                            KERELA
                        </div>
                        <div className="wrap nanital" >
                            NANITAL
                        </div>
                        <div className="wrap shimla" >
                            SHIMLA
                        </div>
                    </div>
                    <div>
                        <div className="wrap ladak" >
                            LADAK
                        </div>
                        <div className="wrap orrisa" >
                            ORRISA
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MTiles

import React, { Component } from 'react'

const image1 = "https://wordsporn.com/wp-content/uploads/2019/12/beach-quote.jpg"

export class Tiles extends Component {
    render() {
        return (
            <div className="wrap" style={{margin:"100px 0px"}} >
                <div style={{ width: "50%", position: "relative" }} >
                    <div className="big-image" >
                    </div>
                    <div style={{ height: "80vh", color: "white", backgroundColor: "rgba(0,0,0,0.5)", width: "80vh", borderRadius: "30px", display: "flex", alignItems: "center" }} >
                        <div style={{ marginLeft: "30px" }} >
                            <h1>
                                UPTO
                            </h1>
                            <div style={{ fontSize: "200px", color: "#ffc94b" }} >
                                70%
                            </div>
                            <h1>
                                OFF ON GROUP TRAVELS
                            </h1>
                            <button className="ctc-btn" style={{backgroundColor:"#ffc94b"}} >
                                <div>
                                    Book Now
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
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
        )
    }
}

export default Tiles

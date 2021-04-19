import React, { Component } from 'react'

export class Advantages extends Component {
    render() {
        return (
            <div>
                <div className="wrap" >
                    <h1 style={{textAlign:"center"}} >
                        Why Travel With A <br/>
                        Group Of Strangers?
                    </h1>
                </div>
                <div className="wrap idea" >
                    <div style={{ padding: "20px" }} >
                        <div className="wrap" style={{ margin: "10px 0px" }} >
                            <img src="https://img.icons8.com/wired/64/000000/money-box.png"/>
                        </div>
                        <div>
                            <h2>
                                Saves Money
                            </h2>
                        </div>
                        <div className="small-text" >
                            Expenses are divided,<br/> on tranport, food,<br/> hotels, bus tickets 
                        </div>
                    </div>
                    <div style={{ padding: "20px" }} >
                        <div className="wrap" style={{ margin: "10px 0px" }} >
                            <img src="https://img.icons8.com/wired/64/000000/welfare.png"/>
                        </div>
                        <div>
                            <h2>
                                Safety Ensured
                            </h2>
                        </div>
                        <div className="small-text" >
                            One can be a victim of<br/> difficulties which<br/> a group can take care of
                        </div>
                    </div>
                    <div style={{ padding: "20px" }} >
                        <div className="wrap" style={{ margin: "10px 0px" }} >
                            <img src="https://img.icons8.com/wired/64/000000/meeting.png"/>
                        </div>
                        <div>
                            <h2>
                                More Fun
                            </h2>
                        </div>
                        <div className="small-text" >
                            It's a great way to meet new<br/> people you would not <br/>meet in your daily life
                        </div>
                    </div>
                    <div style={{ padding: "20px" }} >
                        <div className="wrap" style={{ margin: "10px 0px" }} >
                            <img src="https://img.icons8.com/wired/64/000000/hang-10.png"/>
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
            </div>
        )
    }
}

export default Advantages

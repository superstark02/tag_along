import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="wrap" style={{ margin: "50px 0px" }} >
                <div style={{ width: "70%" }} >
                    <div className="main-title" style={{ fontSize: "40px" }} >
                        tag along.
                    </div>
                    <div className="sub-main-title" style={{ fontStyle: "12px" }} >
                        A world to see
                    </div>
                    <p>
                        “Oh, I so wish my trip could be more expensive,”<br />
                        said no-one, ever. Here’s the simple fact of the matter – <br />
                        group travel tours are more affordable because of a little economic <br />
                        principle called ‘buying power’.
                    </p>
                    <p>
                        Travio © 2021 All Right Reserved
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer

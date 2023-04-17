import React, { Component } from "react";


class Header extends Component {
    render() {
        return(
            <div className='border border-bottom-20'>
                <span className="text-success fw-bold">Company</span> <br/>
                <span className="text-warning fw-bold m">Logo</span>
            </div>
        );
    }
    
}

export default Header;
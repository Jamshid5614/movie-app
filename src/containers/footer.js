import React, { Component } from 'react';



class Footer extends Component {
    constructor (props) {
        super(props);
    }



    render () {
        return (
            <div className="footer w-100 py-3 d-flex justify-content-center align-items-center " style={{backgroundColor: 'black',borderTop: '1px solid darkred'}}>
                <p className="m-0 text-white">Made with ♥ by <a href="https://t.me/contact_link_with_jamshid" target="_blank" className="text-light" >Jamshid Hasanov</a></p>
            </div>
        )
    }

}



export default Footer;














































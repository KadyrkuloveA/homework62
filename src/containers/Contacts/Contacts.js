import React, {Component} from 'react';
import './Contacts.css';

class Contacts extends Component {
    render() {
        return (
            <div className="showcase">
                <div className="container">
                    <h2>Fill in information about yourself</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        typesetting</p>
                    <form>
                        <div className="forms">
                            <label className="form-style form-1"><input type="text" className="field"
                                                                        placeholder="Full Name" required/></label>
                            <label className="form-style form-2"><input type="email" className="field"
                                                                        placeholder="Email Address" required/></label>
                            <label className="form-style form-3"><input type="number" className="field"
                                                                        placeholder="Phone Number"/></label>
                            <button className="button">Request a quote</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contacts;
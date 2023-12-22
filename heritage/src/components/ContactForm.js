import React from 'react'
import './css/contact.css'
const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Sending...')
        const { name, email, phnNumber, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            phnNumber: phnNumber.value,
            message: message.value,
        }
        console.log(conFom)
    }
    const titleStyle = {
        marginTop: '5rem',
        display: 'flex',
        justifyContent: 'center',
    };
    const textAreaStyle = {
        width: '500px',
        height: '178px'
    };
    const btnStyle = {
        marginLeft: '30px'
    };
    return (
        <div className="container mt-5">
            <h2 className="mb-3" style={titleStyle}>Share your thoughts</h2>
            
            <form onSubmit={onSubmit}>
                {/* <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div> */}
                <div class="container contact-form">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" className="form-control" placeholder="Your Name *" id="name" required />
                            </div>
                            <div class="form-group">
                                <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className="form-control" placeholder="Your Email *" id="email" required />
                            </div>
                            <div class="form-group">
                                <input type="tel" pattern="[0-9]{3}[0-9]{4}[0-9]{3}" className="form-control" placeholder="Your Phone Number *" id="phnNumber" required />
                            </div>
                            <div class="form-group">
                                <button className="btn btn-danger" style={btnStyle} type="submit">
                                    {formStatus}
                                </button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <textarea name="txtMsg" class="form-control" placeholder="Your Message *" id="message" required style={textAreaStyle}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}
export default ContactForm
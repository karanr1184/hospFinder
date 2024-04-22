import "../assets/indexCSS.css";
function Footer(){
    return (
        <div style={{marginTop: 30}}>
          <div id="contact" >
            <div className="container my-5">
              <div className="row justify-content-between">
                <div className="col-md-6 text-white">
                  <h2 className="font-weight-bold">Contact Us</h2>
                  <p className="my-4">
                    Thank you for using hospFinder to find hospitals and medical facilities. We are committed to providing you with a valuable resource for locating healthcare services. 
                    <br />Your feedback and inquiries are important to us. Please feel free to reach out to us using the following methods:
                  </p>
                  <ul className="list-unstyled">
                    <li>Email : hospFinder@gmail.com</li>
                    <li>Phone : 9389388424</li>
                    <li>Address : Gandhinagar, Gujarat, India</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <form>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input type="name" className="form-control" id="name" name="name" />
                      </div>
                      <div className="form-group col-md-7">
                        <label htmlFor="Email">Your Email</label>
                        <input type="email" className="form-control" id="Email" name="email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" id="message" rows="3" name="message"></textarea>
                    </div>
                    <button type="submit" className="indexbtn">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Footer;
import React, { Component } from 'react';
import './index.css';
//import './mail.js';
//<div class="eight wide column">
//<form class="ui form">
  //<div class="field">
    //<label>First Name</label>
    //<input type="text" name="first-name" placeholder="First Name" />
  //</div>
  //<div class="field">
    //<label>Last Name</label>
    //<input type="text" name="last-name" placeholder="Last Name" />
  //</div>
  //<div class="field">
    //<div class="ui checkbox">
      //<input type="checkbox" tabindex="0" class="hidden" />
      //<label>I agree to the Terms and Conditions</label>
    //</div>
  //</div>
  //<button class="ui button" type="button">Submit</button>
//</form>
//</div>
class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div class="ui fluid container">
          <div class="row">
            
          <div className="box-container">
            <div class="ui centered stackable grid">
              <div class="six wide column">
                <img src={process.env.PUBLIC_URL + '/imagenes/jazmin.jpg'} alt="ux/ui" class="ui image" />
              </div>
              <div class="six wide column">
              <h2 className="hover_yellow">CONTACTO</h2>
                <h3 className="hover_pink">BRENDA JAZMÍN CASTRO</h3>
                <p><i aria-hidden="true" class="mail outline circular olive icon"></i><a href="mailto:jazmincastrog@icloud.com">jazmincastrog@icloud.com</a></p>
                <p><i aria-hidden="true" class="phone volume circular yellow icon"></i><a href="tel:+5215610889407">56 1088 9407</a></p>
                <p className="hover_violet"><i aria-hidden="true" class="graduation cap circular pink icon"></i>Professional ID:  1 1 5 7 6 1 3 8</p>
                <p><i aria-hidden="true" class="linkedin circular purple icon"></i><a href="https://www.linkedin.com/in/--jazmin--castro--/">https://www.linkedin.com/in/--jazmin--castro--/</a></p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

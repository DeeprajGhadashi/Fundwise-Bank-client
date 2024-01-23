
import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';


const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Navigate to ='/Dashboard'/> 
    }
return (
<section>
<section id="inner-headline">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <h2 className="pageTitle">Contact Us</h2>
         </div>
      </div>
   </div>
</section>
<section id="content">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div>
               <h2>Get In Touch</h2>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..
            </div>
            <br />
         </div>
      </div>
      <div className="row">
         <div className="col-md-5">
            <form name="sentMessage" id="contactForm">
               <h3>Contact me</h3>
               <div className="control-group">
                  <div className="controls">
                     <input type="text" className="form-control" 
                        placeholder="Full Name" id="name" required
                        data-validation-required-message="Please enter your name" />
                     <p className="help-block"></p>
                  </div>
               </div>
               <div className="control-group">
                  <div className="controls">
                     <input type="email" className="form-control" placeholder="Email" 
                        required
                        data-validation-required-message="Please enter your email" />
                  </div>
               </div>
               <div className="control-group">
                  <div className="controls">
                     <textarea rows="10" cols="100" className="form-control" 
                       placeholder="Message" id="message"></textarea>
                  </div>
               </div>
               <div id="success"> </div>
               <button type="submit" className="btn btn-primary pull-right">Send</button><br />
            </form>
         </div>
         <div className="col-md-offset-1 col-md-6">
            </div>
      </div>
   </div>
</section>
<a href="#" className="scrollup"><i className="fa fa-angle-up active"></i></a>
</section>
)
}
Landing.propTypes={
isAuthenticated:PropTypes.bool
}
const mapStateToProps =state=>
 ({
isAuthenticated:state.auth.isAuthenticated
 })

export default connect(mapStateToProps)(Landing);

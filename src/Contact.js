import React, {Component} from 'react'

class Contact extends Component{
  render(){
    return(
      <div id="main-div" >
      <div className="container-fluid">
        <div className="row">
          <div className = "col-md-12">
          <img src="images/woman.png" alt="woman"/>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row">
        <div className = "col-md-6">
        <h1>Support</h1>
        <p className="text-primary">support@yoursite.com</p>
          <h2>Press</h2>
          <p className="text-primary">press@yoursite.com</p>
          <h2>Shipping & Orders</h2>
          <p className="text-primary">orders@yoursite.com</p>
          <h2>Shop Info</h2>
      <p>Phasellus pretium lacinia efficitur. Cras arcu diam, commodo quis est id, lobortis semper felis
      .Sed vel arcu ligula. Maecenas pulvinar a ex non mollis. Integer hendrerit ante tortor,
       sit amet tristique leo blandit.
     Sed dictum laoreet augue, non mollis nisl tempus sed. Sed vitae felis eu sapien vulputate viverra. Sed pretium rutrum fermentum.
     Curabitur faucibus aliquam lacus eget gravida.</p>
   </div>
       <div className = "col-md-6">
       <form>
       <div className="form-group">
         <input type="text" className="form-control" id="fullnames" placeholder="fullnames" name="fullnames"/>
       </div>
      <div className="form-group">
        <input type="text" className="form-control" id="email" placeholder="Enter email" name="email"/>
      </div>
      <div className="form-group">
       <label htmlfor="message">Message</label>
      <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3"></textarea>
      </div>
        <button type="submit" className="btn btn-info">send Message</button>
      </form>
    </div>
   </div>
  </div>

  <div className="container mt-5">
    <div className="row">
      <div className = "col-md-12">
        <h1 className="text-center">Shop Locations</h1>
        </div>
    </div>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className = "col-md-4">
        <img src="images/miami.png" alt="miami"/>
        </div>
          <div className = "col-md-4">
        <img src="images/melbourne.png" alt="melbourne"/>
      </div>
       <div className = "col-md-4">
        <img src="images/london.png" alt="london"/>
      </div>
    </div>
</div>
      <div className="container-fluid">
        <div className="row">
          <div className = "col-md-12">
          <iframe src="https://www.google.com/maps/embed?pb=" className="pt-5" style={{border:0, height:450, width:1500}}></iframe>
      </div>
    </div>
  </div>
  <div className="container pt-4">
    <div className= "row">
      <div className="col-md-3">
      <p><i className="fa fa-opencart" style={{fontSize:20, color:"black"}}></i><span className="ml-1">inCart</span>
      </p>
       <p>Praesent sed congue ipsum. Nullam tempus ornare est, non aliquet velit tincidunt elementum
       . Nulla at risus ut felis eleifend.
       Nulla non lacinia. Integer est lacus</p>
      </div>
      <div className="col-md-3">
          <h1> Brands</h1>
          <p className="text-secondary">Marco REA3Days La BarcelonaLora Towers  Ginneys</p>
       </div>
        <div className="col-md-3">
         <h1> Support </h1>
         <p className="text-success">Privacy Policy Shipping & Return  Terms & Conditions   F.A.Q   Contact</p>
          </div>
          <div className="col-md-3">
             <h1> Get in Touch </h1>
              <p className="light"><i className="fa fa-cog" style={{fontSize:24, color:"yellow"}}></i>
              <span className="ml-2">Miami, S Miami Ave, SW 20th</span></p>
            <p><i class="fa fa-envelope" style={{fontSize:30,color:"red"}}></i><span className="ml-2">
              office@yoursite.com</span>
                </p>
                <p><i className="fa fa-phone"></i> +0123 456 789</p>
                <p><i className="fa fa-facebook-official"></i>
                <i className="fa fa-instagram ml-1"></i>
                <i className="fa fa-google-plus ml-1"></i>
                <i className="fa fa-linkedin-square ml-1"></i>
                </p>
            </div>
         </div>
     </div>
      <div className="container-fluid pt-5 bg-info">
       <div className="row">
        <div className="col-12">
        <p><i class="fa fa-copyright"></i>  2016 - inCart - Responsive Shop Theme.
        <span className="offset-6">
        <i className="fa fa-cc-visa ml-1 " style={{fontSize:24, color:"blue"}}></i>
        <i className="fa fa-cc-mastercard ml-1 " style={{fontSize:24, color:"red"}}></i>
        <i className="fa fa-cc-paypal ml-1 " style={{fontSize:24, color:"green"}}></i>
        <i className="fa fa-cc-discover ml-1 " style={{fontSize:24, color:"brown"}}></i>
        </span>
      </p>
        </div>
      </div>
    </div>




  </div>
    )
  }
}

export default Contact

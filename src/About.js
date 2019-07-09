import React, {Component} from 'react'

class About extends Component{
  render(){
    return(
      <div id="wrapper">
      <div className="container-fluid" style={{marginTop:10}} >
         <div className="row">
           <div className="col-md-12" >
           <img src="images/office.png" alt="office"/>
              </div>
            </div>
       </div>
             <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
           <h1 className="text-center p-5">About The Shop </h1>
        <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
       proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
       proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
         <div className="container-fluid">
         <div className="row">
         <div className="col-md-12">
       <h1 className="text-center ">About The Team </h1>
        <p className="text-center">Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
   </div>
  </div>
  <div className="container" style={{marginBottom:100}}>
     <div className="row">
       <div className="col-md-6">
        <img src="images/john-doe.jpg"  alt="man"  className="w-100 h-100 pb-5"/>
        <h1> John Doe -CEO</h1>
        <p >uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
      </div>
        <div className="col-md-5">
        <img src="images/jasmine.jpg " alt="woman" className="w-100 h-100 pb-5"/>
        <h1> Jasmine Doe -Designer</h1>
        <p className="pt-3">uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
      </div>
    </div>
  </div>
      <div className="container-fluid mt-5">
       <div className="row">
        <div className="col-md-12">
        <h1 className="text-center mt-5 pt-3">Tesmonial</h1>
        </div>
      </div>
    </div>
  <div className="container mt-5">
     <div className="row">
     <div className="col-md-4">
     <img src="images/james.jpg"  alt="man"  className="w-35 h-35 rounded-circle"/>
    <h3>Jame Doe</h3>
   <p>Quisque sit amet libero purus. Nulla a dignissim quam. In hac habitasse platea dictumst.</p>
   </div>
   <div className="col-md-4">
     <img src="images/missy.jpg " alt="woman" className="w-35 h-35   rounded-circle"/>
     <h3>Missy Doe</h3>
   <p>Quisque sit amet libero purus. Nulla a dignissim quam. In hac habitasse platea dictumst.</p>
      </div>
      <div className="col-md-4">
        <img src="images/johanna.jpg " alt="woman" className="w-35 h-35   rounded-circle"/>
        <h3>Johanna Doe</h3>
      <p>Quisque sit amet libero purus. Nulla a dignissim quam. In hac habitasse platea dictumst.</p>
      </div>
    </div>
  </div>
   <div style={{backgroundColor:"grey"}}>
  <div className="container-fluid mb-5">
   <div className="row">
    <div className="col-md-12">
    <h1 className="offset-5 pt-5">Brands</h1>
    </div>
  </div>
</div>
   <div className="container">
     <div className= "row">
       <div className="col-md-3 pb-5">
           <i className="fa fa-500px" style={{fontSize:80, color:"red"}}></i>
       </div>
       <div className="col-md-3 pb-5">
            <i className="fa fa-apple" style={{fontSize:80,color:"blue"}}></i>
         </div>
         <div className="col-md-3 pb-5">
            <i className="fa fa-android" style={{fontSize:80,color:"green"}}></i>
           </div>
           <div className="col-md-3 pb-5">
               <i className="fa fa-reddit" style={{fontSize:80,color:"pink"}}></i>
             </div>
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

export default About


import React, {Component} from 'react'

  class Home extends Component{
    render(){
      return(
      <div  id="wrapper">
        <div  className= "container-fluid">
          <div className="row">
            <div className="col-md-12 mt-5">
    <img src ="images/man.jpg" alt ="man" className="w-50 h-75"  />
    <img src ="images/bench.jpg" alt ="bench" className="w-50 h-75"  />
    <button className="btn btn-primary offset-md-5">Patronise Us Today</button>

        </div>
       </div>
      </div>
          <div  className= "container">
        <div className="row">
      <div className="col-md-12">
    <h1 className="text-center mb-5 "> Shop Categories</h1>
  <p className="text-center">Proin malesuada commodo magna, eu porta nulla luctus id.</p>
  <p className="text-center"> Integer bibendum dolor id mi dignissim pulvinar.
  Proin tincidunt elit in augue congue efficitur.</p>
        </div>
      </div>
    </div>
     <div  className= "container mt-3">
      <div className="row">
     <div className="col-md-4 ">
     <img src ="images/window.jpg" alt ="rack" className="img-fluid text-center" />
     <h3  style={{marginTop:"-30%",color:"orange"}}>FURNITURE</h3>
      </div>
      <div className="col-md-4">
      <img src ="images/bag.jpg" alt ="bag"  className="img-fluid text-center "/>
      <h3 style={{marginTop:"-30%", color:"red"}} > Accessories</h3>
     </div>
     <div className="col-md-4">
     <img src ="images/nordwood.jpg" alt ="shoes" className="img-fluid " />
     <h3 style={{marginTop:-30, color:"blue"}} className="text-center">FASHION</h3>
        </div>
          </div>
            </div>
            <div className="container mt-5">
             <div className="row">
              <div className="col-md-12">
               <h1 className= "text-center p-3">Featured Products</h1>
                  </div>
                </div>
             </div>

            <div className="container mt-5">
             <div className="row">
             <div className="col-md-4">
               <img src="images/watch.png" alt="watch" className="img-fluid"/>
             </div>
             <div className="col-md-4">
             <img src="images/gloves.png" alt="gloves" className="img-fluid"/>
            </div>
            <div className="col-md-4">
            <img src="images/leather.png" alt="vodka" className="img-fluid "/>
            </div>
          </div>
        </div>
        <div className="container mt-5">
         <div className="row">
         <div className="col-md-4">
           <img src="images/woman1.png" alt="vodka" className="img-fluid"/>
         </div>
         <div className="col-md-4">
         <img src="images/woman2.png" alt="liquor" className="img-fluid"/>
        </div>
        <div className="col-md-4">
        <img src="images/woman3.png" alt="vodka" className="img-fluid"/>
        </div>
      </div>
    </div>
       <div className="container mt-3">
         <div className="row">
         <div className="col-md-12 offset-4">
           <h1 className="pt-3">Subscribe for Newsletter</h1>
           <form>
           <div className="form-group">
           <input type="text" placeholder="your email address" className="form-control w-50"/>
           <button type="submit" className="btn btn-danger mt-2"><i class="fa fa-columns"></i>subscribe</button>
           </div>
           </form>
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

export default Home

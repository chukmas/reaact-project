import React, {Component} from 'react'


class Gallery extends Component{
  render(){
    return(
      <div className main-div>
      <div className="container-fluid">
       <div className="row">
        <div className="col-12">
        <img src="images/blog.png" alt="src"/>
        </div>
      </div>
    </div>
        <div className="container mt-5">
          <div className="row">
           <div className="col-8">
            <img src="images/market.png" alt="athlete"/>
            <h1>Image Post blog</h1>
        <p>Posted by <span className="text-info">Admin</span> in <span className="text-info">Blog</span> on <span className="text-info">Dec. 04, 2016</span></p>
          <p> Pellentesque pretium at justo iaculis vehicula
            Aenean vestibulum purus a nulla sollicitudin molestie.
            Maecenas bibendum erat in erat maximus, vel imperdiet leo mattis. Integer vitae pellentesque massa
          .Fusce ac suscipit neque. Etiam justo risus, tristique id feugiat a, venenatis sed justo. Mauris aliquam venenatis nulla, et tincidunt enim fermentum ut.
           Aliquam mattis molestie est id condimentum.</p>
           <button type="submit" className="btn btn-warning">readmore</button>

      </div>
          <div className="col-4">
          <img src="images/chukmas.jpg" alt="picture" className="rounded-circle h-30 w-30 ml-5"/>
          <h2 className="ml-5">About the Author </h2>
          <p className="ml-5">Aenean vestibulum purus a nulla sollicitudin molestie.
           Maecenas bibendum erat in erat maximus, vel imperdiet leo mattis bibendum erat in erat maximus.</p>
      </div>
    </div>
 </div>

 <div className="container mt-5">
   <div className="row">
      <div className="col-md-8">
       <img src="images/jernej.jpg" alt="model"/>
        <h1>Slider Blog Post</h1>
        <p>Posted by Admin in Fashion on Dec. 03, 2016</p>
        <p>Nam porta lectus nec magna ullamcorper egestas eget at ex. In sit amet dolor vitae felis
        condimentum rutrum eget ut neque. Curabitur sagittis quam sodales,
        consequat urna sit amet, porta mi. Mauris aliquam venenatis nulla,
        et tincidunt enim fermentum ut. Aliquam mattis molestie est id condimentum.</p>
        <button type="submit" className="btn btn-dark">ReadMore</button>
    </div>
        <div className="col-md-4">
    <img src="images/nike.png" alt="nike"/>
      <p>  Recent Post #1
       Posted on Dec. 04, 2016</p>
       <hr/>
    <img src="images/dezeen.png" alt="dezeen" />
    <p>Recent Post #2
     Posted on Dec. 03, 2016</p>
     <hr/>
     <img src="images/greenpeace.png" alt="peace" />
     <p>Recent Post #2
      Posted on Dec. 02, 2016</p>
      <hr/>
      <img src="images/the-guardian.png" alt="guardian" />
      <p>Recent Post #2
       Posted on Dec. 01, 2016</p>
       <h2 className="mb-3">Tags Cloud</h2>
       <button type="submit" className="btn btn-success ml-1">Blog</button>
       <button type="submit" className="btn btn-success ml-1">Fashion</button>
       <button type="submit" className="btn btn-success ml-1">furniture</button>
       <button type="submit" className="btn btn-success ml-1">Art</button>
   </div>
 </div>
</div>
      <div className="container">
        <div className="row">
        <div className="col-md-8 mt-4">
         <img src="images/vid-screen.png"/>
         <h1> Video Blog Spot</h1>
         <p>Posted by Admin in Fashion on Nov. 29, 2016</p>
         <p>Maecenas bibendum erat in erat maximus, vel imperdiet leo mattis. Integer vitae pellentesque massa.
         Fusce ac suscipit neque. Etiam justo risus, tristique id feugiat a, venenatis sed justo. Mauris aliquam venenatis nulla,
          et tincidunt enim fermentum ut. Aliquam mattis molestie est id condimentum. </p>
          <button type="submit" className="btn btn-dark ml-1 mb-4">ReadMore</button><br/>
          <button type="submit" className="btn btn-success ml-1">1</button>
          <button type="submit" className="btn btn-success ml-1">2</button>
          <button type="submit" className="btn btn-success ml-1">3</button>
          <button type="submit" className="btn btn-success ml-1">4</button>
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

export default Gallery

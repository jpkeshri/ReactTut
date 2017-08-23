import React from 'react'

export default class carausel extends react.component(){
       
       render(){
             return(
                    <div>
<div className="container-fluid">
    <h3  className="text-success" style="text-align:center"> Carousel program</h3>
<div  id="myCarousel" className="carousel slide"  data-ride="carousel">
<ol class="carousel-indicators">
<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
<li data-target="#myCar0usell" data-slide-to="1"></li>
<li data-target="#myCarousel" data-slide-to="2"></li>
<li data-target="#myCarousel" data-slide-to="3"></li>
<li data-target="myCarousel" data-slide-to="4"></li>
<li data-target="mycarousel" data-slide-to="5"></li>
    <li data-target="mycarousel" data-slide-to="5"></li>
    <li data-target="mycarousel" data-slide-to="5"></li>

</ol>
<div className="carousel-inner">
<div classname="item active">
<img className="responsive" src="..public/smurfs_2017.jpg" alt="image/smurfs_2017.jpg" style="width:100%;height:600px" />
<div className="carousel-caption">
    <h4>natural pic</h4>
 </div>
    </div>
    
<div className="item">
<img  className="responsive" src="..public/small_river_near_house.jpg"  alt="..public/small_river_near_house.jpg"  style="width:100%;height:600px" / >
<div className="carousel-caption">
<h4>natural pic</h4>
>>    </div>
    </div>

<div className="item">
<img className="responsive" src="..public/luxurious_villa_on_the_beach-852x480.jpg" alt="image/luxurious_villa_on_the_beach-852x480.jpg"  style="width:100%;height:600px" />
<div className="carousel-caption">
    <h4>natural pic</h4>
</div>
</div>
<div className="item">
<img className="responsive" src="..public/house_on_the_green_field.jpg" alt="image/house_on_the_green_field.jpg"  style="width:100%;height:600px" / >
<div className="carousel-caption">
<h4>natural pic</h4>
</div>
</div>
<div className="item">
<img  className="responsive" src="..public/forest_lake_2.jpg" alt="image/forest_lake_2.jpg"  style="width:100%;height:600px" />
<div className="carousel-caption">
    <h4>natural pic</h4>
</div>
</div>
<div className="item">
<img className="responsive" src="..public/girl_on_the_beach.jpg" alt="image/girl_on_the_beach.jpg"  style="width:100%;height:600px" />
<div className="carousel-caption">
<h4>natural pic</h4>
</div>
</div>
   <div className="item">
<img className="responsive" src="..public/boats_painted_x.jpg" alt="image/boats_painted_x.jpg"  style="width:100%;height:600px" / >
<div className="carousel-caption">
    <h4>natural pic</h4>
</div>
</div>
<div className="item">
<img className="responsive" src="..public/purple_sky_scene.jpg" alt="image/purple_sky_scene.jpg"  style="width:100%;height:600px" />
<div className="carousel-caption">
<h4>natural pic</h4>
</div>
</div>

</div>
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span clasName ="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className ="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a> 

</div>
</div>
           </div>

          
          );
       }
     }   

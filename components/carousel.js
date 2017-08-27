import React from 'react';

 const Carousel = () => {
             return(
                    <div>
                <div className="container-fluid my-carousel">
                    <h3  className="text-success "> sel program</h3>
                <div  id="myCarousel" className="carousel slide"  data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCar0usell" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>

                </ol>
                <div className="carousel-inner">
                <div className="item active">
                <img className="responsive" src="../public/smurfs_2017.jpg" height="500" width="500" alt="image/smurfs_2017.jpg"/>
                <div className="carousel-caption">
                    <h4>natural pic</h4>
                 </div>
                    </div>
                    
                <div className="item">
                <img  className="responsive" src="../public/small_river_near_house.jpg"  height="500" width="500" alt="../public/small_river_near_house.jpg" / >
                <div className="carousel-caption">
                <h4>natural pic</h4>
                >>    </div>
                    </div>

                <div className="item">
                <img className="responsive" src="../public/luxurious_villa_on_the_beach-852x480.jpg" height="500" width="500" alt="image/luxurious_villa_on_the_beach-852x480.jpg" />
                <div className="carousel-caption">
                    <h4>natural pic</h4>
                </div>
                </div>
                <div className="item">
                <img className="responsive" src="../public/house_on_the_green_field.jpg" height="500" width="500" alt="image/house_on_the_green_field.jpg" / >
                <div className="carousel-caption">
                <h4>natural pic</h4>
                </div>
                </div>
                <div className="item">
                <img  className="responsive" src="../public/forest_lake_2.jpg" height="500" width="500" alt="image/forest_lake_2.jpg" />
                <div className="carousel-caption">
                    <h4>natural pic</h4>
                </div>
                </div>
                <div className="item">
                <img className="responsive" src="../public/girl_on_the_beach.jpg" height="500" width="500" alt="image/girl_on_the_beach.jpg" />
                <div className="carousel-caption">
                <h4>natural pic</h4>
                </div>
                </div>
                   <div className="item">
                <img className="responsive" src="../public/boats_painted_x.jpg" height="500" width="500" alt="image/boats_painted_x.jpg" / >
                <div className="carousel-caption">
                    <h4>natural pic</h4>
                </div>
                </div>
                <div className="item">
                <img className="responsive" src="../public/purple_sky_scene.jpg" height="500" width="500" alt="image/purple_sky_scene.jpg" />
                <div className="carousel-caption">
                <h4>natural pic</h4>
                </div>
                </div>

                </div>
                  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left"></span>
                      <span className ="sr-only">Previous</span>
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

     export default Carousel;
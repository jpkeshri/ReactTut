import React from 'react';

export default class Profile extends React.Component {

	render() {
		return(
			<div>
			<h1 className="text-success" >My First Bootstrap Page</h1>      
 <h2>Image Gallery</h2>
  <p >The .thumbnail className can be used to display an image gallery.</p>
  <p >The .caption class adds proper padding and a dark grey color to text inside thumbnails.</p>
  <p >Click on the images to enlarge them.</p>
    <div class="row">
        <div className="col-md-4">
            <div className="thumbnail">
                <a href="image/boats_painted_x.jpg" target="_blank">
                    <img className="img-responsive" src="../public/profile.jpg" alt="idjhjh" />
                        <div className="caption"> <p> this  is first image of gallery</p>
                        </div>
                        </a>
                  </div>
                           
           </div>
        
                
        <div className="col-md-4">
            <div className="thumbnail">
                <a href="image/beautiful_forest_waterfall_2.jpg" target="_blank">
                    <img className="img-responsive" src="../public/beautiful_forest_waterfall_2.jpg" alt="idjhjh" />
                        <div className="caption"> <p> this  is first image of gallery</p>
                        </div>
                        </a>
                    </div>
            
        </div>
            
        <div className="col-md-4">
            <div className="thumbnail">
                <a href="image/forest_lake_2.jpg" target="_blank">
                    <img className="img-responsive" src="../public/forest_lake_2.jpg" alt="idjhjh" />
                        <div className="caption"> <p> this  is first image of gallery</p>
                        </div>
                        </a>
                </div>
            
        </div>
     </div> 
			</div>
		);
	}

}
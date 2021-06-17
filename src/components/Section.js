import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fade from 'react-reveal/Fade';
function Section({title,description,leftbutton,rightbutton,backgroundimage,arrow}) {
  return (
    <div className={` flex flex-col justify-between items-center w-screen h-screen ${backgroundimage}  bg-cover bg-center bg-no-repeat`}>
      {/* items text */}
      <Fade bottom>
      <div className="text-center pt-[15vh]">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p className="text-base">{description}</p>
      </div>
      </Fade>
      
      {/*Button Groups */}
      
      <div>
      <Fade bottom>
      <div className="flex flex-col space-y-3 justify-center items-center mb-[30px]  cursor-pointer md:space-x-2 md:flex-row md:space-y-0">
        {/*Left button */}
        <div className="button">{leftbutton}</div>
        {/*Right Button */}
        {rightbutton &&(
            <>
            <div className="button bg-white text-black opacity-60">{rightbutton}
            </div>
            </>
        )}
            
            
      </div>
      </Fade>
        
      
      {/*Down Arrow*/}
      {arrow &&
      <div className="animate-bounce text-white  flex items-center justify-center"> 
          <ExpandMoreIcon fontSize="large"/>
      </div>
}
      </div>
    </div>
  );
}

export default Section;

import React from "react";
import Section from "./Section";

function Home() {
  return (
    <div className="h-screen  ">
      
    
      
      <Section
        title="Model-S"
        description="Order Online for Touchless Delivery"
        backgroundimage="bg-model-s"
        leftbutton="Custom order"
        rightbutton="Existing inventory"
        arrow
      />
      <Section
        title="Model-Y"
        description="Order Online for Touchless Delivery"
        backgroundimage="bg-model-y"
        leftbutton="Custom order"
        rightbutton="Existing inventory"
      />
      <Section
        title="Model-3"
        description="Order Online for Touchless Delivery"
        backgroundimage="bg-model-3"
        leftbutton="Custom order"
        rightbutton="Existing inventory"
      />

      <Section
        title="Model-X"
        description="Order Online for Touchless Delivery"
        backgroundimage="bg-model-x"
        leftbutton="Custom order"
        rightbutton="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in Ireland"
        description="Money-back gurantee"
        backgroundimage="bg-solar-panel"
        leftbutton="Order now"
        rightbutton="learn more"
    />
    
        <Section
        title="Accessories"
        
        backgroundimage="bg-accessy"
        leftbutton="Shop now"
        
      />
    </div>

  );
}

export default Home;

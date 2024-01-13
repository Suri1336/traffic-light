import React,{useState} from "react";
// import Button from "./button";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [activeLight, setActiveLight]= useState("Red")
	function handleClick(e){
		e.preventDefault()
		if(activeLight=="Red"){
			setActiveLight("Yellow")
			
		}
		else if (activeLight=="Yellow"){
			setActiveLight("Green")
		}
		else {
			setActiveLight("Red")
		}

	}
	return (
		<div className="main ">
<div className="Stick"></div>
			<div className=" Whole text-center">
			<div className={activeLight==="Red"? "Red Light Glow":"Red Light"} onClick={()=>setActiveLight("Red")}></div>
			<div className={activeLight==="Yellow"? "Yellow Light Glow":"Yellow Light"} onClick={()=>setActiveLight("Yellow")}></div>
			<div className={activeLight==="Green"? "Green Light Glow":"Green Light"} onClick={()=>setActiveLight("Green")}></div>
		</div>
		{/* <Button /> */}
<button onClick={(e)=> handleClick(e)}>Traffic Light</button>
		</div>
	);
};

export default Home;

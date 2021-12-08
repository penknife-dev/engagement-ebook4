import React,{useEffect} from 'react';
import {gsap} from 'gsap';

const DownArrow = () => {

    useEffect(()=>{
        gsap.to('#prompt-one',{y: -10, yoyo: true,repeat: -1})
    },[])

    return (
        <svg version="1.1" id="prompt-one" x="0px" y="0px" viewBox="0 0 204.1 157.5" style={{enableBackground:'new 0 0 204.1 157.5'}}>
<g>
	<g>
		<polyline className="arrow-down-prompt" points="199.8,51.2 102,149 4.2,51.2 		"/>
	</g>
</g>
<g>
	<g>
		<polyline className="arrow-down-prompt" points="199.8,4.2 102,102 4.2,4.2 		"/>
	</g>
</g>
</svg>

    )
}   

export default DownArrow;
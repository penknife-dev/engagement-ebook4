import React,{useEffect} from 'react';

const WelcomeMessage = () => {


    return (   
		<svg version="1.1"  x="0px" y="0px" viewBox="0 0 740.5 73.8" style={{enableBackground: 'new 0 0 740.5 73.8'}} >
		<g id="Layer_2">
		</g>
		<g id="Layer_1">

			<g id="text">
				<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="79.0635" y1="17.6582" x2="661.4629" y2="17.6582">
					<stop offset="2.000000e-02" style={{stopColor:'#EFB627'}}/>
					<stop offset="0.1" style={{stopColor:'#EEAA2C'}}/>
					<stop offset="0.26" style={{stopColor:'#EA8A38'}}/>
					<stop offset="0.47" style={{stopColor:'#E4554D'}}/>
					<stop offset="0.72" style={{stopColor:'#DC0E69'}}/>
					<stop offset="0.77" style={{stopColor:'#DA006E'}}/>
				</linearGradient>
				<path className="text" style={{fill:'url(#SVGID_1_)'}} d="M106.2,27.4h-5.7l-2.3-6.2H86.9l-2.3,6.2h-5.5L89.4,0.8h6.5L106.2,27.4z M88.7,16.3h7.7
					L92.6,6L88.7,16.3z M139.1,15.6v11.7h-4.9V17.2c0-2.7-1.3-4.1-3.6-4.1c-2.1,0-3.9,1.4-3.9,4.2v10.1h-5V17.2c0-2.7-1.3-4.1-3.6-4.1
					c-2.1,0-3.9,1.4-3.9,4.2v10.1h-5V8.9h4.8v2.2c1.3-2,3.3-2.7,5.4-2.7c2.7,0,4.8,1.2,6.1,3.2c1.4-2.3,3.8-3.2,6.2-3.2
					C136.1,8.5,139.1,11.4,139.1,15.6z M157.3,10.9V0h4.9v27.4h-4.8v-2c-1.2,1.5-3,2.5-5.5,2.5c-5.1,0-8.9-4.2-8.9-9.7
					s3.8-9.7,8.9-9.7C154.4,8.5,156.1,9.4,157.3,10.9z M148.1,18.1c0,2.8,1.8,5.1,4.7,5.1c2.8,0,4.7-2.2,4.7-5.1s-1.9-5.1-4.7-5.1
					C149.9,13.1,148.1,15.3,148.1,18.1z M186.2,18.1c0,5.5-4.2,9.7-10,9.7c-5.7,0-9.9-4.1-9.9-9.7s4.2-9.7,9.9-9.7
					C182,8.5,186.2,12.6,186.2,18.1z M171.4,18.1c0,3,2.1,5.1,4.9,5.1s4.9-2.1,4.9-5.1s-2.1-5.1-4.9-5.1S171.4,15.2,171.4,18.1z
					 M206.3,11.9l-3.6,3c-1.1-1.2-2.3-1.8-3.9-1.8c-2.6,0-4.6,2-4.6,5.1c0,3.1,2,5.1,4.6,5.1c1.6,0,3-0.7,4-1.9l3.5,3
					c-1.7,2.2-4.3,3.5-7.4,3.5c-5.9,0-9.8-4.1-9.8-9.7c0-5.6,3.9-9.7,9.8-9.7C202,8.5,204.6,9.7,206.3,11.9z M223.1,14.1
					c-1.5-0.7-3.8-1.5-5.9-1.5c-1.9,0-2.8,0.7-2.8,1.7c0,1.1,1.3,1.3,3,1.6l1.6,0.2c4,0.6,6.2,2.4,6.2,5.5c0,3.8-3.1,6.2-8.5,6.2
					c-2.5,0-5.8-0.5-8.2-2.2l2-3.8c1.6,1,3.5,1.8,6.3,1.8c2.3,0,3.4-0.6,3.4-1.7c0-0.9-0.9-1.4-3.1-1.7l-1.5-0.2
					c-4.3-0.6-6.4-2.5-6.4-5.6c0-3.8,2.9-6,7.8-6c2.9,0,5.2,0.6,7.7,1.7L223.1,14.1z M263.1,6.2L258.5,9c-1.5-2.3-3.9-3.7-6.9-3.7
					c-4.8,0-8.4,3.5-8.4,8.7c0,5.3,3.7,8.7,8.4,8.7c2.9,0,5.3-1.3,6.9-3.6l4.3,3.1c-2.4,3.5-6.4,5.6-11.2,5.6c-8.2,0-14-5.8-14-13.8
					c0-8,5.8-13.8,14-13.8C256.6,0.3,260.9,2.5,263.1,6.2z M284.3,19.5c0,5.8-4.1,8.3-8.7,8.3c-4.6,0-8.7-2.5-8.7-8.3V8.9h5v10.1
					c0,2.9,1.6,4.1,3.8,4.1c2.1,0,3.8-1.2,3.8-4.1V8.9h4.9V19.5z M302.5,14.1c-1.5-0.7-3.8-1.5-5.9-1.5c-1.9,0-2.8,0.7-2.8,1.7
					c0,1.1,1.3,1.3,3,1.6l1.6,0.2c4,0.6,6.2,2.4,6.2,5.5c0,3.8-3.1,6.2-8.5,6.2c-2.5,0-5.8-0.5-8.2-2.2l2-3.8c1.6,1,3.5,1.8,6.3,1.8
					c2.3,0,3.4-0.6,3.4-1.7c0-0.9-0.9-1.4-3.1-1.7l-1.5-0.2c-4.3-0.6-6.4-2.5-6.4-5.6c0-3.8,2.9-6,7.8-6c2.9,0,5.2,0.6,7.7,1.7
					L302.5,14.1z M321.8,13.4h-6.7v6.7c0,2.3,1.2,3.1,2.8,3.1c1.2,0,2.5-0.6,3.5-1.2l1.8,3.9c-1.6,1.1-3.5,1.9-6.1,1.9
					c-4.6,0-6.9-2.6-6.9-7.4v-7.1h-3.6V8.9h3.6V3.5h5v5.5h6.7V13.4z M344.7,18.1c0,5.5-4.2,9.7-10,9.7c-5.7,0-9.9-4.1-9.9-9.7
					s4.2-9.7,9.9-9.7C340.5,8.5,344.7,12.6,344.7,18.1z M329.9,18.1c0,3,2.1,5.1,4.9,5.1c2.8,0,4.9-2.1,4.9-5.1s-2.1-5.1-4.9-5.1
					C332,13.1,329.9,15.2,329.9,18.1z M378.6,15.6v11.7h-4.9V17.2c0-2.7-1.3-4.1-3.6-4.1c-2.1,0-3.9,1.4-3.9,4.2v10.1h-5V17.2
					c0-2.7-1.3-4.1-3.6-4.1c-2.1,0-3.9,1.4-3.9,4.2v10.1h-5V8.9h4.8v2.2c1.3-2,3.3-2.7,5.4-2.7c2.7,0,4.8,1.2,6.1,3.2
					c1.4-2.3,3.8-3.2,6.2-3.2C375.7,8.5,378.6,11.4,378.6,15.6z M400.8,18.1c0,0.6,0,1.3-0.1,1.7h-13.1c0.5,2.7,2.4,3.8,4.7,3.8
					c1.6,0,3.3-0.6,4.7-1.8l2.9,3.2c-2.1,1.9-4.7,2.8-7.8,2.8c-5.6,0-9.6-3.8-9.6-9.6c0-5.8,3.8-9.7,9.3-9.7
					C397.1,8.5,400.8,12.4,400.8,18.1z M387.7,16.4h8.2c-0.5-2.4-1.9-3.7-4-3.7C389.5,12.7,388.1,14.1,387.7,16.4z M417.4,8.9
					l-0.7,4.9c-0.8-0.4-2-0.6-3-0.6c-2.3,0-3.9,1.4-3.9,4.1v10h-5V8.9h4.8v2c1.2-1.7,2.9-2.5,5.2-2.5C415.9,8.5,416.7,8.6,417.4,8.9z
					 M450.2,27.4h-19.9V0.8h19.7v4.9h-14.4v5.9h13.8v4.9h-13.8v6.1h14.6V27.4z M472.7,15.6v11.7h-5V17.2c0-2.7-1.3-4.1-3.6-4.1
					c-2.1,0-3.9,1.4-3.9,4.2v10.1h-5V8.9h4.8v2.2c1.3-2,3.3-2.7,5.4-2.7C469.7,8.5,472.7,11.4,472.7,15.6z M490.8,11V8.9h4.9v16.9
					c0,5.9-3.9,9.5-9.9,9.5c-2.9,0-6-0.8-8.1-2.2l1.8-4c1.8,1.2,3.9,1.9,6.1,1.9c3.1,0,5.2-1.7,5.2-4.9v-1.3c-1.3,1.5-3.1,2.5-5.7,2.5
					c-4.5,0-8.5-3.7-8.5-9.4c0-5.7,4-9.4,8.5-9.4C487.6,8.5,489.5,9.4,490.8,11z M481.7,17.9c0,2.7,1.8,4.8,4.6,4.8
					c2.8,0,4.6-2.1,4.6-4.8c0-2.8-1.9-4.8-4.6-4.8C483.5,13,481.7,15.2,481.7,17.9z M518.9,27.4h-4.8v-2c-1.2,1.5-3,2.5-5.5,2.5
					c-5.1,0-8.9-4.2-8.9-9.7s3.8-9.7,8.9-9.7c2.5,0,4.3,1,5.5,2.5v-2h4.8V27.4z M504.8,18.1c0,2.8,1.8,5.1,4.7,5.1
					c2.8,0,4.7-2.2,4.7-5.1s-1.9-5.1-4.7-5.1C506.6,13.1,504.8,15.3,504.8,18.1z M537.2,11V8.9h4.9v16.9c0,5.9-3.9,9.5-9.9,9.5
					c-2.9,0-6-0.8-8.1-2.2l1.8-4c1.8,1.2,3.9,1.9,6.1,1.9c3.1,0,5.2-1.7,5.2-4.9v-1.3c-1.3,1.5-3.1,2.5-5.7,2.5
					c-4.5,0-8.5-3.7-8.5-9.4c0-5.7,4-9.4,8.5-9.4C534.1,8.5,535.9,9.4,537.2,11z M528.1,17.9c0,2.7,1.8,4.8,4.6,4.8
					c2.8,0,4.6-2.1,4.6-4.8c0-2.8-1.9-4.8-4.6-4.8C529.9,13,528.1,15.2,528.1,17.9z M564.4,18.1c0,0.6,0,1.3-0.1,1.7h-13.1
					c0.5,2.7,2.4,3.8,4.7,3.8c1.6,0,3.3-0.6,4.7-1.8l2.9,3.2c-2.1,1.9-4.7,2.8-7.8,2.8c-5.6,0-9.6-3.8-9.6-9.6c0-5.8,3.8-9.7,9.3-9.7
					C560.7,8.5,564.4,12.4,564.4,18.1z M551.2,16.4h8.2c-0.5-2.4-1.9-3.7-4-3.7C553.1,12.7,551.7,14.1,551.2,16.4z M598.2,15.6v11.7
					h-4.9V17.2c0-2.7-1.3-4.1-3.6-4.1c-2.1,0-3.9,1.4-3.9,4.2v10.1h-5V17.2c0-2.7-1.3-4.1-3.6-4.1c-2.1,0-3.9,1.4-3.9,4.2v10.1h-5V8.9
					h4.8v2.2c1.3-2,3.3-2.7,5.4-2.7c2.7,0,4.8,1.2,6.1,3.2c1.4-2.3,3.8-3.2,6.2-3.2C595.3,8.5,598.2,11.4,598.2,15.6z M620.4,18.1
					c0,0.6,0,1.3-0.1,1.7h-13.1c0.5,2.7,2.4,3.8,4.7,3.8c1.6,0,3.3-0.6,4.7-1.8l2.9,3.2c-2.1,1.9-4.7,2.8-7.8,2.8
					c-5.6,0-9.6-3.8-9.6-9.6c0-5.8,3.8-9.7,9.3-9.7C616.8,8.5,620.4,12.4,620.4,18.1z M607.3,16.4h8.2c-0.5-2.4-1.9-3.7-4-3.7
					C609.1,12.7,607.7,14.1,607.3,16.4z M641.9,15.6v11.7h-5V17.2c0-2.7-1.3-4.1-3.6-4.1c-2.1,0-3.9,1.4-3.9,4.2v10.1h-5V8.9h4.8v2.2
					c1.3-2,3.3-2.7,5.4-2.7C638.9,8.5,641.9,11.4,641.9,15.6z M660.1,13.4h-6.7v6.7c0,2.3,1.2,3.1,2.8,3.1c1.2,0,2.5-0.6,3.5-1.2
					l1.8,3.9c-1.6,1.1-3.5,1.9-6.1,1.9c-4.6,0-6.9-2.6-6.9-7.4v-7.1h-3.6V8.9h3.6V3.5h5v5.5h6.7V13.4z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M15.6,60c0,4.4-3.3,7.7-7.8,7.7S0,64.4,0,60s3.3-7.7,7.8-7.7S15.6,55.6,15.6,60z M2.6,60
					c0,3.1,2.2,5.3,5.2,5.3c2.9,0,5.2-2.2,5.2-5.3s-2.2-5.3-5.2-5.3C4.8,54.7,2.6,56.9,2.6,60z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M33.3,58.2v9.1h-2.5V59c0-2.7-1.5-4.3-4-4.3c-2.4,0-4.4,1.6-4.4,4.4v8.3h-2.5V52.6h2.5v1.9
					c1.2-1.7,3.1-2.2,4.8-2.2C30.8,52.3,33.3,54.7,33.3,58.2z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M51.6,59.9c0,0.3,0,0.7,0,0.9H40c0.4,3.1,2.5,4.6,5,4.6c1.7,0,3.3-0.7,4.5-1.8l1.3,1.7
					c-1.8,1.7-3.9,2.2-6,2.2c-4.4,0-7.5-3.1-7.5-7.7c0-4.5,3.1-7.7,7.3-7.7C48.7,52.3,51.6,55.4,51.6,59.9z M40,58.8h9
					c-0.3-2.6-2-4.3-4.4-4.3C42.1,54.6,40.4,56.3,40,58.8z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M64.1,60.3h-8.7V58h8.7V60.3z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M78.8,55.9c-0.9-0.6-2.8-1.4-4.7-1.4c-2,0-3.3,0.9-3.3,2.2c0,1.2,1.1,1.7,2.9,1.9l1.7,0.2
					c3.1,0.4,5,1.7,5,4.2c0,2.8-2.5,4.6-6.5,4.6c-1.8,0-4.3-0.4-6.2-1.9l1.2-1.9c1.1,0.9,2.6,1.6,5,1.6c2.4,0,3.9-0.8,3.9-2.2
					c0-1.1-1-1.8-3-2L73,61c-3.3-0.4-4.9-1.9-4.9-4.1c0-2.8,2.3-4.5,5.9-4.5c2.3,0,4.4,0.6,5.9,1.6L78.8,55.9z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M94.3,54.9h-6.2v7.2c0,2.2,1.2,3.2,2.8,3.2c1.1,0,2.2-0.4,3-1l1.2,1.9c-1.1,0.8-2.6,1.5-4.4,1.5
					c-3.2,0-5.1-1.8-5.1-5.5v-7.2h-3.1v-2.3h3.1V48h2.5v4.6h6.2V54.9z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M112.8,60c0,4.4-3.3,7.7-7.8,7.7s-7.8-3.3-7.8-7.7s3.3-7.7,7.8-7.7S112.8,55.6,112.8,60z M99.8,60
					c0,3.1,2.2,5.3,5.2,5.3c2.9,0,5.2-2.2,5.2-5.3s-2.2-5.3-5.2-5.3C102.1,54.7,99.8,56.9,99.8,60z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M132.1,60c0,4.4-3.2,7.7-7.4,7.7c-2.3,0-4-0.9-5.2-2.3v8.2h-2.5V52.6h2.5v2
					c1.1-1.4,2.9-2.3,5.2-2.3C128.9,52.3,132.1,55.5,132.1,60z M119.4,60c0,3,2.1,5.3,5.1,5.3c3.1,0,5.1-2.4,5.1-5.3
					c0-2.9-2-5.3-5.1-5.3C121.5,54.7,119.4,57,119.4,60z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M144.6,60.3h-8.7V58h8.7V60.3z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M159.3,55.9c-0.9-0.6-2.8-1.4-4.7-1.4c-2,0-3.3,0.9-3.3,2.2c0,1.2,1.1,1.7,2.9,1.9l1.7,0.2
					c3.1,0.4,5,1.7,5,4.2c0,2.8-2.5,4.6-6.5,4.6c-1.8,0-4.3-0.4-6.2-1.9l1.2-1.9c1.1,0.9,2.6,1.6,5,1.6c2.4,0,3.9-0.8,3.9-2.2
					c0-1.1-1-1.8-3-2l-1.7-0.2c-3.3-0.4-4.9-1.9-4.9-4.1c0-2.8,2.3-4.5,5.9-4.5c2.3,0,4.4,0.6,5.9,1.6L159.3,55.9z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M167.4,54.5c1.2-1.7,3.1-2.2,4.8-2.2c3.6,0,6.1,2.4,6.1,5.9v9.1h-2.5V59c0-2.7-1.5-4.3-4-4.3
					c-2.4,0-4.4,1.6-4.4,4.4v8.3h-2.5V45h2.5V54.5z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M198,60c0,4.4-3.3,7.7-7.8,7.7c-4.5,0-7.8-3.3-7.8-7.7s3.3-7.7,7.8-7.7C194.6,52.3,198,55.6,198,60
					z M185,60c0,3.1,2.2,5.3,5.2,5.3c2.9,0,5.2-2.2,5.2-5.3s-2.2-5.3-5.2-5.3C187.2,54.7,185,56.9,185,60z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M217.3,60c0,4.4-3.2,7.7-7.4,7.7c-2.3,0-4-0.9-5.2-2.3v8.2h-2.5V52.6h2.5v2
					c1.1-1.4,2.9-2.3,5.2-2.3C214.1,52.3,217.3,55.5,217.3,60z M204.6,60c0,3,2.1,5.3,5.1,5.3c3.1,0,5.1-2.4,5.1-5.3
					c0-2.9-2-5.3-5.1-5.3C206.7,54.7,204.6,57,204.6,60z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M239.2,54.9h-5.7v12.4H231V54.9h-3.3v-2.3h3.3v-2.5c0-3.1,1.4-5.4,4.9-5.4c1.7,0,3,0.5,4,1.1
					l-0.9,2.1c-0.8-0.5-1.9-0.9-3-0.9c-1.8,0-2.5,1.1-2.5,3v2.5h5.7V54.9z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M256.8,60c0,4.4-3.3,7.7-7.8,7.7s-7.8-3.3-7.8-7.7s3.3-7.7,7.8-7.7S256.8,55.6,256.8,60z M243.8,60
					c0,3.1,2.2,5.3,5.2,5.3c2.9,0,5.2-2.2,5.2-5.3s-2.2-5.3-5.2-5.3C246,54.7,243.8,56.9,243.8,60z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M270.5,52.8l-0.6,2.5c-0.7-0.4-1.7-0.6-2.5-0.6c-2.2,0-3.8,1.7-3.8,4.4v8.2H261V52.6h2.5v1.9
					c1-1.4,2.6-2.2,4.3-2.2C268.9,52.3,269.7,52.5,270.5,52.8z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M296,67.4h-2.5v-2c-1.2,1.4-2.9,2.3-5.2,2.3c-4.1,0-7.4-3.2-7.4-7.7s3.2-7.7,7.4-7.7
					c2.3,0,4,0.9,5.2,2.3v-2h2.5V67.4z M283.4,60c0,2.9,2,5.3,5.1,5.3c3,0,5.1-2.3,5.1-5.3c0-3-2.1-5.3-5.1-5.3
					C285.4,54.7,283.4,57.1,283.4,60z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M325.5,64.7l4.2-12.1h2.7l-5.3,14.7h-3l-4.2-12l-4.2,12h-3l-5.3-14.7h2.7l4.2,12l4.2-12h2.9
					L325.5,64.7z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M338.8,47.5c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8
					C338,45.6,338.8,46.4,338.8,47.5z M338.2,67.4h-2.5V52.6h2.5V67.4z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M357.1,58.2v9.1h-2.5V59c0-2.7-1.5-4.3-4-4.3c-2.4,0-4.4,1.6-4.4,4.4v8.3h-2.5V52.6h2.5v1.9
					c1.2-1.7,3.1-2.2,4.8-2.2C354.6,52.3,357.1,54.7,357.1,58.2z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M375.7,58.2v9.1h-2.5V59c0-2.7-1.5-4.3-4-4.3c-2.4,0-4.4,1.6-4.4,4.4v8.3h-2.5V52.6h2.5v1.9
					c1.2-1.7,3.1-2.2,4.8-2.2C373.2,52.3,375.7,54.7,375.7,58.2z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M384,47.5c0,1-0.8,1.8-1.8,1.8s-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8S384,46.4,384,47.5z
					 M383.5,67.4H381V52.6h2.5V67.4z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M402.3,58.2v9.1h-2.5V59c0-2.7-1.5-4.3-4-4.3c-2.4,0-4.4,1.6-4.4,4.4v8.3h-2.5V52.6h2.5v1.9
					c1.2-1.7,3.1-2.2,4.8-2.2C399.8,52.3,402.3,54.7,402.3,58.2z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M418.8,54.6v-2h2.5v13.7c0,4.8-3.2,7.5-7.8,7.5c-2.3,0-4.7-0.7-6.2-1.9l1.1-2
					c1.4,1,3.2,1.6,5.1,1.6c3.2,0,5.3-1.8,5.3-5.1v-1.3c-1.1,1.4-2.8,2.3-5.1,2.3c-4.1,0-7.3-3.1-7.3-7.6c0-4.5,3.1-7.5,7.3-7.5
					C416,52.3,417.6,53.2,418.8,54.6z M409,59.9c0,2.9,2,5.2,5,5.2c2.9,0,5-2.2,5-5.2c0-2.9-2.1-5.2-5-5.2C411,54.7,409,57,409,59.9z"
					/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M447,54.6l-1.6,1.7c-1.1-1.1-2.3-1.7-3.9-1.7c-2.8,0-5,2.2-5,5.3s2.2,5.3,5,5.3
					c1.6,0,2.9-0.7,4-1.7l1.6,1.8c-1.3,1.5-3.3,2.3-5.5,2.3c-4.6,0-7.6-3.3-7.6-7.7s3.1-7.7,7.6-7.7C443.7,52.3,445.6,53.1,447,54.6z"
					/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M464.1,61.2c0,4.4-3.2,6.5-6.7,6.5c-3.6,0-6.7-2-6.7-6.5v-8.6h2.5V61c0,3,1.8,4.3,4.2,4.3
					c2.4,0,4.2-1.3,4.2-4.3v-8.3h2.5V61.2z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M479.3,55.9c-0.9-0.6-2.8-1.4-4.7-1.4c-2,0-3.3,0.9-3.3,2.2c0,1.2,1.1,1.7,2.9,1.9l1.7,0.2
					c3.1,0.4,5,1.7,5,4.2c0,2.8-2.5,4.6-6.5,4.6c-1.8,0-4.3-0.4-6.2-1.9l1.2-1.9c1.1,0.9,2.6,1.6,5,1.6c2.4,0,3.9-0.8,3.9-2.2
					c0-1.1-1-1.8-3-2l-1.7-0.2c-3.3-0.4-4.9-1.9-4.9-4.1c0-2.8,2.3-4.5,5.9-4.5c2.3,0,4.4,0.6,5.9,1.6L479.3,55.9z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M494.7,54.9h-6.2v7.2c0,2.2,1.2,3.2,2.8,3.2c1.1,0,2.2-0.4,3-1l1.2,1.9c-1.1,0.8-2.6,1.5-4.4,1.5
					c-3.2,0-5.1-1.8-5.1-5.5v-7.2h-3.1v-2.3h3.1V48h2.5v4.6h6.2V54.9z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M513.2,60c0,4.4-3.3,7.7-7.8,7.7s-7.8-3.3-7.8-7.7s3.3-7.7,7.8-7.7S513.2,55.6,513.2,60z M500.2,60
					c0,3.1,2.2,5.3,5.2,5.3c2.9,0,5.2-2.2,5.2-5.3s-2.2-5.3-5.2-5.3C502.5,54.7,500.2,56.9,500.2,60z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M541.9,58.2v9.1h-2.5V59c0-2.7-1.5-4.3-4-4.3c-2.4,0-4.3,1.7-4.3,4.4v8.3h-2.5V59
					c0-2.7-1.5-4.3-4-4.3c-2.4,0-4.4,1.6-4.4,4.4v8.3h-2.5V52.6h2.5v1.9c1.2-1.7,3.1-2.2,4.8-2.2c2.5,0,4.5,1.1,5.4,3
					c1.2-2.2,3.5-3,5.5-3C539.4,52.3,541.9,54.7,541.9,58.2z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M560.2,59.9c0,0.3,0,0.7,0,0.9h-11.6c0.4,3.1,2.5,4.6,5,4.6c1.7,0,3.3-0.7,4.5-1.8l1.3,1.7
					c-1.8,1.7-3.9,2.2-6,2.2c-4.4,0-7.5-3.1-7.5-7.7c0-4.5,3.1-7.7,7.3-7.7C557.3,52.3,560.2,55.4,560.2,59.9z M548.6,58.8h9
					c-0.3-2.6-2-4.3-4.4-4.3C550.6,54.6,549,56.3,548.6,58.8z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M574,52.8l-0.6,2.5c-0.7-0.4-1.7-0.6-2.5-0.6c-2.2,0-3.8,1.7-3.8,4.4v8.2h-2.5V52.6h2.5v1.9
					c1-1.4,2.6-2.2,4.3-2.2C572.3,52.3,573.2,52.5,574,52.8z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M598.5,59.9c0,0.3,0,0.7,0,0.9h-11.6c0.4,3.1,2.5,4.6,5,4.6c1.7,0,3.3-0.7,4.5-1.8l1.3,1.7
					c-1.8,1.7-3.9,2.2-6,2.2c-4.4,0-7.5-3.1-7.5-7.7c0-4.5,3.1-7.7,7.3-7.7C595.6,52.3,598.5,55.4,598.5,59.9z M586.9,58.8h9
					c-0.3-2.6-2-4.3-4.4-4.3C588.9,54.6,587.3,56.3,586.9,58.8z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M609.1,59.8l5.8,7.5h-3.1l-4.4-5.7l-4.4,5.7h-3l5.8-7.5l-5.7-7.2h3.1l4.2,5.4l4.3-5.4h3L609.1,59.8
					z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M633.2,60c0,4.4-3.2,7.7-7.4,7.7c-2.3,0-4-0.9-5.2-2.3v8.2h-2.5V52.6h2.5v2
					c1.1-1.4,2.9-2.3,5.2-2.3C630,52.3,633.2,55.5,633.2,60z M620.5,60c0,3,2.1,5.3,5.1,5.3c3.1,0,5.1-2.4,5.1-5.3
					c0-2.9-2-5.3-5.1-5.3C622.6,54.7,620.5,57,620.5,60z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M650.6,59.9c0,0.3,0,0.7,0,0.9H639c0.4,3.1,2.5,4.6,5,4.6c1.7,0,3.3-0.7,4.5-1.8l1.3,1.7
					c-1.8,1.7-3.9,2.2-6,2.2c-4.4,0-7.5-3.1-7.5-7.7c0-4.5,3.1-7.7,7.3-7.7C647.7,52.3,650.6,55.4,650.6,59.9z M639,58.8h9
					c-0.3-2.6-2-4.3-4.4-4.3C641,54.6,639.4,56.3,639,58.8z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M664.4,52.8l-0.6,2.5c-0.7-0.4-1.7-0.6-2.5-0.6c-2.2,0-3.8,1.7-3.8,4.4v8.2h-2.5V52.6h2.5v1.9
					c1-1.4,2.6-2.2,4.3-2.2C662.7,52.3,663.6,52.5,664.4,52.8z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M670.9,47.5c0,1-0.8,1.8-1.8,1.8s-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8S670.9,46.4,670.9,47.5z
					 M670.4,67.4h-2.5V52.6h2.5V67.4z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M688.9,59.9c0,0.3,0,0.7,0,0.9h-11.6c0.4,3.1,2.5,4.6,5,4.6c1.7,0,3.3-0.7,4.5-1.8l1.3,1.7
					c-1.8,1.7-3.9,2.2-6,2.2c-4.4,0-7.5-3.1-7.5-7.7c0-4.5,3.1-7.7,7.3-7.7C685.9,52.3,688.8,55.4,688.9,59.9z M677.3,58.8h9
					c-0.3-2.6-2-4.3-4.4-4.3C679.3,54.6,677.6,56.3,677.3,58.8z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M706.6,58.2v9.1H704V59c0-2.7-1.5-4.3-4-4.3c-2.4,0-4.4,1.6-4.4,4.4v8.3h-2.5V52.6h2.5v1.9
					c1.2-1.7,3.1-2.2,4.8-2.2C704.1,52.3,706.6,54.7,706.6,58.2z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M723.8,54.6l-1.6,1.7c-1.1-1.1-2.3-1.7-3.9-1.7c-2.8,0-5,2.2-5,5.3s2.2,5.3,5,5.3
					c1.6,0,2.9-0.7,4-1.7l1.6,1.8c-1.3,1.5-3.3,2.3-5.5,2.3c-4.6,0-7.6-3.3-7.6-7.7s3.1-7.7,7.6-7.7C720.5,52.3,722.5,53.1,723.8,54.6
					z"/>
				<path className="text" style={{fill:'#FFFFFF'}} d="M740.5,59.9c0,0.3,0,0.7,0,0.9h-11.6c0.4,3.1,2.5,4.6,5,4.6c1.7,0,3.3-0.7,4.5-1.8l1.3,1.7
					c-1.8,1.7-3.9,2.2-6,2.2c-4.4,0-7.5-3.1-7.5-7.7c0-4.5,3.1-7.7,7.3-7.7C737.6,52.3,740.5,55.4,740.5,59.9z M728.9,58.8h9
					c-0.3-2.6-2-4.3-4.4-4.3C731,54.6,729.3,56.3,728.9,58.8z"/>
			</g>


	
		</g>


		</svg>
   


    )
}

export default WelcomeMessage;
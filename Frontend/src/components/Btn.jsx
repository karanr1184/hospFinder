import ToggleButton from "react-bootstrap/ToggleButton";

import "../assets/Btn.css";	

function Btn(props) {

	return (
		<>   
			<ToggleButton
				className="mb-2 btn"
				id="btn"
				type="checkbox"
				size="lg"
				variant="outline-primary"
				checked={props.type}
				onClick={props.handleClick}
			>
				{props.name}
			</ToggleButton>{" "}
		</>
	);
}

export default Btn;

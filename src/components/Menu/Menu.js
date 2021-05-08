import React from "react";

import "./Menu.sass";

import Social from "./../../components/Social/Social";

const Menu = ({ onLinkClick, onSwitchClick, isOpen }) => {
	return (
		<nav className={"Menu " + (isOpen ? "open" : "close")}>
			<button className="Menu__Switcher" onClick={onSwitchClick}></button>
			<div className="Menu__Item Menu__Lang">
				<span>FR</span> |<span> EN</span>
			</div>
			<div className="Menu__Item" onClick={() => onLinkClick("josiane")}>
				<button>la maman</button>
				{/* <span>josiane</span> */}
			</div>
			<div className="Menu__Item" onClick={() => onLinkClick("work")}>
				<button>le travail</button>
				{/* <span>le travail</span> */}
			</div>
			<div className="Menu__Item" onClick={() => onLinkClick("family")}>
				<button>la famille</button>
				{/* <span>la famille</span> */}
			</div>
			<div className="Menu__Item" onClick={() => onLinkClick("cousins")}>
				<button>les cousines</button>
				{/* <span>les cousines</span> */}
			</div>
			<div className="Menu__Item" onClick={() => onLinkClick("contact")}>
				<button>le contact</button>
				{/* <span>le contact</span> */}
			</div>
			<Social />
		</nav>
	);
};

export default Menu;

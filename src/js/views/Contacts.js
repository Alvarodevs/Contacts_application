import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});
	//const [currentUserId, setCurrentUserId] = useState();
	let currentUserId = "";
	// console.log(userId);

	const allContacts = store.contacts.map((element, index) => {
		return (
			<div key={index}>
				<ContactCard
					key={index}
					full_name={element.full_name}
					address={element.address}
					email={element.email}
					id={element.id}
					phone={element.phone}
					onDelete={() => setState({ showModal: true })}
				/>
				<Modal
					key={index}
					show={state.showModal}
					onClose={() => setState({ showModal: false })}
					id={element.id}
				/>
			</div>
		);
	});

	//console.log(store.contacts);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>

				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{allContacts}
					</ul>
				</div>
			</div>
			{/* <Modal show={state.showModal} onClose={() => setState({ showModal: false })} id={store.contacts.id} /> */}
		</div>
	);
};

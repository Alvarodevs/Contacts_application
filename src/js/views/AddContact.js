import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	var userData = store.contacts.find(element => element.id == window.location.pathname.substring(1).split("/")[1]);

	var inputName = "";
	var inputEmail = "";
	var inputPhone = "";
	var inputAddress = "";

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder={"Enter full name"}
							defaultValue={userData ? userData.full_name : inputName}
							onChange={e => {
								inputName = e.target.value;
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder={"Enter email"}
							defaultValue={userData ? userData.email : inputEmail}
							onChange={e => {
								inputEmail = e.target.value;
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder={"Enter phone"}
							defaultValue={userData ? userData.phone : inputPhone}
							onChange={e => {
								inputPhone = e.target.value;
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder={"Enter address"}
							defaultValue={userData ? userData.address : inputAddress}
							onChange={e => {
								inputAddress = e.target.value;
							}}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								if (userData == undefined) {
									actions.addContact(inputName, inputEmail, inputAddress, inputPhone);
								} else {
									actions.updateContact(inputName, inputEmail, inputAddress, inputPhone, userData.id);
								}
							}}>
							Save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						Back home
					</Link>
				</form>
			</div>
		</div>
	);
};

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	// console.log(window.location.pathname.substring(1).split("/")[1]);

	// console.log(window.location.pathname);
	var userData = store.contacts.find(element => element.id == window.location.pathname.substring(1).split("/")[1]);
	//console.log(userData);

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
							placeholder={userData ? userData.full_name : "Full Name"}
							//value={userData ? userData.full_name : ""}
							onChange={e => {
								userData ? userData.full_name : (inputName = e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder={userData ? userData.email : "Enter email"}
							//value={userData ? userData.email : ""}
							onChange={e => {
								userData ? userData.email : (inputEmail = e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder={userData ? userData.phone : "Enter phone"}
							//value={userData ? userData.phone : ""}
							onChange={e => {
								userData ? userData.phone : (inputPhone = e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder={userData ? userData.address : "Enter address"}
							//value={userData ? userData.address : ""}
							onChange={e => {
								userData ? userData.address : (inputAddress = e.target.value);
							}}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.addContact(inputName, inputEmail, inputAddress, inputPhone, userData.id);
						}}>
						Save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						Back home
					</Link>
				</form>
			</div>
		</div>
	);
};

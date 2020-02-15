import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

// prepare the streamForm to take initial values
class StreamForm extends Component {
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return <div className="error text-danger small">{error}</div>;
		}

		return null;
	};

	//in this input we have to add isInvalid

	renderInput = ({ input, meta, label, placeholder }) => {
		//now i have to just apply logic to check if is-invalid should be added to the className

		// const valid = meta.error ? 'is-invalid' : 'is-valid';
		const classStyle = meta.error && meta.touched ? 'form-control is-invalid' : 'form-control';
		return (
			<div>
				<label>{label}</label>
				<input {...input} placeholder={placeholder} className={classStyle} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	//cannot read prop renderError of undefined

	//change this
	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
		//we have form values on onSubmit now we can use the form values to make req
	};

	// <StreamForm onSubmit={ this.props.creteStream(formValues) }

	//<StreamForm onSubmit = {this.props.editStream( id, formValues )}
	render() {
		const { handleSubmit } = this.props;
		return (
			<div className="container">
				<form className="form-group" onSubmit={handleSubmit(this.onSubmit)}>
					<Field name="title" component={this.renderInput} label="Title" placeholder="Title" />
					<Field
						name="description"
						component={this.renderInput}
						label="Description"
						placeholder="Enter a short description of your stream"
					/>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

// formValues are going to get updated once i hit the submit button

// we just have to put initial values

// if(values) renderIt

// else dont

//onSubmit = { this.createStream || this.editStream }

const validate = (formValues) => {
	const errors = {};
	const errorMessage = 'This field is mendatory';
	if (!formValues.title) {
		errors.title = errorMessage;
	}
	if (!formValues.description) {
		errors.description = errorMessage;
	}

	return errors;
};

export default reduxForm({
	form: 'streamForm',
	validate
})(StreamForm);

//dispatching action after the stream creation

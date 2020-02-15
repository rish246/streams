import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="ui dimmer modals visible active" onClick={props.onDismiss}>
			<div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
				<div className="header">{props.header}</div>

				<div className="content">
					<p>{props.content}</p>
				</div>
				<div className="actions">{props.actions()}</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;

// we made the modal

//todo

//trigger the modal when delete button is pressed

//trigger the action creator of deleteStream( id )

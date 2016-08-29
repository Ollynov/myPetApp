var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
	render: function() {
		return (
		  <div className="interface">
				<h1>Pet Clinic Appointments</h1>
	      <ul>
	        <li>Chetty 3:00 PM</li>
	        <li>Rosie 4:00 PM</li>
	        <li>Mac 5:00 PM</li>
	      </ul>
	    </div>
		)
	}
});





















ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));
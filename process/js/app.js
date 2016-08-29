var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
	getInitialState: function() {
		return {
			myAppointments: []
		}
	},

	componentDidMount: function() {
		this.serverRequest = $.get('./js/data.json', function(result) {
      var tempApts = result;
      this.setState({
      	myAppointments: tempApts
      }); // we are setting the state
		}.bind(this));
	},

	render: function() {
	  var filteredApts = this.state.myAppointments;
	  filteredApts = filteredApts.map(function(item, index) {
      return (
      	<li key={index}>
		      <div>
		        <span>{ this.state.myAppointments[index].petName } </span>
		        Appointment on: <span>{ this.state.myAppointments[index].aptDate }</span>
		      </div>
		      <div>
		        <span>{ this.state.myAppointments[index].ownerName }</span>
		      </div>
		    </li>
      )
	  }.bind(this));

	  return (
		  <div className="interface">
			  <ul className="item-list">{ filteredApts }
			  </ul>
	    </div>
		)
		// var showTitle;
		// if (this.state.show) {
		// 	showTitle = 'New';
		// }

		// var displayList = {
		// 	display: this.state.show ? 'block' : 'none',
		// 	color: 'LimeGreen'
		// }

		// return (
		//   <div className="interface">
		// 		<h1>{ showTitle } { this.state.title }</h1>
	 //      <ul style={ displayList }>
	 //        <li>Chetty 3:00 PM</li>
	 //        <li>Rosie 4:00 PM</li>
	 //        <li>Mac 5:00 PM</li>
	 //      </ul>
	 //    </div>
		// )



	}
});





















ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));
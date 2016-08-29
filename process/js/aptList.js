var React = require('react');

var AptList = React.createClass({
	render: function() {
    return(
      <li>
        <div className="media-left">
          <button className="pet-delete btn btn-xs btn-danger" onClick={ this.handleDelete }>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        <div>
          <span>{ this.props.singleItem.petName } </span>
          Appointment on: <span>{ this.props.singleItem.aptDate }</span>
        </div>
        <div>
          <span>{ this.props.singleItem.ownerName }</span>
        </div>
  		</li>
	  )
  }
});

module.exports=AptList;


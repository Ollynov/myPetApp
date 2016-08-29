var React = require('react');

var AptList = React.createClass({
	handleDelete: function() {
    this.props.onDelete(this.props.whichItem);
  },


  render: function() {
    return(
      <li className="pet-item media">
        <div className="media-left">
          <button className="pet-delete btn btn-xs btn-danger" onClick={ this.handleDelete }>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </div>
        <div className="pet-info media-body">
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


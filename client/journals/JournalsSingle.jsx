import React, {Component} from 'react';

export default class JournalsSingle extends Component{
    
    toggleChecked() { 
        Meteor.call('toggleJournal', this.props.journal);
    }

    deleteJournal() { 
        Meteor.call('deleteJournal', this.props.journal);
    }

    render() {
        const status = this.props.journal.complete ? <span className="completed">Completed</span> : '';

        return (
            
            <div className="card">
                <h1><a href={`/journals/${this.props.journal._id}`} className="alink">{this.props.journal.text}</a></h1>
                <button className="btn-cancel"
                    onClick={this.deleteJournal.bind(this)}>
                    &times;
                </button>
                <a href={`/edit/${this.props.journal._id}`} className="alink">Edit</a>
            </div>
        )
    }
}
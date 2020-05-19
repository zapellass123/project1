import React, {Component} from 'react';

export default class JournalsSingle extends Component{
    
    toggleChecked() { 
        Meteor.call('toggleJournal', this.props.journal);
    }

    deleteJournal() { 
        // console.log(this.props.journal._id);
        Meteor.call('deleteJournal', this.props.journal);
    }

    render() {
        const journalClass = this.props.journal.complete ? "checked" : "";
        const status = this.props.journal.complete ? <span className="completed">Completed</span> : '';

        return (
            <li className={journalClass}>
                <input type="checkbox"
                    readOnly={true}
                    checked={this.props.journal.complete}
                    onClick={this.toggleChecked.bind(this)} />
                {this.props.journal.text}
                {status}
                <button className="btn-cancel"
                    onClick={this.deleteJournal.bind(this)}>
                    &times;
                </button>
            </li>
        )
    }
}
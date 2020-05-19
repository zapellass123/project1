import React, {Component} from 'react';

export default class JournalsSingle extends Component{
    
    toggleChecked() { 
        Meteor.call('toggleJournal', this.props.journal);
    }

    deleteJournal() { 
        Meteor.call('deleteJournal', this.props.journal._id);
    }

    render() {
        const journalClass = this.props.journal.complete ? "checked" : "";

        return (
            <li className={journalClass}>
                <input type="checkbox"
                    readOnly={true}
                    checked={this.props.journal.complete}
                    onClick={this.toggleChecked.bind(this)} />
                {this.props.journal.text}
                <button className="btn-cancel"
                    onClick={this.deleteJournal.bind(this)}>
                    &times;
                </button>
            </li>
        )
    }
}
import React, {Component} from 'react';

export default class JournalsForm extends Component {
    
    addJournal(event){
        event.preventDefault();
        var text = this.refs.journal.value.trim();

        Meteor.call('addJournal', text, (error, data)=>{
            if(error) {
                Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
            }
            this.refs.journal.value = "";
        });        
    }

    render() {
        return(
            <form className="new-journal" onSubmit={this.addJournal.bind(this)}>
                <input 
                    type="text" 
                    ref="journal"
                    placeholder="Tulis" />
            </form>
        )
    }
}
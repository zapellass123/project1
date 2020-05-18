import React, {Component} from 'react';

export default class JournalsForm extends Component {
    
    addJournal(event){
        event.preventDefault();
        var text = this.refs.journal.value.trim();

        Journals.insert({
            text: text,
            complete: false,
            createAt: new Date()
        });
        
        this.refs.journal.value = "";
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
import React, {Component} from 'react';

export default class JournalsForm extends Component {
    
    addJournal(event){
        event.preventDefault();
        // console.log(this.refs.journal.value.trim());
        var text = this.refs.journal.value.trim();
        var desc = this.refs.desc.value.trim();
        if(text && desc){
            Meteor.call('addJournal', text, desc, (error, data)=>{
                // if(error) {
                //     Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
                // } else {
                    this.refs.journal.value = "";
                    this.refs.desc.value = "";
                // }            
            });
        }
    }

    render() {
        return(
            <form className="new-journal" onSubmit={this.addJournal.bind(this)}>
                <input 
                    name="title"
                    type="text" 
                    ref="journal"
                    placeholder="Journal Title" />
                <input 
                    name="desc"
                    type="text-area" 
                    ref="desc"
                    placeholder="Description" />
                <button type="submit">Add</button>
            </form>
        )
    }
}
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
        FlowRouter.go('/');
    }

    render() {
        return(
            <form className="new-journal" onSubmit={this.addJournal.bind(this)}>
                <div className="field">
                    <label>Title</label>
                    <input 
                        name="title"
                        type="text" 
                        ref="journal"
                        placeholder="Journal Title" />
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea 
                        name="desc"
                        type="text-area" 
                        ref="desc"
                        placeholder="Description" />
                </div>
                <div className="field">
                    <button type="submit">Add</button>
                </div>                
            </form>
        )
    }
}
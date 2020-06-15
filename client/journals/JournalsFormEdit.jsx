import React, {Component} from 'react';

export default class JournalsFormEdit extends Component {
    
    editJournal(event){
        event.preventDefault();
        var text = this.refs.journal.value.trim();
        var desc = this.refs.desc.value.trim();
        // if(text && desc){
        //     Meteor.call('editJournal', text, desc, (error, data)=>{
        //         this.refs.journal.value = "";
        //         this.refs.desc.value = "";
        //     });
        // }
        Journals.update(this.props.id, {$set: {text: text, desc: desc}});
    }

    render() {
        return(
            <form className="new-journal" onSubmit={this.editJournal.bind(this)}>
                <input 
                    name="title"
                    type="text" 
                    ref="journal"
                    value={res.text}
                    placeholder="Journal Title" />
                <input 
                    name="desc"
                    type="text-area" 
                    ref="desc"
                    value={res.desc}
                    placeholder="Description" />
                <button type="submit">Add</button>
            </form>
        )
    }
}
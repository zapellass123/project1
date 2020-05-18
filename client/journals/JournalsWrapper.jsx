import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import JournalsForm from './JournalsForm.jsx';
import JournalsSingle from './JournalsSingle.jsx';

Journals = new Mongo.Collection("journals");

export default class JournalsWrapper extends TrackerReact(React.Component) {
    
    journals() {
        return Journals.find().fetch();
    }

    render() {
        let res = this.journals();
        // if(res.length < 1) {
        //     return (<div>Loading</div>)
        // }
        return (
            <div>
                <h1>Journals</h1>
                <JournalsForm />
                <ul>
                    {this.journals().map( (journal)=>{
                        return <JournalsSingle journal={journal} />
                    })}                    
                </ul>
            </div>
        )
    }
}
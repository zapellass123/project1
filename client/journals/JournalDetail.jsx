import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class JournalDetail extends TrackerReact(Component){

    constructor(){
        super();

        this.state = {
            subscription: {
                journals: Meteor.subscribe("userJournals")
            }
        }
    }

    componentWillUnmount(){
        this.state.subscription.journals.stop();
    }

    journals() {
        return Journals.findOne({_id: this.props.id}).fetch();
    }

    render() {
        let res = this.journal();

        if(!res){
            return(<div>Loading...</div>);
        }

        return (
            <div>
                <h1>{res.text}</h1>
            </div>
        )
    }
}
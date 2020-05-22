import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import JournalsSingle from './JournalsSingle.jsx';

// Journals = new Mongo.Collection("journals");

export default class JournalsWrapper extends TrackerReact(React.Component) {
    constructor(){
        super();

        this.state = {
            subscription: {
                journals: Meteor.subscribe("allJournals")
            }
        }
    }

    componentWillUnmount(){
        this.state.subscription.journals.stop();
    }

    journals() {
        return Journals.find().fetch();
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}>
                <ReactCSSTransitionGroup
                    component="div"
                    className="row"
                    transitionName="journalLoad"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={400}>
                    {this.journals().map( (journal)=>{
                        return <JournalsSingle key={journal._id} journal={journal} />
                    })}
                </ReactCSSTransitionGroup>                
            </ReactCSSTransitionGroup>            
        )
    }
}
import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import JournalsForm from './JournalsForm.jsx';
import JournalsSingle from './JournalsSingle.jsx';

Journals = new Mongo.Collection("journals");

export default class JournalsWrapper extends TrackerReact(React.Component) {
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
        return Journals.find().fetch();
    }

    render() {
        let res = this.journals();
        // if(res.length < 1) {
        //     return (<div>Loading</div>)
        // }
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}>  
                <h1>Journals - {Session.get('test')}</h1>
                <JournalsForm />
                <ReactCSSTransitionGroup
                    component="ul"
                    className="journals"
                    transitionName="journalLoad"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={400}>
                    {this.journals().map( (journal)=>{
                        return <JournalsSingle key={journal._id} journal={journal} />
                    })}
                </ReactCSSTransitionGroup>
            </ReactCSSTransitionGroup>
        )
    }
}
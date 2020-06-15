import React, {Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import JournalsForm from './JournalsForm.jsx';

// Journals = new Mongo.Collection("journals");

class JournalAdd extends Component {
    constructor(){
        super();
    }

    // componentWillUnmount(){
    //     this.state.sub.journals.stop();
    // }

    // journals() {
    //     return Journals.find().fetch();
    // }

    render() {
        // let res = this.journals();
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
                <div className="padding-for-top"></div> 
                <h1>Add Journal</h1>
                <JournalsForm />
            </ReactCSSTransitionGroup>            
        )
    }
}
export default withTracker(()=>{
    const sub = Meteor.subscribe('userJournals');
    const subReady = sub.ready();
  
    return {
      journals: Journals.find().fetch(),
      subReady,
    }
})(JournalAdd);
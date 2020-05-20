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
                {/* <h1>Add Journal
                     - {Session.get('test')}
                </h1>
                <JournalsForm /> */}

                {/* <ReactCSSTransitionGroup
                    component="ul"
                    className="journals"
                    transitionName="journalLoad"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={400}>
                    {this.journals().map( (journal)=>{
                        return <JournalsSingle key={journal._id} journal={journal} />
                    })}
                </ReactCSSTransitionGroup> */}

                {/* <div class="row"> */}
                <ReactCSSTransitionGroup
                    component="div"
                    className="row"
                    transitionName="journalLoad"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={400}>
                    {this.journals().map( (journal)=>{
                        return <JournalsSingle key={journal._id} journal={journal} />
                    })}
                    {/* <div class="card">
                        <h2>TITLE HEADING</h2>
                        <h5>date</h5>
                        <p>Some text..</p>
                    </div> */}
                </ReactCSSTransitionGroup>                
                {/* <div class="card">
                    <h2>TITLE HEADING</h2>
                    <h5>date created</h5>
                    <p>lorem ipsulm</p>
                </div>
                <div class="card">
                    <h2>TITLE HEADING</h2>
                    <h5>date</h5>
                    <p>Some text..</p>
                </div> */}
                {/* <div class="rightcolumn">
                <div class="card">
                    <h2>About Me</h2>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
                <div class="card">
                    <h3>Popular Post</h3>
                    <div class="fakeimg">Image</div><br />
                    <div class="fakeimg">Image</div><br/>
                    <div class="fakeimg">Image</div>
                </div>
                <div class="card">
                    <h3>Follow Me</h3>
                    <p>Some text..</p>
                </div>
                </div> */}
                {/* </div> */}
            </ReactCSSTransitionGroup>            
        )
    }
}
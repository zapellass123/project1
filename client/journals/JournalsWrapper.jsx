import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import JournalsSingle from './JournalsSingle.jsx';

Journals = new Mongo.Collection("journals");

export default class JournalsWrapper extends TrackerReact(React.Component) {
    constructor(){
        super();

        this.state = {
            subscription: {
                journals: Meteor.subscribe("userJournals")
            },
            selected: false,
        };

        this.displayJournalEntries = this.displayJournalEntries.bind(this);
        this.selectEntry = this.selectEntry.bind(this);
    }

    componentWillUnmount(){
        this.state.subscription.journals.stop();
    }

    journals() {
        return Journals.find().fetch();
    }

    selectEntry(entry) {
        //Entry is an object with key title & desc
        if (!!entry && entry.title) {
          this.setState({
            selected: entry
          });
        }
      }
    
    displayJournalEntries(){
        // const entriesFromDB = Journals;
        let elements = [];
        Journals.find().forEach((journal)=>{
            elements.push(
                <JournalsSingle 
                    key={journal._id}
                    journal={journal}
                    title={journal.title}
                    desc={journal.desc}
                    selectFunction={this.selectEntry}
                    />
            )
        });

        return elements;
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
                <div className="journal-selected">
                    Selected journal :&nbsp;
                    {this.state.selected ? ( this.state.selected.title ) : (" No selected journal")}
                </div>                
                {/* <ReactCSSTransitionGroup
                    component="div"
                    className="row"
                    transitionName="journalLoad"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={400}>
                    {this.journals().map( (journal)=>{
                        return <JournalsSingle key={journal._id} journal={journal} />
                    })}
                </ReactCSSTransitionGroup>                 */}
                {this.displayJournalEntries()}
            </ReactCSSTransitionGroup>            
        )
    }
};

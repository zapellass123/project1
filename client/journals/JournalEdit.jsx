import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import JournalsFormEdit from './JournalsFormEdit.jsx';



export default class JournalEdit extends TrackerReact(Component){
    constructor(props){
        super(props);

        this.state = {
            subscription: {
                journals: Meteor.subscribe("userJournals")
            }
        }
    }

    componentWillUnmount(){
        this.state.subscription.journals.stop();
    }

    journal() {
        return Journals.findOne(this.props.id);
    }

    render() {
        console.log(this.props);
        let res = this.journal();

        if(!res){
            return(<div>Loading...</div>);
        }

        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}>  
                <h1>Edit Journal</h1>
                <JournalsFormEdit />
            </ReactCSSTransitionGroup>            
        )
    }
}
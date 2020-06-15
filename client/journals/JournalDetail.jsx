import React, {Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { withTracker } from 'meteor/react-meteor-data';

class JournalDetail extends Component{

    constructor(){
        super();
    }

    componentWillUnmount(){
        this.state.sub.journals.stop();
    }

    journal() {
        return Journals.findOne(this.props.id);
    }

    render() {
        let res = this.journal();

        if(!res){
            return(<div>Loading...</div>);
        }

        return (
            <div className="padding-for-top">
                <h1>{res.text}</h1>
                <p>{res.desc}</p>
            </div>
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
})(JournalDetail);
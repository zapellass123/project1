import React, {Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { data } from 'jquery';

// Journals = new Mongo.Collection("journals");

class JournalAdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: "",
            desc: "",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value});
    }

    addJournal(event){
        event.preventDefault();
        // console.log(this.state.text);
        if(this.state.text && this.state.desc){
            Meteor.call('addJournal', this.state.text, this.state.desc, (err, res) => {
                if (err) {
                    console.log("Error : " + err);
                } else { 
                    console.log(res);
                }                
              });
        }

        FlowRouter.go('/');
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
                <form className="new-journal" onSubmit={this.addJournal.bind(this)}>
                    <div className="field">
                        <label>Title</label>
                        <input 
                           name="text"
                           type="text" 
                           ref="journal"
                           onChange={this.handleInputChange}
                           value={this.state.text}
                            placeholder="Journal Title" />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea 
                            name="desc"
                            type="text-area" 
                            ref="desc"
                            onChange={this.handleInputChange}
                            value={this.state.desc}
                            placeholder="Description" />
                    </div>
                    <div className="field">
                        <button type="submit">Add</button>
                    </div>                
                </form>
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
import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

    editJournal(event){
        event.preventDefault();
        var text = this.refs.journal.value.trim();
        var desc = this.refs.desc.value.trim();
        Journals.update(this.props.id, {$set: {text: text, desc: desc}});
        console.log('Data Updated');
        FlowRouter.go('/');
    }    

    render() {
        // console.log(this.props);
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
                <br />
                <h1>Edit Journal</h1>
                <form className="new-journal" onSubmit={this.editJournal.bind(this)}>
                    <div className="field">
                        <label>Title</label>
                        <input 
                            name="title"
                            type="text" 
                            ref="journal"
                            defaultValue={res.text}
                            placeholder={res.text} />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea 
                            name="desc"
                            type="text-area" 
                            ref="desc"
                            defaultValue={res.desc} />
                    </div>
                    <div className="field">
                        <button type="submit">Update</button>
                    </div>
                </form>
            </ReactCSSTransitionGroup>
        )
    }
}
import React, {Component} from 'react';
import Modal from './Modal.jsx';
export default class JournalsSingle extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            isEdit: false,
            text: this.props.journal.text,
            desc: this.props.journal.desc,
        }
        this.openModalEdit = this.openModalEdit.bind(this);
        this.openModalAdd = this.openModalAdd.bind(this);
        this.openModalView = this.openModalView.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.selectEntry = this.selectEntry.bind(this);
    }

    openModalEdit() {
        this.setState({
            isOpen: true,
            isEdit: true,
            text: this.props.journal.text,
            desc: this.props.journal.desc
        });
    }

    openModalAdd() {
        this.setState({
            isOpen: true,
            isEdit: false,
            text: "",
            desc: ""
        });
    }

    openModalView() {
        this.setState({
            isOpen: true,
            isEdit: false
        });
    }

    closeModal() {
        this.setState({
            isOpen: false,
        });
    }
    
    toggleChecked() { 
        Meteor.call('toggleJournal', this.props.journal);
    }

    deleteJournal() { 
        Meteor.call('deleteJournal', this.props.journal);
    }

    handleInputChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value});
    }

    componentDidUpdate(prevProps, prevState) {
        console.warn("Data has changed");
    }

    editJournal(event){
        event.preventDefault();
        var text = this.refs.journal.value.trim();
        var desc = this.refs.desc.value.trim();
        Journals.update(this.props.journal._id, {$set: {text: text, desc: desc}});
        console.log('Data Updated');
        this.closeModal();
        FlowRouter.go('/');        
    }

    selectEntry() {
        console.log('Button Clicked');
        // console.log(this.props.journal.text);
        const selectedEntry = {
          title: this.props.journal.text,
        };
        this.props.selectFunction(selectedEntry);
    }

    render() {
        return(
            <div className="card">
            <Modal
                word={ this.state.word }
                isOpen={ this.state.isOpen }
                close={ this.closeModal }>                                      
                <form className="new-journal" onSubmit={this.editJournal.bind(this)} style={{align:"center"}}>
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
                        {this.state.isEdit && <button type="submit">Update</button>}
                    </div>
                </form>
                <button onClick={ this.closeModal }>{ this.props.modalCancelButtonText ? this.props.modalCancelButtonText:"Close"}</button>
            </Modal>


            <h1><a href={`/journals/${this.props.journal._id}`} className="alink">{this.props.journal.text}</a></h1>                
            <input type="radio" name="journal-radio" id="journal-radio" onClick={()=>this.selectEntry()} /> &nbsp;
            <button 
                className={ this.props.openButtonClassName}
                onClick={this.deleteJournal.bind(this)} 
                style={{backgroundColor:"red"}}
                >
                &times;
            </button>
            {/* <a href={`/edit/${this.props.journal._id}`} className="alink"><i className="fa fa-edit"></i></a> */}
            <button title={ this.props.openButtonTitleTag} className={ this.props.openButtonClassName} onClick={ this.openModalEdit }>Edit</button>
            <button title={ this.props.openButtonTitleTag} className={ this.props.openButtonClassName} onClick={ this.openModalView }>View</button>
        </div>
        )
    }
}
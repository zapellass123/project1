import React, {Component} from 'react';
import Modal from './Modal.jsx';
export default class JournalsSingle extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            isEdit: false,
            tex: this.props.journal.text,
            desc: this.props.journal.desc
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    openModal() {
        this.setState({
            isOpen: true,
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

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(this.props);
    //     if (!prevProps.journal && this.props.journal) {
    //         const journal = this.props.journal;
    //         console.log(journal);
    //         this.setState({
    //             title: journal.title,
    //             desc: journal.desc
    //         });
    //     }
    // }

    render() {
        // if(this.state.isEdit == true){
            return(
                <div className="card"> 
                <Modal
                    isOpen={ this.state.isOpen }
                    close={ this.closeModal }
                    title={ this.props.title}>
                    <div>{ this.props.text}</div>                    
                    <form className="new-journal">
                        <div className="field">
                            <label>Title</label>
                            <input 
                                name="title"
                                type="text" 
                                ref="journal"
                                onChange={this.handleInputChange}
                                value={this.state.title}
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
                    </form>
                    <button onClick={ this.closeModal }>{ this.props.modalCancelButtonText ? this.props.modalCancelButtonText:"Close"}</button>
                    <button>{this.props.journal ? 'Update':'Create'}</button>
                </Modal>               
                <h1><a href={`/journals/${this.props.journal._id}`} className="alink">{this.props.journal.text}</a></h1>                
                <button className="btn-cancel"
                    onClick={this.deleteJournal.bind(this)}>
                    &times;
                </button>
                <a href={`/edit/${this.props.journal._id}`} className="alink"><i className="fa fa-edit"></i></a>
                <button title={ this.props.openButtonTitleTag} className={ this.props.openButtonClassName} onClick={ this.openModal }>Edit</button>
            </div>
            )
        // } else {
        //     return (            
        //         <div className="card"> 
        //             <Modal
        //                 isOpen={ this.state.isOpen }
        //                 close={ this.closeModal }
        //                 title={ this.props.title}>
        //                 <div>{ this.props.text}</div>                    
        //                 <form className="new-journal">
        //                     <div className="field">
        //                         <label>Title</label>
        //                         <input 
        //                             name="title"
        //                             type="text" 
        //                             ref="journal"
        //                             placeholder="Journal Title" />
        //                     </div>
        //                     <div className="field">
        //                         <label>Description</label>
        //                         <textarea 
        //                             name="desc"
        //                             type="text-area" 
        //                             ref="desc"
        //                             placeholder="Description" />
        //                     </div>          
        //                 </form>
        //                 <button onClick={ this.closeModal }>{ this.props.modalCancelButtonText ? this.props.modalCancelButtonText:"Close"}</button>
        //                 {/* <button onClick={()=>{ this.props.onConfirmFunction(); this.closeModal() }}>{ this.props.modalConfirmButtonText ? this.props.modalConfirmButtonText:"Confirm"}</button> */}
        //             </Modal>               
        //             <h1><a href={`/journals/${this.props.journal._id}`} className="alink">{this.props.journal.text}</a></h1>                
        //             <button className="btn-cancel"
        //                 onClick={this.deleteJournal.bind(this)}>
        //                 &times;
        //             </button>
        //             <a href={`/edit/${this.props.journal._id}`} className="alink"><i className="fa fa-edit"></i></a>
        //             <button title={ this.props.openButtonTitleTag} className={ this.props.openButtonClassName} onClick={ this.openModal }>{ this.props.openButtonText ? this.props.openButtonText:"Confirm"}</button>
        //         </div>
        //     )
        // }        
    }
}
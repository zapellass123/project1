import SimpleSchema from 'simpl-schema';
Meteor.methods({
    addJournal: function(journal, desc) {
        new SimpleSchema({
          journal: { type: String },
          desc: { type: String }
        }).validate({ journal, desc });
    
        if(!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }        
        Journals.insert({
            text: journal,
            desc: desc,
            complete: false,
            createAt: new Date(),
            user: Meteor.userId()
        });
        return 'success';
    },
    deleteJournal: function(journal) {
        // console.log(journal);
        if(Meteor.userId() !== journal.user) {
            throw new Meteor.Error('not-authorized');
        }
        Journals.remove(journal._id);
    },
    // addJournal(journal, desc){
    //     check(journal, String);
    //     if(!Meteor.userId()) {
    //         throw new Meteor.Error('not-authorized');
    //     }
    //     Journals.insert({
    //         text: journal,
    //         desc: desc,
    //         complete: false,
    //         createAt: new Date(),
    //         user: Meteor.userId()
    //     });
    // },
    toggleJournal: function(journal) {
        check(journal, Object);

        if(Meteor.userId() !== journal.user) {
            throw new Meteor.Error('not-authorized');
        }
        Journals.update(journal._id, {
            $set: {complete: !journal.complete}
        });
    },
    // deleteJournal(journal) {
    //     check(journal, Object);        
    //     if(Meteor.userId() !== journal.user) {
    //         throw new Meteor.Error('not-authorized');
    //     }
    //     Journals.remove(journal._id);
    // },
    editJournal: function(journal, desc){
        if(!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        Journals.update({
            text: journal,
            desc: desc
        });
    },
});
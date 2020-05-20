Meteor.methods({
    addJournal(journal){
        check(journal, String);
        if(!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        Journals.insert({
            text: journal,
            complete: false,
            createAt: new Date(),
            user: Meteor.userId()
        });
    },
    toggleJournal(journal) {
        check(journal, Object);

        if(Meteor.userId() !== journal.user) {
            throw new Meteor.Error('not-authorized');
        }
        Journals.update(journal._id, {
            $set: {complete: !journal.complete}
        });
    },
    deleteJournal(journal) {
        check(journal, Object);        
        if(Meteor.userId() !== journal.user) {
            throw new Meteor.Error('not-authorized');
        }
        Journals.remove(journal._id);
    }
});
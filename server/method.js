Meteor.methods({
    addJournal(journal){
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
        if(Meteor.userId() !== journal.user) {
            throw new Meteor.Error('not-authorized');
        }
        Journals.update(journal._id, {
            $set: {complete: !journal.complete}
        });
    },
    deleteJournal(journal) {
        console.log(journal.user);
        console.log(Meteor.userId());
        // if(Meteor.userId() !== journal.user) {
        //     throw new Meteor.Error('not-authorized');
        // }
        //Journals.remove(journal._id);
    }
});
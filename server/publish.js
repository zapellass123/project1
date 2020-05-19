Journals = new Mongo.Collection("journals");

Meteor.publish("allJournals", function(){
    return Journals.find();
});

Meteor.publish("userJournals", function(){
    return Journals.find({user: this.userId});
});
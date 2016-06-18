import { Meteor } from 'meteor/meteor';

Meteor.loggedUserId = function() {
  return Meteor.userId();
};

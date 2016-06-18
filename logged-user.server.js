import { Meteor } from 'meteor/meteor';

Meteor.loggedUserIdEnv = new Meteor.EnvironmentVariable();

Meteor.wrapUser = (userId, callback) => Meteor.loggedUserIdEnv.withValue(userId, callback);

Meteor.loggedUserId = function(scopeOrId) {
  let userId = this.userId;
  if(!userId) userId = scopeOrId && (_.isString(scopeOrId) ? scopeOrId : scopeOrId.userId);
  try {
    if(!userId) userId = Meteor.userId();
  } finally {
    if(!userId) userId = Meteor.loggedUserIdEnv.get();
    return userId;
  }
};

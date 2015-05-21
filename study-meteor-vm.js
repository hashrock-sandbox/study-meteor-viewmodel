if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Template.hello.helpers({
    items: function(){
      return [
        {name: "task1"},
        {name: "task2"}
      ]
    }
  })
  
  Template.hello.viewmodel({
    counter: function () {
      return Session.get('counter');
    },
    addCounter: function () {
      Session.set('counter', Session.get('counter') + 1);
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

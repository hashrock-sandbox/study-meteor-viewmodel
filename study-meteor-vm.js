Tasks = new Mongo.Collection("task");


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Template.hello.helpers({
    items: function(){
      return Tasks.find();
    }
  })
  
  Template.form.events({
    "submit form": function(event){
      var name = event.target.name.value;
      Tasks.insert({
        name: name,
        created: new Date()
      });
      event.target.name.value = "";
      event.preventDefault();
    }
  });
  
  Template.item.viewmodel(function(data) { return data; },{
      item: function(){
        Tasks.findOne(this._id());
      },
      removeItem: function(){
        Tasks.remove(this._id());
      }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

Tasks = new Mongo.Collection("task");

if (Meteor.isClient) {
  Template.form.viewmodel({
    formName: "",
    addTask: function(event){
      event.preventDefault();
      Tasks.insert({
        name: this.formName(),
        created: new Date()
      });
      this.formName("");
    }
  })
  Template.item.viewmodel(
    function(data) { return data; },{
      item: function(){
        Tasks.findOne(this._id());
      },
      removeItem: function(){
        Tasks.remove(this._id());
      }
  })
  Template.hello.viewmodel({
    items: function(){
      return Tasks.find();
    }
  },"items")
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

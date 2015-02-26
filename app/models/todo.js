import DS from "ember-data";

var todos = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});


todos.reopenClass ({
  FIXTURES: [
   {
     id: 1,
     title: 'Learn Ember.js',
     isCompleted: true
   },
   {
     id: 2,
     title: 'Actually, Ember CLI',
     isCompleted: false
   },
   {
     id: 3,
     title: 'Profit!',
     isCompleted: false
   },
   {
     id: 4,
     title: 'Eat food',
     isCompleted: false
   },
   {
     id: 5,
     title: 'TIY Front End Class',
     isCompleted: false
   },
  ]
});

export default todos;

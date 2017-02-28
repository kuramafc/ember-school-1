import Ember from 'ember';

export default Ember.Controller.extend({
  chefs: [ {name: 'Gordon Ramsay', avability: true},
           {name: 'Anthony Bourdaik', avability: false},
           {name: 'Rachael Ray', avability: true},
           {name: 'Jamie Oliver', avability: false},
           {name: 'Guy Fieri', avability: true}],
  actions: {
    exit: function(chef){
      Ember.set(chef, 'avability', false);
    },
    enter: function(chef){
      Ember.set(chef, 'avability', true);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return ['Jan Kowalski','Paweł Nowak',"Ewa Kusiba-Foryt"];
  }
});

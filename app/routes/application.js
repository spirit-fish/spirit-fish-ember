import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),
  model() {
    return this.get('ajax').request('https://api.giphy.com/v1/gifs/trending?api_key=5DYyxYScARZshsn38FrpiLbFGVFLHcrb&limit=1', {
      method: 'GET'
    }).then(resp => {
      window.document.title = resp.data[0].title; 
      return resp.data[0].images.original.url;
    });
  }
});

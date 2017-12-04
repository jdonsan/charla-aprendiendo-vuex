import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      files: [
        { id: 1, type: 'scss', name: 'search.scss' },
        { id: 2, type: 'js', name: 'app.js' },
        { id: 3, type: 'html', name: 'index.html' },
        { id: 4, type: 'scss', name: '_mixins.scss' },
      ]
    }
  }
});
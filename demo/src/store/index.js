import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex);

const FileStatus = {
  UNESTAGED: 1,
  STAGED: 2
}

export default new Vuex.Store({
  state() {
    return {
      files: [
        { id: 1, type: 'scss', name: 'search.scss', status: FileStatus.UNESTAGED },
        { id: 2, type: 'js', name: 'app.js', status: FileStatus.UNESTAGED },
        { id: 3, type: 'html', name: 'index.html', status: FileStatus.UNESTAGED },
        { id: 4, type: 'scss', name: '_mixins.scss', status: FileStatus.STAGED },
      ]
    }
  },
  getters: {
    unestagedFiles: state => state.files.filter(file => file.status === FileStatus.UNESTAGED),
    stagedFiles: state => state.files.filter(file => file.status === FileStatus.STAGED)
  },
  mutations: {
    changeToStagedFile(state, id) {
      state.files.forEach(file => {
        if (file.id === id) {
          file.status = FileStatus.STAGED
        }
      })
    },
    changeToUnestagedFile(state, id) {
      state.files.forEach(file => {
        if (file.id === id) {
          file.status = FileStatus.UNESTAGED
        }
      })
    }
  }
})
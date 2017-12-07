import Vuex from 'vuex'
import Vue from 'vue';
import orm from '@/orm';
import crypto from 'crypto';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      files: [
        { id: 1, type: 'scss', name: 'search.scss', staged: false },
        { id: 2, type: 'js', name: 'app.js', staged: false },
        { id: 3, type: 'html', name: 'index.html', staged: false },
        { id: 4, type: 'scss', name: '_mixins.scss', staged: false },
      ],

      commits: []
    }
  },

  getters: {
    unestagedFiles: state => state.files.filter(file => !file.staged),
    unestagedFilesCount: (state, getters) => getters.unestagedFiles.length,
    stagedFiles: state => state.files.filter(file => file.staged),
    stagedFilesCount: (state, getters) => getters.stagedFiles.length,
    unsynchronizedCommits: state => state.commits.filter(commit => !commit.synchronized),
    unsynchronizedCommitsCount: (state, getters) => getters.unsynchronizedCommits.length
  },

  mutations: {
    changeStatusFile(state, { id, status }) {
      state.files.forEach(file => {
        if (file.id === id) {
          file.staged = status
        }
      })
    },

    doCommit(state, comment) {
      state.commits.push({
        hash: crypto.randomBytes(20).toString('hex'),
        comment,
        files: state.files.filter(file => file.staged),
        synchronized: false
      })
      state.files = state.files.filter(file => !file.staged)
    },

    setCommits(state, commits) {
      state.commits = commits
    },

    syncCommits(state) {
      state.commits.map(commit => commit.synchronized = true)
    }
  },

  actions: {
    async getAllCommits({ commit }) {
      const commits = await orm.commits.orderBy('hash').toArray();
      commit('setCommits', commits || [])
    },

    async saveAllCommits({ commit, getters, state }) {
      commit('syncCommits')
      return await state.commits.map(commit => orm.commits.put(commit))
    }
  }
})
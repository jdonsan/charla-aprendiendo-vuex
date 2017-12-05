import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex);

const FileStatus = {
  UNESTAGED: 1,
  STAGED: 2
}

const CommitStatus = {
  UNSYNCHRONIZED: 1,
  SYNCHRONIZED: 2
}

export default new Vuex.Store({
  state() {
    return {
      files: [
        { id: 1, type: 'scss', name: 'search.scss', status: FileStatus.UNESTAGED },
        { id: 2, type: 'js', name: 'app.js', status: FileStatus.UNESTAGED },
        { id: 3, type: 'html', name: 'index.html', status: FileStatus.UNESTAGED },
        { id: 4, type: 'scss', name: '_mixins.scss', status: FileStatus.STAGED },
      ],

      commits: [
        { hash: '79c6755548b23de658329a1dd29eb79cec047b4c', comment: 'Initial Commit', status: CommitStatus.UNSYNCHRONIZED },
        { hash: '0bc1c1ed1b0079f095d384458d758ba643206679', comment: 'Second Commit', status: CommitStatus.UNSYNCHRONIZED },
        { hash: '75183383ea5716e427e7ffbad643400e87977608', comment: 'Initial Commit', status: CommitStatus.UNSYNCHRONIZED },
        { hash: 'b7ec41782774c57b050b296d1a15aaa32e155003', comment: 'Initial Commit', status: CommitStatus.SYNCHRONIZED }
      ]
    }
  },

  getters: {
    unestagedFiles: state => state.files.filter(file => file.status === FileStatus.UNESTAGED),
    unestagedFilesCount: (state, getters) => getters.unestagedFiles.length,
    stagedFiles: state => state.files.filter(file => file.status === FileStatus.STAGED),
    stagedFilesCount: (state, getters) => getters.stagedFiles.length,
    unsynchronizedCommitsCount: state => state.commits.filter(commit => commit.status === CommitStatus.UNSYNCHRONIZED).length
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
    },

    doCommit(state, comment) {
      state.commits.push({ hash: 'b7ec41782774c57b050b296d1a15aaa32e155003', comment, status: CommitStatus.UNSYNCHRONIZED })
    },

    syncCommits(state) {
      state.commits.map(commit => commit.status = CommitStatus.SYNCHRONIZED)
    }
  }
})
import Dexie from 'dexie';

const db = new Dexie('vuemix')

db.version(1).stores({
  commits: 'hash, comment, files, status'
})

export default db;
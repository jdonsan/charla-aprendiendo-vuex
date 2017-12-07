<template>
  <app-view title="Commit" class="view-home">
    <app-section :title="'Unestaged Files (' + unestagedFilesCount + ')'">
      <list v-if="unestagedFiles.length !== 0">
        <item-file 
          v-for="file in unestagedFiles"
          :key="file.id"
          :id="file.id"
          :type="file.type"
          :name="file.name"
          @click.native="changeStatusFile({ id: file.id, status: true })"
        />
      </list>
    </app-section>

    <app-section :title="'Staged Files (' + stagedFilesCount + ')'">
      <list v-if="stagedFiles.length !== 0">
        <item-file
          v-for="file in stagedFiles"
          :key="file.id"
          :id="file.id"
          :type="file.type"
          :name="file.name"
          @click.native="changeStatusFile({ id: file.id, status: false })"
        />
      </list>
    </app-section>

    <app-section title="Commit Message">
      <form-commit/>
    </app-section>
  </app-view>
</template>

<script>
import AppView from '@/components/AppView'
import AppSection from '@/components/AppSection'
import List from '@/components/List'
import ItemFile from '@/components/ItemFile'
import FormCommit from '@/components/FormCommit'
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'view-home',

  components: {
    AppView,
    AppSection,
    List,
    ItemFile,
    FormCommit
  },

  computed: mapGetters(['unestagedFiles', 'unestagedFilesCount', 'stagedFiles', 'stagedFilesCount']),
  methods: mapMutations(['changeStatusFile']),

  created() {
    this.$store.dispatch('getAllCommits')
  }
}
</script>





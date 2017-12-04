<template>
  <app-view title="Hacer commit">
    <h3>Unestaged Files</h3>
    <list>
      <item-file 
        v-for="file in unestagedFiles"
        :key="file.id"
        :id="file.id"
        :type="file.type"
        :name="file.name"
        @click.native="changeToStagedFile(file.id)"
      />
    </list>

    <h3>Staged Files</h3>
    <list>
      <item-file 
        v-for="file in stagedFiles"
        :key="file.id"
        :id="file.id"
        :type="file.type"
        :name="file.name"
        @click.native="changeToUnestagedFile(file.id)"
      />
    </list>

    <form-commit />
  </app-view>
</template>

<script>
import AppView from '@/components/AppView'
import List from '@/components/List'
import ItemFile from '@/components/ItemFile'
import FormCommit from '@/components/FormCommit'
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'view-home',

  components: {
    AppView,
    List,
    ItemFile,
    FormCommit
  },

  computed: mapGetters(['unestagedFiles', 'stagedFiles']),
  methods: mapMutations(['changeToStagedFile', 'changeToUnestagedFile'])
}
</script>




<template>
  <app-view title="Hacer commit">
    <h3>Unestaged Files</h3>
    <list>
      <item-file 
        v-for="file in files"
        :key="file.id"
        :id="file.id"
        :type="file.type"
        :name="file.name"
      />
    </list>

    <h3>Staged Files</h3>
    <list>
      <item-file 
        v-for="file in files"
        :key="file.id"
        :id="file.id"
        :type="file.type"
        :name="file.name"
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
import { mapState } from 'vuex';

export default {
  name: 'view-home',
  components: {
    AppView,
    List,
    ItemFile,
    FormCommit
  },
  computed: mapState(['files'])
}
</script>




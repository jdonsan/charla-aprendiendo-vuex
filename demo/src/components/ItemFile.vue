<template>
  <item class="item-file">
      <label :for="id">
        <img :src="icon" :alt="name">
        {{ name }}
      </label>
      <input type="checkbox" :name="id" :id="id">
  </item>
</template>

<script>
import Item from '@/components/Item'
import iconCss from '@/assets/css.png'
import iconJs from '@/assets/js.png'
import iconHtml from '@/assets/html.png'

export default {
  name: 'item-file',

  components: {
    Item
  },

  props: {
    id: {
      type: Number,
      required: true
    },

    type: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    }
  },

  computed: {
    icon: function () {
      const icons = {
        scss: iconCss,
        js: iconJs
      }
      
      return icons[this.type] || iconHtml;
    }
  }
}
</script>

<style lang="scss" scoped>
.item-file {
  img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5rem;
  }
}
</style>



<template>
  <div class="pt-2">
    <headerBar />
    <div
      class="container h-auto mx-auto bg-gray-400 border-gray-500 rounded h-12 mt-4 p-4"
      v-for="dog in dogs"
      :key="dog.sys.id"
    >
      <dog :dog="dog"></dog>
    </div>
  </div>
</template>

<script>
import contentful from '~/plugins/contentful.js';
import dog from '~/components/dog/dog.vue';
import headerBar from '~/components/header-bar/header-bar.vue';

export default {
  components: {
    dog,
    headerBar
  },
  async asyncData() {
    return contentful.getEntries({ content_type: 'dog' }).then(result => {
      return { dogs: result.items };
    });
  }
};
</script>

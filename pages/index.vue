<template>
  <section>
    <div class="container" v-for="dog in dogs" :key="dog.sys.id">
      <dog :dog="dog"></dog>
    </div>
  </section>
</template>

<script>
import contentful from '~/plugins/contentful.js';
import dog from '~/components/dog/dog.vue';

export default {
  components: {
    dog
  },
  async asyncData() {
    return contentful.getEntries({ content_type: 'dog' }).then(result => {
      return { dogs: result.items };
    });
  }
};
</script>

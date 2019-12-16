<template>
  <section>
    <h1 class="border-black">{{ dog.fields.breed }}</h1>
  </section>
</template>
<script>
export default {
  name: 'dog',
  props: {
    dog: {
      type: Object,
      required: true
    }
  }
};
</script>

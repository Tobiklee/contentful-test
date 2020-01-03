<template>
  <section>
    <div class="container h-auto mx-auto bg-gray-600 border-back rounded">
      <h1 class="border-black text-center font-semibold p-2">{{ dog.fields.breed }}</h1>
      <hr />
      <p class="text-center p-2">{{ dog.fields.description.content[0].content[0].value }}</p>
      <img
        class="w-full p-6"
        :src="dog.fields.picture.fields.file.url"
        :alt="dog.fields.breed + ' dog'"
      />
    </div>
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

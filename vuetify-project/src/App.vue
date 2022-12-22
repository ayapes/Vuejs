<template>
  <v-carousel cycle show-arrows-on-hover>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
      transition="fade-transition"></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: './c_test/0001.JPG',
        },
        {
          src: './c_test/0002.JPG',
        },
        {
          src: './c_test/0003.JPG',
        },
        {
          src: './c_test/0004.JPG',
        },
        {
          src: './c_test/0005.JPG',
        },
        {
          src: './c_test/0006.JPG',
        },
      ],
    }
  },
}
</script>
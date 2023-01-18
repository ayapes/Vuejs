<template>
  <v-app id="inspire">
    <v-tabs centered color="grey-darken-2">
      <v-tab v-for="(link,index) in links" :key="link">
        {{index+1}}:{{ link }}
      </v-tab>
    </v-tabs>
<ul>
  <li v-for="image in images" :key="image">
  <img :src="image" alt=""></li>
</ul>
  </v-app>
</template>

<script>
export default {
  data: () => {
    return {
      links: ["みかん", "りんご", "メロン", "いちご", "ぶどう"],
      images:[
        './images/nav1.png',
        './images/nav2.png',
        './images/nav3.png',
        './images/nav4.png',
      ]
    }
  },
}
</script>
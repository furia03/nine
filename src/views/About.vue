<template>
  <div class="about">
    <h1>This is an about page {{ $route.query }}</h1>
  </div>
</template>
<script>
export default {
  name: "App",
  metaInfo() {
    return {
      title: "furia03",
      titleTemplate: "about | %s",
      meta: [
        {
          name: "title",
          content: "about | furia03",
          vmid: "title",
        },
        {
          name: "description",
          content: "",
          vmid: "description",
        },
        {
          name: "keywords",
          content: "",
          vmid: "keywords",
        },
        {
          property: "og:type",
          content: "website",
          vmid: "og:type",
        },
        {
          property: "og:title",
          content: "about | furia03",
          vmid: "og:title",
        },
        {
          property: "og:description",
          content: "끼얔",
          vmid: "og:description",
        },
        {
          property: "og:image",
          content: process.env.BASE_URL + "img/android-chrome-192x192.png",
          vmid: "og:image",
        },
        {
          property: "og:url",
          content: process.env.VUE_APP_URL,
          vmid: "og:url",
        },
      ],
    };
  },
};
</script>

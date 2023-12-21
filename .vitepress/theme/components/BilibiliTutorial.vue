<template>
  <div class="custom-block danger">
    <p class="custom-block-title">BiliBili 喂饭教程:</p>
    <p>
      <iframe style="width: 100%; min-height: 300px" id="myVideo" :src="videoSrc" frameborder="0" scrolling="no" allow="autoplay" framespacing="0" allowfullscreen="" autoplay="autoplay"></iframe>
    </p>
  </div>
</template>

<script>
export default {
  name: "BilibiliTutorial",
  props: {
    videoId: {
      type: String,
      required: true,
      default: "",
    },
  },
  computed: {
    videoSrc() {
      return `//player.bilibili.com/player.html?aid=${this.videoId}&amp;cid=&amp;page=&amp;high_quality=1&amp;danmaku=0&amp;as_wide=1`;
    },
  },
};
</script>

<style scoped>
.custom-container iframe {
  height: 300px;
  width: 100%;
  margin: 20px 0;
}
</style>

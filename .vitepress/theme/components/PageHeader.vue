<template>
  <el-affix :offset="60">
    <el-page-header @back="goBack" style="background-color: var(--vp-nav-bg-color); padding: 15px 0">
      <template #content>
        <span class="text-large font-600 mr-3"> {{ props.content }} </span>
      </template>
    </el-page-header>
  </el-affix>
</template>

<script setup>
import { ElPageHeader, ElAffix } from "element-plus";
const props = defineProps(["content"]);

const goBack = () => {
  window.history.back();
};
</script>

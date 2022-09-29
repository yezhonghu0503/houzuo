<script lang="ts">
export default {
  setup() {},
};
</script>
<template>
  <el-row class="tool-menu" justify="center">
    <el-col v-for="item in 4" :span="6">aa</el-col>
  </el-row>
</template>

<style>
    .tool-menu{
        margin-top: 20px;
    }
</style>
<script lang="ts">
export default {
  setup() {},
};
</script>
<template>
  <el-row :gutter="20" class="tool-menu" justify="center">
    <el-col class="tool-col" v-for="item in 4" :span="5">aa</el-col>
  </el-row>
</template>

<style>
.tool-menu {
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.tool-col {
  background: white;
}
</style>
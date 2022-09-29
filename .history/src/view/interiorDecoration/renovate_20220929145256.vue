<script lang="ts">
export default {
  setup() {},
};
</script>
<template>
    <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
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
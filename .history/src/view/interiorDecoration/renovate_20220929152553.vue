<script lang="ts">
export default {
  setup() {},
};
</script>
<template>
    <el-row :gutter="20">
        <el-col :span="6"><div class="tool-col" />22</el-col>
        <el-col :span="6"><div class="tool-col" />33</el-col>
        <el-col :span="6"><div class="tool-col" />3</el-col>
        <el-col :span="6"><div class="tool-col" />33</el-col>
      </el-row>
</template>

<style>
.tool-menu {
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
}
.tool-col {
  background: white;
}
</style>
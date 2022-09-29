<script lang="ts">
export default {
  setup() {},
};
</script>
<template>
  <el-row :gutter="10" class="tool-menu" justify="center">
    <el-col v-for="item in 4" :span="6">
        <div class="tool-main">aaa</div>
    </el-col>
  </el-row>
</template>

<style>
.tool-menu {
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  padding:0 20px
}
.tool-main {
  background: white;
}
</style>
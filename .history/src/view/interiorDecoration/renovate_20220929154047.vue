<script lang="ts">
export default {
  setup() {},
};
</script>
<template>
  <el-row :gutter="5" class="tool-menu" justify="center">
    <el-col v-for="item in 4" :span="6">
        <div class="tool-main">
            <div class="tool-name">测量面积</div>
            <div class="tool-parameter"></div>
        </div>
    </el-col>
  </el-row>
</template>

<style>
.tool-menu {
  height: 80px;
  margin-top: 20px;
  padding:0 15px
}
.tool-main {
  background: white;
}
.tool-name{
    height: 25px;
    font-size: 10px;
    border-bottom: 2px #f6f6f6;
}
.tool-parameter{
    height: 53px;
    background: white;
}
</style>
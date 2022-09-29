<script lang="ts">
export default {
  setup() {},
};
</script>
<template>
  <el-row :gutter="5" class="tool-menu" justify="center">
    <el-col v-for="item in 2" :span="6">
        <div class="tool-main">
            <div class="tool-name">测量面积</div>
            <div class="tool-parameter"></div>
        </div>
    </el-col>
    <el-col v-for="item in 2" :span="6">
        <div class="tool-main">
            <div class="tool-name">测量面积</div>
            <div class="tool-parameter">
                <input type="text" value="111">
            </div>
        </div>
    </el-col>
  </el-row>
</template>

<style>
.tool-menu {
  height: 85px;
  margin-top: 20px;
  padding:0 15px
}
.tool-main {
  background: white;
}
.tool-name{
    height: 25px;
    font-size: 10px;
    line-height: 25px;
    border-bottom: 5px solid #f6f6f6;
}
.tool-parameter {
    height: 55px;
    line-height: 55px;
    background: white;
}
</style>
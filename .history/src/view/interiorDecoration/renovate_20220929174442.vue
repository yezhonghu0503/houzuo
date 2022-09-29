<script lang="ts">
export default {
  setup() {
    let selectList = ["a","n","c","d"]

    return {
        selectList
    }
  },
};
</script>
<template>
  <el-row :gutter="5" class="tool-menu" justify="center">
    <el-col v-for="item in 2" :span="6">
      <div class="tool-main">
        <div class="tool-name">测量面积</div>
        <div class="tool-parameter">
          <input class="tool-input" type="text" value="00.0" />
        </div>
      </div>
    </el-col>
    <el-col v-for="item in 2" :span="6">
      <div class="tool-main">
        <div class="tool-name">测量面积</div>
        <div class="tool-parameter">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  1231
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="btn">111</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style>
.tool-menu {
  height: 85px;
  margin-top: 20px;
  padding: 0 15px;
}
.tool-main {
  background: white;
}
.tool-name {
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
.tool-input {
  text-align: center;
  font-size: 24px;
  height: 35px;
  width: 100%;
  font-weight: 500;
  text-decoration-line: underline;
  color: rgba(42, 130, 228, 1);
}
.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
</style>
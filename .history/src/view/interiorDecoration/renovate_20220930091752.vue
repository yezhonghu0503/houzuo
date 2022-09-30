<script lang="ts" >
import { ref } from "vue";
export default {
  setup() {
    // let [paintColor,digital] = [["已下单发货", "未下单"],["厨房空间","卫浴空间","阳台空间"]];
    let paintAndDigit = [
      {
        toolname: "微装空间",
        selectlist: ["厨房空间", "卫浴空间", "阳台空间"],
      },
      {
        toolname: "配套装备",
        selectlist: ["已下单发货", "未下单"],
      },
    ];
    let defaultParameter: string = "";
    let demo = 0;
    function getToolSelect(e: any) {
      defaultParameter = e.target.innerText;
      console.log(defaultParameter);
      demo = 1111;
    }
    return {
      paintAndDigit,
      getToolSelect,
      defaultParameter,
      demo
    };
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
    <el-col v-for="item in paintAndDigit" :span="6">
      <div class="tool-main">
        <div class="tool-name">{{ item.toolname }}</div>
        <div class="tool-parameter">
          <el-dropdown class="tool-dropdown">
            <span class="el-dropdown-link">
              <!-- {{defaultParameter?defaultParameter:item.selectlist[0]}} -->
              {{ defaultParameter }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  @click="getToolSelect"
                  v-for="items in item.selectlist"
                  >{{ items }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row class="instruction-list">
    
  </el-row>
  <el-row justify="center">
    <el-col class="tiles" v-for="item in 3" :span="24">
      <div class="show-tiles">
        <el-row class="tiles-up">
          <el-col :span="12"
            ><h3 class="tiles-package-name">
              康居套餐
              <div class="tiles-package-introduce">
                陶瓷墙地砖300集成吊顶、灯具
              </div>
            </h3></el-col
          >
          <el-col :span="12"><div class="tiles-package-price">123</div></el-col>
        </el-row>
        <el-row class="tiles-down" justify="end">
          <el-col :span="6"
            >拆护费用
            <div>{{demo}}</div></el-col
          >
          <el-col :span="6">
            翻新费用
            <div>3369.00</div>
          </el-col>
        </el-row>
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
.tool-dropdown {
  height: 55px;
  line-height: 55px;
  font-size: 10px;
  font-weight: 400;
  color: rgba(212, 48, 48, 1);
}
.instruction-list {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: end;
}
.instruction-list svg {
  margin-right: 15px;
}
.tiles {
  height: 150px;
  margin-top: 15px;
}
.show-tiles {
  width: 92vw;
  height: 150px;
  margin: 0 auto;
  background: white;
}
.tiles-up {
  height: 100px;
}
.tiles-package-name {
  margin-left: 20px;
  text-align: left;
  margin-top: 10px;
}
.tiles-package-price {
  height: 100px;
  font-size: 20px;
  font-weight: 700;
  line-height: 80px;
  color: rgba(42, 130, 228, 1);
  margin-right: 20px;
  text-align: right;
}
.tiles-package-introduce {
  width: 100px;
  font-size: 10px;
  font-weight: 400;
}
.tiles-down {
  margin-top: 10px;
  font-size: 10px;
}
</style>
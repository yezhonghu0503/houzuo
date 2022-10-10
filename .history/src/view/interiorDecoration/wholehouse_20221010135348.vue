<script lang="ts" >
import { onMounted, reactive, ref } from "vue";
import appdata from "../../static/data.json";
import { useRoute } from "vue-router";

//数据初始化
let comboList = reactive(appdata.refurbishComboList);
let wholehouseStairwell = reactive(appdata.wholehouseStairwell);

//函数方法
function getToolSelect(index: any, event: any) {
  wholehouseStairwell[index].selectedtoolname = event.target.innerText;
}

//出口
export default {
  setup() {
    return {
      wholehouseStairwell,
      getToolSelect,
      comboList,
    };
  },
};
</script>
<template>
  <el-row :gutter="5" class="tool-menu" justify="center">
    <el-col v-for="item in 1" :span="6">
      <div class="tool-main">
        <div class="tool-name">房间面积</div>
        <div class="tool-parameter">
          <el-row justify="center">
            <el-col class="parameter-list" :span="8">
              <div class="parameter-name"></div>
              <input
                class="tool-input"
                maxlength="2"
                onkeyup="this.value=(this.value.match(/\d+(\.\d{0,2})?/)||[''])[0]"
                type="text"
                value="0"
              />
            </el-col>
          </el-row>
        </div>
      </div>
    </el-col>
    <el-col v-for="item in 1" :span="12">
      <div class="tool-main">
        <div class="tool-name">功能间数量</div>
        <div class="tool-parameter">
          <el-row justify="center">
            <el-col class="parameter-list" v-for="item in 3" :span="8">
              <div class="parameter-name">卫生间</div>
              <input
                class="tool-input"
                maxlength="2"
                onkeyup="this.value=(this.value.match(/\d+(\.\d{0,2})?/)||[''])[0]"
                type="text"
                value="0"
              />
            </el-col>
          </el-row>
        </div>
      </div>
    </el-col>
    <el-col v-for="(item, index) in wholehouseStairwell" :span="6">
      <div class="tool-main">
        <div class="tool-name">{{ item.toolname }}</div>
        <div class="tool-stairwell">
          <el-dropdown class="tool-dropdown">
            <span class="el-dropdown-link">
              <!-- {{ defaultParameter ? defaultParameter : item.selectlist[0] }} -->
              {{ item.selectedtoolname }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  @click="getToolSelect(index, $event)"
                  v-for="items in item.selectlist"
                  >{{ items }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div class="tool-input-main">
            <input
              class="tool-input-special"
              maxlength="2"
              onkeyup="this.value=(this.value.match(/\d+(\.\d{0,2})?/)||[''])[0]"
              type="text"
              value="0"
            />
            <div style="font-size: 20px; color: rgba(42, 130, 228, 1)">F</div>
          </div>
        </div>
      </div>
    </el-col>
    <!-- <el-col v-for="item in 1" :span="6">
        <div class="tool-main">
          <div class="tool-name">彩涂墙面</div>
          <div class="tool-parameter">
            <input
              class="tool-input"
              maxlength="2"
              onkeyup="this.value=(this.value.match(/\d+(\.\d{0,2})?/)||[''])[0]"
              type="text"
              value="0"
            />
          </div>
        </div>
      </el-col> -->
  </el-row>
  <el-row :gutter="5" class="tool-menu" justify="center">
    <el-col v-for="item in 1" :span="10">
      <div class="tool-main">
        <div class="tool-name">橱柜尺寸</div>
        <div class="tool-parameter">
          <el-row justify="center">
            <el-col class="parameter-list" :span="8">
              <div style="height:50%">
                <input
                class="tool-input"
                maxlength="2"
                onkeyup="this.value=(this.value.match(/\d+(\.\d{0,2})?/)||[''])[0]"
                type="text"
                value="0"
              /><div>吊柜/m</div>
              </div>
              <div style="height:50%">
                <input
                class="tool-input"
                maxlength="2"
                onkeyup="this.value=(this.value.match(/\d+(\.\d{0,2})?/)||[''])[0]"
                type="text"
                value="0"
              /><div>吊柜/m</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-col>
    <el-col v-for="item in 1" :span="6">
      <div class="tool-main">
        <div class="tool-name">功能间数量</div>
        <div class="tool-parameter">
          <el-row justify="center">
            <el-col class="parameter-list" v-for="item in 3" :span="8">
              <div class="parameter-name">卫生间</div>
              <input
                class="tool-input"
                maxlength="2"
                onkeyup="this.value=(this.value.match(/\d+(\.\d{0,2})?/)||[''])[0]"
                type="text"
                value="0"
              />
            </el-col>
          </el-row>
        </div>
      </div>
    </el-col>
    <el-col v-for="(item, index) in wholehouseStairwell" :span="8">
      <div class="tool-main">
        <div class="tool-name">{{ item.toolname }}</div>
        <div class="tool-stairwell">
          <el-dropdown class="tool-dropdown">
            <span class="el-dropdown-link">
              <!-- {{ defaultParameter ? defaultParameter : item.selectlist[0] }} -->
              {{ item.selectedtoolname }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  @click="getToolSelect(index, $event)"
                  v-for="items in item.selectlist"
                  >{{ items }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div class="tool-input-main">
            <input
              class="tool-input-special"
              maxlength="2"
              onkeyup="this.value=(this.value.match(/\d+(\.\d{0,2})?/)||[''])[0]"
              type="text"
              value="0"
            />
            <div style="font-size: 20px; color: rgba(42, 130, 228, 1)">F</div>
          </div>
        </div>
      </div>
    </el-col>
    <!-- <el-col v-for="item in 1" :span="6">
        <div class="tool-main">
          <div class="tool-name">彩涂墙面</div>
          <div class="tool-parameter">
            <input
              class="tool-input"
              maxlength="2"
              onkeyup="this.value=(this.value.match(/\d+(\.\d{0,2})?/)||[''])[0]"
              type="text"
              value="0"
            />
          </div>
        </div>
      </el-col> -->
  </el-row>

  <!-- <el-row class="instruction-list">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
    >
      <defs><rect id="path_0" x="0" y="0" width="30" height="30" /></defs>
      <g opacity="1" transform="translate(0 0)  rotate(0 15 15)">
        <mask id="bg-mask-0" fill="white">
          <use xlink:href="#path_0"></use>
        </mask>
        <g mask="url(#bg-mask-0)">
          <path
            id="路径 1"
            fill-rule="evenodd"
            style="fill: #e9e9e9"
            transform="translate(0 0)  rotate(0 15 15)"
            opacity="0.01"
            d="M0,30L30,30L30,0L0,0L0,30Z "
          />
          <path
            id="路径 2"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(17.499999999999996 20.312499999999996)  rotate(0 4.375 1.7763568394002505e-15)"
            d="M0,0L8.75,0 "
          />
          <path
            id="路径 3"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(17.499999999999996 25.937499999999993)  rotate(0 4.375 1.7763568394002505e-15)"
            d="M0,0L8.75,0 "
          />
          <path
            id="路径 4"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(3.75 8.124999999999998)  rotate(0 4.999999999999999 0)"
            d="M0,0L10,0 "
          />
          <path
            id="路径 5"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(8.749999999999998 3.1249999999999996)  rotate(0 0 5)"
            d="M0,0L0,10 "
          />
          <path
            id="路径 6"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(3.75 3.1249999999999996)  rotate(0 11.25 11.249999999999998)"
            d="M22.5,0L0,22.5 "
          />
        </g>
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
    >
      <defs><rect id="path_0" x="0" y="0" width="30" height="30" /></defs>
      <g opacity="1" transform="translate(0 0)  rotate(0 15 15)">
        <mask id="bg-mask-0" fill="white">
          <use xlink:href="#path_0"></use>
        </mask>
        <g mask="url(#bg-mask-0)">
          <path
            id="路径 1"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(26.25 4.999999999999999)  rotate(0 0 5)"
            d="M0,0L0,10 "
          />
          <path
            id="路径 2"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(3.75 15)  rotate(0 0 4.999999999999998)"
            d="M0,0L0,10 "
          />
          <path
            id="路径 3"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(3.75 15)  rotate(0 9.531249999999998 5.625)"
            d="M0,0C0,6.21 5.04,11.25 11.25,11.25C14.28,11.25 17.04,10.05 19.06,8.09 "
          />
          <path
            id="路径 4"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(6.905499999999998 3.75)  rotate(0 9.672468749999998 5.625)"
            d="M19.34,11.25C19.34,5.04 14.31,0 8.09,0C4.92,0 2.05,1.32 0,3.44 "
          />
        </g>
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
    >
      <defs><rect id="path_0" x="0" y="0" width="30" height="30" /></defs>
      <g opacity="0.81" transform="translate(0 0)  rotate(0 15 15)">
        <mask id="bg-mask-0" fill="white">
          <use xlink:href="#path_0"></use>
        </mask>
        <g mask="url(#bg-mask-0)">
          <path
            id="路径 1"
            fill-rule="evenodd"
            style="fill: #e9e9e9"
            transform="translate(0 0)  rotate(0 15 15)"
            opacity="0.01"
            d="M0,30L30,30L30,0L0,0L0,30Z "
          />
          <path
            id="路径 2"
            fill-rule="evenodd"
            style="fill: #333333"
            transform="translate(18.75 3.75)  rotate(0 3.1249999999999996 3.1249999999999996)"
            opacity="1"
            d="M6.25,3.12C6.25,1.4 4.85,0 3.12,0C1.4,0 0,1.4 0,3.12C0,4.85 1.4,6.25 3.12,6.25C4.85,6.25 6.25,4.85 6.25,3.12Z "
          />
          <path
            id="路径 2"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(18.75 3.75)  rotate(0 3.1249999999999996 3.1249999999999996)"
            d="M6.25,3.12C6.25,1.4 4.85,0 3.12,0C1.4,0 0,1.4 0,3.12C0,4.85 1.4,6.25 3.12,6.25C4.85,6.25 6.25,4.85 6.25,3.12Z "
          />
          <path
            id="路径 3"
            fill-rule="evenodd"
            style="fill: #333333"
            transform="translate(4.999999999999999 11.874999999999998)  rotate(0 3.1249999999999996 3.1249999999999996)"
            opacity="1"
            d="M6.25,3.12C6.25,1.4 4.85,0 3.12,0C1.4,0 0,1.4 0,3.12C0,4.85 1.4,6.25 3.12,6.25C4.85,6.25 6.25,4.85 6.25,3.12Z "
          />
          <path
            id="路径 3"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(4.999999999999999 11.874999999999998)  rotate(0 3.1249999999999996 3.1249999999999996)"
            d="M6.25,3.12C6.25,1.4 4.85,0 3.12,0C1.4,0 0,1.4 0,3.12C0,4.85 1.4,6.25 3.12,6.25C4.85,6.25 6.25,4.85 6.25,3.12Z "
          />
          <path
            id="路径 4"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(10.836749999999999 8.4840625)  rotate(0 3.9565937499999997 2.397156249999999)"
            d="M7.91,0L0,4.79 "
          />
          <path
            id="路径 5"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(10.836749999999999 16.6024375)  rotate(0 4.168874999999998 2.4634375000000013)"
            d="M0,0L8.34,4.93 "
          />
          <path
            id="路径 6"
            fill-rule="evenodd"
            style="fill: #333333"
            transform="translate(18.75 19.999999999999996)  rotate(0 3.1249999999999996 3.1249999999999996)"
            opacity="1"
            d="M0,3.12C0,4.85 1.4,6.25 3.12,6.25C4.85,6.25 6.25,4.85 6.25,3.12C6.25,1.4 4.85,0 3.12,0C1.4,0 0,1.4 0,3.12Z "
          />
          <path
            id="路径 6"
            style="
              stroke: #383838;
              stroke-width: 1.3333333333333333;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(18.75 19.999999999999996)  rotate(0 3.1249999999999996 3.1249999999999996)"
            d="M0,3.12C0,4.85 1.4,6.25 3.12,6.25C4.85,6.25 6.25,4.85 6.25,3.12C6.25,1.4 4.85,0 3.12,0C1.4,0 0,1.4 0,3.12Z "
          />
        </g>
      </g>
    </svg>
  </el-row> -->
  <el-row justify="center">
    <el-col class="tiles" v-for="item in comboList" :span="24">
      <div class="show-tiles">
        <el-row class="tiles-up">
          <el-col :span="12"
            ><h3 class="tiles-package-name">
              {{ item.comboname }}
              <div
                v-for="describeitem in item.combodescribe"
                class="tiles-package-introduce"
              >
                {{ describeitem }}
              </div>
            </h3></el-col
          >
          <el-col :span="12"
            ><div class="tiles-package-price">
              {{ item.grossprice }}
            </div></el-col
          >
        </el-row>
        <el-row class="tiles-down" justify="end">
          <el-col v-for="initems in item.pricelist" :span="6"
            >{{ initems.pricename }}
            <div>{{ initems.price }}</div></el-col
          >
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<style>
.tool-menu {
  height: 85px;
  margin-top: 15px;
  padding: 0 15px;
}
.tool-main {
  background: white;
}
.tool-name {
  height: 25px;
  font-size: 10px;
  line-height: 25px;
  border-bottom: 3px solid #f6f6f6;
}
.tool-parameter {
  height: 65px;
  background: white;
}
.tool-stairwell {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65px;
  background: white;
  text-align: center;
}
.parameter-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.parameter-name {
  font-size: 8px;
  height: 30px;
  line-height: 30px;
}
.tool-input {
  text-align: center;
  font-size: 20px;
  height: 30px;
  width: 100%;
  font-weight: 500;
  text-decoration-line: underline;
  color: rgba(42, 130, 228, 1);
}
.tool-input-main {
  display: flex;
  flex-direction: row;
  line-height: 32px;
}
.tool-input-special {
  margin:0 auto;
  text-align: center;
  font-size: 20px;
  height: 30px;
  width: 20px;
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
  height: 30px;
  line-height: 30px;
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
  margin-top: 5px;
}
.tiles-down {
  margin-top: 10px;
  font-size: 10px;
}
</style>
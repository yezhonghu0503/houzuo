<script lang="ts">
import { ref } from "@vue/reactivity";
import {
  useRouter,
  useRoute,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from "vue-router";

export default {
  setup() {
    //路由跳转
    const router = useRouter();
    const route = useRoute();
    function goInteriorDecoration(e:any){
      console.log(e)
      router.push({
        path:'/interiorDecoration'
      })
    }
    let menulist = [
      {
        logoUrl: "src/static/刷子.png",
        menuName: "炫彩刷新",
        menuAlias: "Wall Color",
        gotoPage:goInteriorDecoration
      },
      {
        logoUrl: "src/static/床头柜.png",
        menuName: "微装翻新",
        menuAlias: "Micro Room",
      },
      {
        logoUrl: "src/static/U盘.png",
        menuName: "整装定制",
        menuAlias: "Full Decoration",
      },
      {
        logoUrl: "src/static/计划清单.png",
        menuName: "适老化改造",
        menuAlias: "Suitable For Old",
      },
      {
        logoUrl: "src/static/电影.png",
        menuName: "定制星",
        menuAlias: "Customization",
      },
      {
        logoUrl: "src/static/衣柜.png",
        menuName: "后作小店",
        menuAlias: "Store",
      },
    ];
    return {
      menulist,
      goInteriorDecoration
    };
  },
};
</script>

<template>
  <div id="head">
    <el-row class="head-row" :gutter="2">
      <el-col :span="16">
        <el-container class="head-tit">
          <el-header>Header</el-header>
          <el-footer><h1>後作变新家</h1></el-footer>
        </el-container>
      </el-col>
      <el-col :span="8" align="middle">
        <img
          style="margin-top: 15px"
          src="https://lacblog.top/upload/2022/06/H2022%20(3).png.png"
          alt=""
        />
      </el-col>
    </el-row>
  </div>
  <div id="main">
    <el-row justify="center">
      <el-col @click="item.gotoPage" ref="item.menuName" class="menu-col" v-for="item in menulist" :span="11">
        <div class="menu">
          <div class="submenu">
            <img class="menu-logo" :src="item.logoUrl" alt="" />
            <div>
              {{ item.menuName }}
              <div style="font-size: 12px">{{ item.menuAlias }}</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="menu-col" :span="11">
        <div class="more">
          <el-icon style="margin-left:10px" size="22px" color="#636e72"><Expand /></el-icon>
        </div>
      </el-col>
      <el-col :span="11">
        
      </el-col>
    </el-row>
  </div>
</template>

<style>
* {
  border: 0;
  padding: 0;
  margin: 0;
}
#head {
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 143px;
  /* background: turquoise; */
}
.head-row {
  height: 100%;
}
.head-tit {
  text-align: left;
  line-height: 60px;
}
.head-tit h1 {
  font-size: 30px;
  line-height: 40px;
  color: rgba(46, 74, 159, 1);
}
.menu-col {
  display: flex;
  justify-content: center;
}
.menu {
  width: 10em;
  height: 10em;
  background: rgb(255, 255, 255);
  margin-top: 20px;
  display: flex;
}
.submenu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}
.menu-logo {
  width: 50px;
  height: 50px;
}
.more {
  width: 10em;
  height: 4em;
  background: rgb(255, 255, 255);
  margin: 20px 0;
  display:flex;
  justify-content: start;
  align-items:center;
}
</style>
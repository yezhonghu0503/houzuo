<script lang="ts">
    import { ref } from 'vue'
  import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
    export default {
      setup() {
        const router = useRouter()
        const route = useRoute()
        router.push({
            path:'/'
        })
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
    </style>
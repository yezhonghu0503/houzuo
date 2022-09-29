<script lang="ts">
import { ref } from "vue";
import {
  useRouter,
  useRoute,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
  },
};
</script>
    
    <template>
  <div id="head">
    <el-row class="head-row" :gutter="2">
      <el-col :span="16">
        <el-container class="head-tit">
          <el-header>Header</el-header>
          <el-footer><h1>炫彩刷新</h1></el-footer>
        </el-container>
      </el-col>
      <el-col :span="8" align="middle">
        <!-- <img
          style="margin-top: 15px"
          src="https://lacblog.top/upload/2022/06/H2022%20(3).png.png"
          alt=""
        /> -->
        <svg
          style="margin-top: 15px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="118"
          height="118"
          viewBox="0 0 118 118"
          fill="none"
        >
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                transform="translate(0 0) scale(0.004975124378109453 0.004975124378109453) rotate(0)"
                xlink:href="#image0"
              />
            </pattern>
            <image
              id="image0"
              width="201"
              height="201"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
          <path
            id="H2022 (2).png"
            fill-rule="evenodd"
            style="fill: url(#pattern0)"
            transform="translate(0 0)  rotate(0 59 59)"
            opacity="1"
            d="M0,118L118,118L118,0L0,0L0,118Z "
          />
        </svg>
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
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 50px;
  color: rgba(56, 56, 56, 1);
  text-align: left;
  /*vertical-align: top;*/
}
</style>
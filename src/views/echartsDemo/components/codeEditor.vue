<template>
  <div id="codeEditor">
    <div class="code-box">
      <JsMonacoEditor v-model="code" @change="changeCode" />
    </div>
    <div class="view-box">
      <el-button type="primary" size="small" @click="refreshChart">运行/刷新</el-button>
      <div ref="chart" class="chart" />
    </div>
  </div>
</template>

<script>
import JsMonacoEditor from '@/businessComponents/jsMonacoEditor'

let timer = null
/*
* @Description: 代码编辑器
* @Author: linmt
* @Date: @Date: 2022-09-11 09:01:31
*/
export default {
  name: 'CodeEditor',
  components: {
    JsMonacoEditor
  },
  props: {
    echartDemoData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      code: 'const option = {};',
      chart: null
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    if (this.echartDemoData) {
      this.code = this.echartDemoData.code
    }
  },
  mounted() {
    this.refreshChart()
  },
  beforeDestroy() {
    if (timer) window.clearInterval(timer)
  },
  methods: {
    changeCode() {
      this.refreshChart()
    },
    refreshChart() {
      let _option = null
      try {
        const funCode = new Function(`option=null;${this.code};return option;`)
        _option = funCode()
      } catch (e) {
        console.error(e)
      }

      if (!_option) {
        this.$message.error('代码存在问题')
        if (this.chart) {
          this.chart.clear()
        }
        return
      }

      if (_option) {
        if (!this.chart) {
          this.chart = window.echarts.init(this.$refs.chart)
        } else {
          this.chart.clear()
        }

        if (timer) window.clearInterval(timer)
        timer = setInterval(() => {
          if (this.chart) {
            this.chart.resize()
          }
        }, 200)

        this.chart.setOption(_option, true)
      }
    }
  }
}

</script>
<style lang='scss' scoped>
#codeEditor{
  height: 100%;
  width: 100%;
  display: flex;
  .code-box{
    width: 50%;
    height: 100%;
  }
  .view-box{
    width: 50%;
    height: 100%;
    padding-left: 10px;
    .chart{
      margin-top: 20px;
      height: calc(100% - 80px);
      width: 100%;
    }
  }
}
</style>

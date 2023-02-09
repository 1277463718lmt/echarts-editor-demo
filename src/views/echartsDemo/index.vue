<template>
  <div id="echartsDemo">
    <CodeEditor :echartDemoData="echartDemoData" />
  </div>
</template>

<script>
import CodeEditor from './components/codeEditor'
import echartStore from './js/echartStore'

/*
* @Description: Echarts示例管理
* @Author: linmt
* @Date: @Date: 2022-09-10 14:03:09
*/
export default {
  name: 'EchartsDemo',
  components: {
    CodeEditor
  },
  data() {
    return {
      visibleCodeEditor: true,
      echartDemoData: echartStore[0]
    }
  },
  mounted() {
  },
  methods: {
  }
}

</script>
<style lang='scss'>
#echartsDemo{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

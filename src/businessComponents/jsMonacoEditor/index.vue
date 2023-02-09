<template>
  <div id="jsMonacoEditor" ref="main" />
</template>

<script>
import * as monaco from 'monaco-editor'

/*
* @Description: monacoEditor组件封装
* @Author: linmt
* @Date: @Date: 2022-09-11 08:45:55
*/
export default {
  name: 'JsMonacoEditor',
  components: {
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      monacoEditor: null
    }
  },
  computed: {

  },
  watch: {
    value() {
      this.init()
    }
  },
  created() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.monacoEditor) {
        return
      }

      this.monacoEditor = monaco.editor.create(this.$refs.main, {
        theme: 'vs', // 主题
        value: this.value, // 默认显示的值
        language: 'javascript',
        folding: true, // 是否折叠
        foldingHighlight: true, // 折叠等高线
        foldingStrategy: 'indentation', // 折叠方式  auto | indentation
        showFoldingControls: 'always', // 是否一直显示折叠 always | mouseover
        disableLayerHinting: true, // 等宽优化
        emptySelectionClipboard: false, // 空选择剪切板
        selectionClipboard: false, // 选择剪切板
        automaticLayout: true, // 自动布局
        codeLens: false, // 代码镜头
        scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
        colorDecorators: true, // 颜色装饰器
        accessibilitySupport: 'off', // 辅助功能支持  "auto" | "off" | "on"
        lineNumbers: 'on', // 行号 取值： "on" | "off" | "relative" | "interval" | function
        lineNumbersMinChars: 5, // 行号最小字符   number
        enableSplitViewResizing: false,
        readOnly: false, // 是否只读  取值 true | false
        minimap: {
          enabled: true // 是否启用预览图
        } // 预览图设置
      })

      const self = this
      const changeValueFun = _.debounce(function() {
        self.changeValue()
      }, 500)

      this.monacoEditor.onDidChangeModelContent((e) => {
        changeValueFun()
      })
    },
    changeValue() {
      this.$emit('change', this.monacoEditor.getValue())
    }
  }
}

</script>
<style lang='scss' scoped>
#jsMonacoEditor{
  height: 100%;
  width: 100%;
}
</style>

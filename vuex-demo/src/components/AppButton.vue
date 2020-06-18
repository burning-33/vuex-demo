<script>
export default {
  render (h) {
    return h('div', {
      'class': {
        btn: true,
        success: this.type === 'sucess',
        error: this.type === 'error',
        warn: this.type === 'warn',
        default: this.type === 'default'
      },
      domProps: {
        innerHTML: this.$slots.default[0].text
      },
      on: {
        click: this.clickHandle
      }
    })
  },
  methods: {
    clickHandle () {
      console.log(this.$slots, '点击事件')
      console.log(this.$parent, '父组件实例')
      console.log(this.$root, '根组件实例')
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      default: 'default'
    }
  }
}
</script>

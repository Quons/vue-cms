<template>
  <div>
    <button type="button" class="mui-btn mui-btn-royal">
      紫色
    </button>
  </div>
</template>

<script>
import '../lib/mui/css/mui.min.css'
export default {
  name: 'TransitionDemo15',
  data () {
    return {
      t: null
    }
  },

  render: function (createElement) {
    return createElement('h1', 'zhe么好')
  },

  methods: {}
}
</script>
 
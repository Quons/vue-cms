<template>
  <div>
    <mt-button type="danger" size="small" icon="back">default</mt-button>
    <mt-button type="danger" size="large" plain @click="show"
      >default</mt-button
    >
    <mt-button type="danger" size="normal" disabled>default</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import '../css/app.css'
export default {
  name: 'TransitionDemo15',
  data () {
    return {
      t:null
    }
  },

  render: function (createElement) {
    return createElement('h1', 'zhe么好')
  },
  created() {
    this.getList()
  },
  methods: {
   
    getList(){
       this.show(),
      setTimeout(() => {
        this.t.close()
      }, 3000);
    },
    show () {
      this.t=Toast({
         message:'提示',
        position: 'top',
        duration: 55000,
        iconClass: 'glyphicon glyphicon-cog',
        className: 'mytoast'
      })
    }
  }
}
</script>
 
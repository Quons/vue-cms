<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
    >
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加品牌</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          Id:
          <input type="text" v-model="id" class="form-control">
        </label>

        <label>
          Name:
          <input type="text" v-model="name" class="form-control">
        </label>
        <button class="btn btn-primary" @click="add">添加</button>

        <label for>
          搜索框:
          <input v-model="keyword" class="form-control" type="text">
        </label>
        <button class="btn btn-primary" @click>搜索</button>
      </div>
    </div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Ctime</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in search(keyword)" :key="item.id">
          <td>{{item.id}}</td>
          <td v-text="item.name"></td>
          <td>{{item.addTime|dateformat}}</td>
          <td>
            <a @click.prevent="del(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
export default {
  name: "vueDemo",
  data() {
    return {
      id: "",
      name: "",
      keyword: "",
      list: []
    };
  },
  created() {
    this.getBrandList();
  },
  methods: {
    getBrandList() {
      this.$http
        .post("brand/getBrandList", "")
        .then(response => {
          this.list = response.data.data;
        });
    },
    add() {
      this.$http
        .post("brand/addBrand", { name: this.name })
        .then(result => {
          if (result.data.code == 99999) {
            this.getBrandList();
          } else {
            alert(result.data.msg);
          }
        });
      this.id = this.name = "";
    },
    del(id) {
      console.log('id:' + id)
      this.$http
        .post("brand/deleteBrand", { id: id })
        .then(result => {
          if (result.data.code === 99999) {
            this.getBrandList();
          } else {
            alert(result.data.msg)
          }
        })
    },
    search(keyword) {
      var resultList = [];
      this.list.forEach((item, i) => {
        if (item.name.indexOf(keyword) != -1) {
          resultList.push(item);
        }
      });
      return resultList;
    }
  }
};
</script>
<style>
.red {
  color: red;
}
.thin {
  font-weight: 200;
}
.italic {
  font-style: italic;
}
.active {
  letter-spacing: 1pc;
}
</style>

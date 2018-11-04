  <template>
    <section>
      <h3>讲师信息列表</h3>
      <hr/>
       <el-table
        :data="tableData"
        header-align="center"
        style="width: 100%">
        <el-table-column 
          prop="date"
          label="日期"
           align="center"
           header-align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
           align="center"
           header-align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
           header-align="center"
          label="地址">
        </el-table-column>
      </el-table>
    </section>
  </template>

<script>

export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }}

</script>
<style lang='less'>
  h3{
    margin: 5px 0 0 20px;
  }
  hr{
    border:1px solid #ebeef5
  }
.el-table--enable-row-transition .el-table__body td{

}
</style>
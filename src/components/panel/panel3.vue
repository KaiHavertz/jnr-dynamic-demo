<template>
  <div id="main" style="width: 400px; height: 400px"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "panel3",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [
            120,
            {
              value: 200,
              itemStyle: {
                color: "#a90000",
              },
            },
            150,
            80,
            70,
            110,
            130,
          ],
          type: "bar",
        },
      ],
    };
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption(option);
  },
};
</script>
<style lang="less" scoped>
</style>
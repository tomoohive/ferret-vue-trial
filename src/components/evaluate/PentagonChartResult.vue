<template lang="pug">
canvas#pentagonChart
</template>

<script>
import { mapState } from "vuex";
import { Chart } from "chart.js";

export default {
  methods: {
    createChart() {
      const seasonal_sense = this.resultChart.seasonal_sense;
      const formality = this.resultChart.formality;
      const trend = this.resultChart.trend;
      const value = this.resultChart.value;
      const colorfulness = this.resultChart.colorfulness;
      new Chart(this.ctx, {
        type: "radar",
        data: {
          labels: [
            "季節感",
            "トレンド感",
            "カラフルさ",
            "フォーマルさ",
            "価格帯"
          ],
          datasets: [
            {
              label: "あなたの結果",
              data: [seasonal_sense, trend, colorfulness, formality, value],
              backgroundColor: "RGBA(33,33,33, 0.5)",
              borderColor: "RGBA(33,33,33, 1)",
              borderWidth: 1,
              pointBackgroundColor: "RGB(11,11,11)"
            }
          ]
        },
        options: {
          title: {
            display: true
          },
          scale: {
            ticks: {
              suggestedMin: 0,
              suggestedMax: 10,
              stepSize: 1,
              callback: function(value) {
                return value + "pt";
              }
            }
          }
        }
      });
    }
  },
  computed: {
    ...mapState("evaluation", {
      resultChart: "resultChart"
    })
  },
  watch: {
    chartData: function() {
      this.createChart();
    }
  },
  mounted() {
    this.ctx = document.getElementById("pentagonChart");
    this.createChart();
  }
};
</script>

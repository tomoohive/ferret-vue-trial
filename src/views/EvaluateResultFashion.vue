<template lang="pug">
div#evaluate-fashion(style="text-align: center;")
  div.container-fluid
    div.row
      div.col-sm-8
        PentagonChartResult
      div.col-sm-4
        ImageResult
  div.container-fluid
    div.row
      InputClothesResult
</template>

<script>
import ImageResult from "@/components/evaluate/ImageResult.vue";
import InputClothesResult from "@/components/evaluate/InputClothesResult.vue";
import PentagonChartResult from "@/components/evaluate/PentagonChartResult.vue";

export default {
  name: "EvaluateResultFashion",
  components: {
    PentagonChartResult,
    ImageResult,
    InputClothesResult
  }
};
</script>
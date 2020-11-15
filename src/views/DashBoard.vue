<template>
  <div id="dashboard">
    <!-- (a) -->
    <div class="container">
      <h3 style="padding: 20px;">最近の投稿</h3>
      <div class="row">
        <!-- (b) -->
        <div
          class="col-sm-6 col-md-3 col-xl-2"
          v-for="(result, idx) in this.results"
          :key="idx"
          @click="showingResultFashion(idx)"
        >
          <!-- (c) -->
          <img class="card-img" :src="result.url" :alt="result.url">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import * as fb from "../firebase";
import router from "../router";

export default {
  name: "Dashboard",
  data() {
    return {
      info: null,
      results: [],
      recommend_results: []
    };
  },
  // (f) 
  created: function() {
      fb.clothesCollection.orderBy('uploaded_at', 'desc').limit(12).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const temp = {
              colorfulness: doc.data().colorfulness,
              formality: doc.data().formality,
              item: doc.data().item,
              likes: doc.data().likes,
              predictedLikes: doc.data().predictedLikes,
              seasonal_sense: doc.data().season,
              trend: doc.data().trend,
              value: doc.data().value,
              url: doc.data().url,
              userId: doc.data().userId,
              uploaded_at: doc.data().uploaded_at
            }
            this.results.push(temp)
          })
        })
  },
  methods: {
    showingResultFashion (idx) {
      const result = this.results[idx]
      this.onImageChanged(result.url)
      this.onClothesListChanged(result.item)
      this.onResultChartChanged({
        seasonal_sense: result.seasonal_sense[3],
        formality: result.formality,
        trend: result.trend,
        value: result.value,
        colorfulness: result.colorfulness
      })
      router.push({name: 'EvaluateResultFashion'})
    },
    ...mapActions("evaluation", {
      onImageChanged: "onImageChanged",
      onClothesListChanged: "onClothesListChanged",
      onResultChartChanged: "onResultChartChanged"
    })
  },
  computed: {
    ...mapState("evaluation", {
      evaluatedClothes: "evaluatedClothes"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

img {
  width: 180px;
  height: 280px;
  object-fit: cover;
  margin: 2px;
}
</style>

created () {
    console.log(this.result)
    this.onImageChanged(this.result.url)
    this.onClothesListChanged(this.result.item)
    this.onResultChartChanged({
      seasonal_sense: this.result.seasonal_sense,
      formality: this.result.formality,
      trend: this.result.trend,
      value: this.result.value,
      colorfulness: this.result.colorfulness
    })
  },
  computed: {
    ...mapState("evaluation", {
      evaluatedClothes: "evaluatedClothes"
    })
  },
  methods: {
    ...mapActions("evaluation", {
      onImageChanged: "onImageChanged",
      onClothesListChanged: "onClothesListChanged",
      onResultChartChanged: "onResultChartChanged"
    })
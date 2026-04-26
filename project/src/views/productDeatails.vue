<template>
  <div class="card bg-base-100 w-96 shadow-sm mx-auto">
    <!-- carousel -->

    <div class="carousel w-full">
      <div
        v-show="currentIndex=== index"
        v-for="(img, index) in product.images"
        :key="index"
        class="carousel-item w-full"
      >
        <img :src="img" class="w-full" />
      </div>
    </div>
    <div class="flex w-full justify-center gap-2 py-2">
      <button
        @click="currentIndex = index "
        v-for="(img, index) in product.images"
        :key="index"
        class="btn btn-xs"
      >
        {{ index + 1 }}
      </button>
    </div>

    <!-- carousel -->
    <div class="card-body">
      <h2 class="card-title">
        {{ product.title }}
        <div class="badge badge-secondary ml-2">{{ product.rating }}⭐</div>
      </h2>

      <p>
        {{ product.description }}
      </p>
      <div class="card-actions justify-end">
        <button class="badge badge-neutral">${{ product.price }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getProduct } from "../services/services";

export default {
  name: "productDeatils",
  data() {
    return {
      productID: "",
      product: {},
      currentIndex: 0
    };
  },
  async created() {
    this.productID = this.$route.params.id;
    try {
      const res = await getProduct(this.productID);
      this.product = res.data;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped></style>

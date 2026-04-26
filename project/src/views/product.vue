<template>
  <!-- search inbut -->
  <form @submit.prevent class="max-w-md mx-auto mb-4">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        v-model="search"
        type="search"
        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required
      />
    </div>
  </form>
  <!-- search inbut -->
  <div class="relative overflow-x-auto w-11/12 mx-auto rounded-2xl mb-4">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Product ID</th>
          <th scope="col" class="px-6 py-3">Product Name</th>
          <th scope="col" class="px-6 py-3">Thumbnail</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isLoading">
          <td colspan="6" class="text-center text-2xl text-white font-medium">
            <div class="flex flex-col justify-center items-center gap-4">
              <div
                class="size-24 border-b-4 border-blue-600 rounded-full animate-spin m-4"
              ></div>
              <p>products is loading</p>
            </div>
          </td>
        </tr>
        <tr
          v-if="filterByTitle.length === 0"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
        >
          <td colspan="6" class="px-6 py-4 text-center font-medium text-white">
            {{
              search
                ? `no borduct fit your search "${search}"`
                : "no boduct found"
            }}
          </td>
        </tr>
        <template v-else>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            v-for="product in filterByTitle"
            :key="product.id"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ product.id }}
            </th>
            <td class="px-6 py-4">{{ product.title }}</td>
            <td class="px-6 py-4">
              <img class="w-30" :src="product.thumbnail" />
            </td>
            <td class="px-6 py-4">{{ product.price }}</td>
            <td class="px-6 py-4">
              <button
                class="bg-red-500 m-4 hover:bg-red-900 p-4 text-white text-lg rounded-2xl cursor-pointer"
                @click="handleDelete(product.id)"
              >
                Delete
              </button>
              <router-link
                :to="`/productDeatails/${product.id}`"
                class="bg-green-500 hover:bg-green-900 p-4 text-white text-lg rounded-2xl cursor-pointer"
              >
                Show
              </router-link>
              <router-link
                :to="`/editeProduct/${product.id}`"
                class="bg-orange-400 hover:bg-orange-800 p-4 text-white text-lg rounded-2xl cursor-pointer ml-4"
              >
                Edit
              </router-link>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { deleteProduct, getAllProdcuts } from "../services/services";

export default {
  name: "product",
  data() {
    return {
      products: [],
      search: "",
      isLoading: true,
    };
  },
  methods: {
    async handleDelete(id) {
      try {
        await deleteProduct(id);
        this.products = this.products.filter((p) => p.id !== id);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    filterByTitle() {
      return this.products.filter((p) =>
        p.title.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
  async created() {
    try {
      this.isLoading = true;
      const res = await getAllProdcuts();
      this.products = res.data;
      this.isLoading = flase;
    } catch (err) {
      this.isLoading = false;
      console.log(err);
    }
  },
};
</script>

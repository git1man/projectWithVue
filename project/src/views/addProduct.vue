<template>
  <div>
    <form action="" @submit.prevent="handleSubmit(formValues)">
      <fieldset
        class="fieldset bg-base-200 border-base-300 rounded-box w-10/12 border p-4 mx-auto relative overflow-x-auto"
      >
        <legend class="fieldset-legend">Add Product</legend>

        <div class="flex flex-col items-center w-full">
          <label class="label self-start w-11/12 mx-auto">Title</label>
          <input
            type="text"
            class="input w-11/12"
            placeholder="Title"
            v-model="formValues.title"
          />

          <label class="label self-start w-11/12 mx-auto">Description</label>
          <input
            type="text"
            class="input w-11/12"
            placeholder="Description"
            v-model="formValues.description"
          />

          <label class="label self-start w-11/12 mx-auto">Rating</label>
          <input
            step="any"
            type="number"
            class="input w-11/12"
            placeholder="Rating"
            v-model="formValues.rating"
          />

          <label class="label self-start w-11/12 mx-auto">Price</label>
          <input
            step="any"
            type="number"
            class="input w-11/12"
            placeholder="Price"
            v-model="formValues.price"
          />

          <label class="label self-start w-11/12 mx-auto">Thumbnail</label>
          <input
            type="file"
            class="input w-11/12"
            placeholder="Thumbnail"
            @change="handleThumbnail"
          />

          <label class="label self-start w-11/12 mx-auto">Images</label>
          <input
            type="file"
            class="input w-11/12 mt-2"
            placeholder="Image 1"
            @change="handleImage($event, 0)"
          />
          <input
            type="file"
            class="input w-11/12 mt-2"
            placeholder="Image 2"
            @change="handleImage($event, 1)"
          />
          <input
            type="file"
            class="input w-11/12 mt-2"
            placeholder="Image 3"
            @change="handleImage($event, 2)"
          />

          <button type="submit" class="btn btn-neutral mt-4 w-11/12">
            ADD
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { postProduct } from "../services/services";

export default {
  name: "addProduct",
  data() {
    return {
      formValues: {
        title: "",
        description: "",
        price: 0,
        rating: 0,
        thumbnail: "",
        images: ["", "", ""],
      },
    };
  },
  methods: {
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
    },

    async handleThumbnail(event) {
      const file = event.target.files[0];
      if (file) this.formValues.thumbnail = await this.toBase64(file);
    },

    async handleImage(event, index) {
      const file = event.target.files[0];
      if (file) this.formValues.images[index] = await this.toBase64(file);
    },

    async handleSubmit() {
      try {
        const product = this.formValues;

        if (
          !product.title ||
          !product.description ||
          !product.price ||
          !product.rating ||
          !product.thumbnail
        ) {
          return;
        }

        const filteredImages = product.images.filter((img) => img);
        await postProduct({ ...product, images: filteredImages });
        this.$router.push("/products");
      } catch (err) {
        console.log("Error:", err.response?.data);
      }
    },
  },
};
</script>
<template>
  <div>
    <form action="" @submit.prevent="handleSubmit">
      <fieldset
        class="fieldset bg-base-200 border-base-300 rounded-box w-10/12 border p-4 mx-auto relative overflow-x-auto"
      >
        <legend class="fieldset-legend">Edit Product</legend>

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
            @change="handleThumbnail"
          />

          <label class="label self-start w-11/12 mx-auto">Images</label>
          <input type="file" class="input w-11/12 mt-2" @change="handleImage($event, 0)" />
          <input type="file" class="input w-11/12 mt-2" @change="handleImage($event, 1)" />
          <input type="file" class="input w-11/12 mt-2" @change="handleImage($event, 2)" />

          <button type="submit" class="btn btn-neutral mt-4 w-11/12">
            Edit
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { getProduct, putProduct } from "../services/services";

export default {
  name: "editProduct",
  data() {
    return {
      formValues: {
        title: "",
        description: "",
        price: 0,
        rating: 0,
        thumbnail: "",
        images: [],
      },
    };
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const res = await getProduct(id);
      this.formValues = { ...res.data };
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    compressImage(file, maxWidth = 800, quality = 0.7) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const scale = Math.min(maxWidth / img.width, 1);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", quality));
          };
        };
      });
    },

    async handleThumbnail(event) {
      const file = event.target.files[0];
      if (file) this.formValues.thumbnail = await this.compressImage(file);
    },

    async handleImage(event, index) {
      const file = event.target.files[0];
      if (file) this.formValues.images[index] = await this.compressImage(file);
    },

    async handleSubmit() {
      try {
        const product = this.formValues;

        if (
          !product.title ||
          !product.description ||
          !product.price ||
          !product.rating ||
          !product.thumbnail ||
          product.images.every((img) => !img)
        ) {
          return;
        }

        const id = this.$route.params.id;
        await putProduct(id, {
          ...product,
          price: Number(product.price),
          rating: Number(product.rating),
        });

        this.$router.push("/products");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<template>
  <div>
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <router-link
                  to="/"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  exact-active-class="bg-gray-900 text-white"
                  >Home</router-link
                >
                <router-link
                  to="/products"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  exact-active-class="bg-gray-900 text-white"
                  >Products</router-link
                >
                <router-link
                  to="/addProduct"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  exact-active-class="bg-gray-900 text-white"
                  >Add Product</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

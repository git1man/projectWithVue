<template>
  <div class="grid grid-cols-12 dark:bg-black">
    <div class="lg:col-span-4 md:col-span-6 col-span-12 lg:mb-50 h-70">
      <div class="lg:ml-16 lg:mt-38 md:mt-28 sm:ml-4 sm:mt-4">
        <div class="">
          <img src="../assets/vue.svg" class="w-18" />
        </div>
        <div class="text-2xl font-bold dark:text-white">
          the only take is that you depnd on open source software tools.
        </div>
        <div class="text-2xl font-bold text-sky-500">Unlike Angular.</div>
        <p class="font-light pt-2 pr-6 text-lg dark:text-white">
          but one thing for sure it is the best for beginners
        </p>
        <button class="mt-2 bg-sky-500 text-white rounded-sm p-2">
          Try it now
        </button>
      </div>
    </div>
    <div
      class="xl:col-span-8 lg:col-span-8 md:col-span-6 col-span-12 h-[40vh] lg:h-full bg-[url('../assets/hero.png')] bg-contain bg-no-repeat bg-center"
    ></div>
  </div>
  <!-- the beging of the seacnd grid -->
  <div class="bg-gray-300 grid grid-cols-12 dark:bg-gray-950">
    <div class="hidden xl:block xl:col-span-3"></div>

    <div
      class="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-12 px-6 md:px-10 lg:mb-28 md:mb-20.5"
    >
      <div class="text-2xl font-semibold mt-10 dark:text-white">
        Popular Destinations
      </div>
      <div class="font-thin mt-2 dark:text-white">
        A selection of great work cities with lots to see and explore
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-8 gap-6"
      >
        <div
          class="relative bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)] h-25 flex items-center overflow-hidden dark:bg-gray-800"
        >
          <img
            src="../assets/vite.svg"
            class="h-25 w-24 rounded-l-lg object-cover shrink-0"
          />
          <div class="pl-4 text-lg dark:text-white">
            All in
            <div class="font-thin text-sm dark:text-white">
              free
              <div class="font-semibold pt-2 text-sky-500 text-sm">
                explore unlmited propirties
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)] h-25 flex items-center overflow-hidden dark:bg-gray-800"
        >
          <img
            src="../assets/vue.svg"
            class="h-25 w-24 rounded-l-lg object-cover shrink-0"
          />
          <div class="pl-4 text-lg dark:text-white">
            simple
            <div class="font-thin text-sm dark:text-white">
              free
              <div class="font-semibold pt-2 text-sky-500 text-sm">
                explore unlmited propirties
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)] h-25 flex items-center overflow-hidden dark:bg-gray-800"
        >
          <img
            src="../assets/hero.png"
            class="h-25 w-24 rounded-l-lg object-cover shrink-0"
          />
          <div class="pl-4 text-lg dark:text-white">
            clean
            <div class="font-thin text-sm dark:text-white">
              free
              <div class="font-semibold pt-2 text-sky-500 text-sm">
                explore unlmited propirties
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)] h-25 flex items-center overflow-hidden dark:bg-gray-800"
        >
          <img
            src="../assets/vite.svg"
            class="h-25 w-24 rounded-l-lg object-cover shrink-0"
          />
          <div class="pl-4 text-lg dark:text-white">
            unLike atheres
            <div class="font-thin text-sm dark:text-white">
              free
              <div class="font-semibold pt-2 text-sky-500 text-sm">
                explore unlmited propirties
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)] h-25 flex items-center overflow-hidden dark:bg-gray-800"
        >
          <img
            src="../assets/vue.svg"
            class="h-25 w-24 rounded-l-lg object-cover shrink-0"
          />
          <div class="pl-4 text-lg dark:text-white">
            Awsme
            <div class="font-thin text-sm dark:text-white">
              free
              <div class="font-semibold pt-2 text-sky-500 text-sm">
                explore unlmited propirties
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)] h-25 flex items-center overflow-hidden dark:bg-gray-800"
        >
          <img
            src="../assets/hero.png"
            class="h-25 w-24 rounded-l-lg object-cover shrink-0"
          />
          <div class="pl-4 text-lg dark:text-white">
            Good
            <div class="font-thin text-sm dark:text-white">
              free
              <div class="font-semibold pt-2 text-sky-500 text-sm">
                explore unlmited propirties
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden xl:block xl:col-span-3"></div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped></style>

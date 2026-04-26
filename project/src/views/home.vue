<template>
    <div class="grid grid-cols-12 dark:bg-black">
      <div class="lg:col-span-4 md:col-span-6 col-span-12 lg:mb-50 h-70">
        <div class="lg:ml-16 lg:mt-38 md:mt-28 sm:ml-4 sm:mt-4">
          <div class="">
            <img src="../assets/vue.svg" class="w-18" />
          </div>
          <div class="text-2xl font-bold dark:text-white">you can work from any where.</div>
          <div class="text-2xl font-bold text-sky-500">
            Take advantge of it.
          </div>
          <p class="font-light pt-2 pr-6 text-lg dark:text-white">
            workcation helps you find nice locations that you can rent so you
            can engy nice wither even if you work
          </p>
          <button class="mt-2 bg-sky-500 text-white rounded-sm p-2">
            BOOK YOUR ESCEAP
          </button>
        </div>
      </div>
      <div
        class="xl:col-span-8 lg:col-span-8 md:col-span-6 col-span-12 h-[40vh] lg:h-full bg-[url(../assets/hero.png)] object-cover shrink-0"
      ></div>
    </div>
    <!-- the beging of the seacnd grid -->
    <div class="bg-gray-300 grid grid-cols-12 dark:bg-gray-950">
      <div class="hidden xl:block xl:col-span-3"></div>

      <div
        class="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-12 px-6 md:px-10 lg:mb-28 md:mb-20.5"
      >
        <div class="text-2xl font-semibold mt-10 dark:text-white">Popular Destinations</div>
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
              src="../assets/hero.png"
              class="h-25 w-24 rounded-l-lg object-cover shrink-0"
            />
            <div class="pl-4 text-lg dark:text-white">
              chicago
              <div class="font-thin text-sm dark:text-white">
                $69/night avrage
                <div class="font-semibold pt-2 text-sky-500 text-sm">
                  explore 100 propirties
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
              miami
              <div class="font-thin text-sm dark:text-white">
                $120/night avrage
                <div class="font-semibold pt-2 text-sky-500 text-sm">
                  explore 150 propirties
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
              toronto
              <div class="font-thin text-sm dark:text-white">
                $100/night avrage
                <div class="font-semibold pt-2 text-sky-500 text-sm">
                  explore 47 propirties
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
              seattle
              <div class="font-thin text-sm dark:text-white">
                $90/night avrage
                <div class="font-semibold pt-2 text-sky-500 text-sm">
                  explore 69 propirties
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
              malibu
              <div class="font-thin text-sm dark:text-white">
                $59/night avrage
                <div class="font-semibold pt-2 text-sky-500 text-sm">
                  explore 32 propirties
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
              colorado
              <div class="font-thin text-sm dark:text-white">
                $85/night avrage
                <div class="font-semibold pt-2 text-sky-500 text-sm">
                  explore 64 propirties
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
        name:"home"
    }
</script>

<style scoped>

</style>
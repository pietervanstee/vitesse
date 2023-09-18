<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="mx-auto h-screen w-full bg-black to-gray-400 bg-gradient-to-t">
    <div class="mx-60 pt-24 text-center">
      <div id="head" class="flex flex-col pb-12 space-y-4">
        <h1 class="text-6xl font-bold font-title text-white">
          Welcome to portal
        </h1>
        <p class="text-2xl font-extralight font-sans uppercase">
          Tagline for the page
        </p>
      </div>
      <p class="text-4xl font-thin font-sans text-green-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, modi eaque consequuntur repudiandae molestias voluptates quos tempora, consequatur voluptatibus quia reiciendis atque vel illum. Omnis ad error expedita nam vitae.
      </p>
    </div>

    <div class="card bg-base-100 mx-auto mt-32 w-96 font-sans shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        >
      </figure>
      <div class="card-body">
        <h3 class="card-title font-bold">
          Shoes!
        </h3>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn-primary btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-24">
      <img class="mask mask-squircle mx-auto aspect-square w-32" src="https://images.unsplash.com/photo-1694240347927-0c6165b7a5e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

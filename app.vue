<template>
  <div>

  <div class="p-4 flex gap-4">
    <button class="btn">Nitivat Vorasan</button>
    <select class="select w-full max-w-xs" v-model="colorMode.preference">
      <option disabled selected>Theme</option>
      <option v-for="theme of themes" :key="theme">{{ theme }}</option>
    </select>
  </div>

  <div class="hero min-h-screen" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>

  </div>
  <div class="p-10">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes! สวัสดี</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
const colorMode = useColorMode();
const themes = [
  'mytheme',
  'system',
  'light',
  'dark',
];
</script>

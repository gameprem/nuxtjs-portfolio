<template>
  <div>
    <div
      class="hero min-h-[500px]"
      style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">{{ $t(`Hello, I'm a developer.`) }}</h1>
          <p
            class="mb-5"
          >{{ $t(`Software developer who are passionate about the world of programming and constantly challenges yourself to learn new technologies. You're someone who is fascinated by the capabilities of technology that transform our daily lives.`) }}</p>
          <div class="flex justify-center gap-1 my-1 w-full">
            <kbd class="kbd">{{$i18n.locale == 'th'? 'เ':'P'}}</kbd>
            <kbd class="kbd">{{$i18n.locale == 'th'? 'ป':'R'}}</kbd>
            <kbd class="kbd">{{$i18n.locale == 'th'? 'ร':'E'}}</kbd>
            <kbd class="kbd">{{$i18n.locale == 'th'? 'ม':'M'}}</kbd>
          </div>
        </div>
      </div>
    </div>

    <div class="md:container mx-auto p-10">
      <div class="collapse bg-base-200">
        <input type="checkbox" checked="checked" />
        <div class="collapse-title text-xl font-medium">VueJS</div>
        <div class="collapse-content">
           <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div class="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes! สวัสดี</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes! สวัสดี</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes! สวัสดี</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes! สวัสดี</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes! สวัสดี</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08"
              alt="Shoes"
            />
          </figure>
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
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage"
};
</script>

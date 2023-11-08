<template>
  <div>
    <main>
      <div class="navbar bg-base-100 md:container mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">Nitivat Vorasan</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a>หน้าแรก</a>
            </li>
            <li>
              <a>เกี่ยวกับ</a>
            </li>
            <li>
              <div class="dropdown dropdown-hover dropdown-bottom dropdown-start">
                <label tabindex="1">
                  <a>หน้าจอผู้ใช้</a>
                </label>
                <ul
                  tabindex="1"
                  class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>VueJS</a>
                  </li>
                  <li>
                    <a>NuxtJS</a>
                  </li>
                  <li>
                    <a>ReactJS</a>
                  </li>
                  <li>
                    <a>NextJS</a>
                  </li>
                  <li>
                    <a>Flutter</a>
                  </li>
                  <li>
                    <a>React Native</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="dropdown dropdown-hover dropdown-bottom dropdown-start">
                <label tabindex="1">
                  <a>ระบบ</a>
                </label>
                <ul
                  tabindex="1"
                  class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>ExpressJS</a>
                  </li>
                  <li>
                    <a>Golang</a>
                  </li>
                  <li>
                    <a>NestJS</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <select
            class="select select-ghost select-sm w-full max-w-xs mr-2"
            v-model="colorMode.preference"
          >
            <option disabled selected>Theme</option>
            <option v-for="theme of themes" :key="theme">{{ theme }}</option>
          </select>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="p-4 flex gap-4">
    <button class="btn">Nitivat Vorasan</button>
    <select class="select w-full max-w-xs" v-model="colorMode.preference">
      <option disabled selected>Theme</option>
      <option v-for="theme of themes" :key="theme">{{ theme }}</option>
    </select>
      </div>-->

      <div
        class="hero min-h-[500px]"
        style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">สวัสดีฉันคือนักพัฒนา</h1>
            <p
              class="mb-5"
            >Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div class="flex justify-center gap-1 my-1 w-full">
              <kbd class="kbd">P</kbd>
              <kbd class="kbd">R</kbd>
              <kbd class="kbd">E</kbd>
              <kbd class="kbd">M</kbd>
            </div>
          </div>
        </div>
      </div>

      <div class="md:container mx-auto p-10">
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
    </main>
    <footer class="footer items-center p-4 bg-neutral text-neutral-content">
      <aside class="items-center grid-flow-col">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current"
        >
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
          />
        </svg>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            />
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            />
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            />
          </svg>
        </a>
      </nav>
    </footer>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const themes = ["mytheme", "system", "light", "dark"];
// const { data } = await useFetch("/api/hello");
// console.log(data);
useSeoMeta({
  title: `Nitivat Vorasan | Portfolio`,
  ogTitle: `Nitivat Vorasan | Portfolio`,
  description:
    "This is my web site, let me tell you all about it.",
  ogDescription:  "This is my web site, let me tell you all about it.",
  ogImage: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08",
  twitterCard: "summary_large_image"
});

</script>


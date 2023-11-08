<template>
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
          <NuxtLink :to="'/'">หน้าแรก</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="'about'">เกี่ยวกับ</NuxtLink>
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
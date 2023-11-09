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
            <NuxtLink
              :class="[ isRouteActive('/')? 'active fill-primary':'']"
              :to="'/'"
            >{{$t('Home Page')}}</NuxtLink>
          </li>
          <li>
            <NuxtLink
              :class="[ isRouteActive('/about')? 'active':'']"
              :to="'/about'"
            >{{$t('About')}}</NuxtLink>
          </li>
          <li>
            <a>{{$t('Front-End')}}</a>
            <ul class="p-2">
              <li>
                <NuxtLink :to="'/ui/vuejs'">VueJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/ui/nuxtjs'">NuxtJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/ui/reactjs'">ReactJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/ui/nextjs'">NextJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/ui/flutter'">Flutter</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/ui/react-native'">React Native</NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <a>{{$t('Back-End')}}</a>
            <ul class="p-2">
              <li>
                <NuxtLink :to="'/api/expressjs'">ExpressJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/api/expressjs'">NestJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/api/golang'">Golang</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <NuxtLink :to="'/'" class="btn btn-ghost normal-case text-xl">
        <label class="btn btn-ghost btn-circle avatar">
          <div class="w-8 rounded-full">
            <img
              src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08"
            />
          </div>
        </label>
        {{ $t('Nitivat Vorasan') }}
      </NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink
            :class="[ isRouteActive('/')? 'active fill-primary':'']"
            :to="'/'"
          >{{$t('Home Page')}}</NuxtLink>
        </li>
        <li>
          <NuxtLink :class="[ isRouteActive('/about')? 'active':'']" :to="'/about'">{{$t('About')}}</NuxtLink>
        </li>
        <li>
          <div class="dropdown dropdown-hover dropdown-bottom dropdown-start">
            <label tabindex="0">
              <a>{{$t('Front-End')}}</a>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NuxtLink :to="'/front-end/vuejs'">VueJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/front-end/nuxtjs'">NuxtJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/front-end/reactjs'">ReactJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/front-end/nextjs'">NextJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/front-end/flutter'">Flutter</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/front-end/react-native'">React Native</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="dropdown dropdown-hover dropdown-bottom dropdown-start">
            <label tabindex="0">
              <a>{{$t('Back-End')}}</a>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NuxtLink :to="'/back-end/expressjs'">ExpressJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/back-end/expressjs'">NestJS</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/back-end/golang'">Golang</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <label tabindex="0">
          <img :src="currentLocale.img" class="h-3 w-5" :alt="currentLocale.locale" />
        </label>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="(item, index) in locales" :key="index" @click="changeLocale(item.locale)">
            <div class="inline-flex">
              <img :src="item.img" class="h-3 w-5 m-1" :alt="item.locale + item.index" />
              {{ item.name }}
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="dropdown dropdown-end ml-2">
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
              {{$t('Profile')}}
              <span class="badge">{{ $t('New') }}</span>
            </a>
          </li>
          <li>
            <a>{{$t('Settings')}}</a>
          </li>
          <li>
            <a>{{$t('Logout')}}</a>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const themes = ["mytheme", "system", "light", "dark"];

useSeoMeta({
  title: `Nitivat Vorasan | Portfolio`,
  ogTitle: `Nitivat Vorasan | Portfolio`,
  description: "This is my web site, let me tell you all about it.",
  ogDescription: "This is my web site, let me tell you all about it.",
  ogImage:
    "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/301140847_5399833980065464_5188964123215900127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d1Ivkl6iuc0AX_qRpvs&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCGvvLhhokXSx7T6P7LYGTXdtc0TezNVAW2Wjh1JBiHLA&oe=6550EC08",
  twitterCard: "summary_large_image"
});
</script>


<script>
import locales from "@/locales/locales";

export default {
  setup() {
    return { locales };
  },
  computed: {
    currentLocale() {
      return locales.find(l => l.locale === this.$i18n.locale);
    }
  },
  methods: {
    changeLocale(value) {
      this.$i18n.locale = value;
      localStorage.setItem("locale", value.toString());
    },
    toLink(to, index) {
      if (to !== null) {
        this.currentIndexMenu = index;
        this.$router.push({ path: to });
      } else {
        this.currentIndexMenu = index;
      }
    },
    isRouteActive(to) {
      const route = useRoute();
      if (to === route.path) {
        return true;
      }
      return false;
    }
  }
};
</script>
<template>
  <div>
    <NavBar />

    <main>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <slot />
      </transition>
    </main>
    <Footer />
  </div>
</template>

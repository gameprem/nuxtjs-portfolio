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
  </div>
</template>
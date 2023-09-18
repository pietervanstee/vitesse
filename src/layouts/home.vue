<template>
  <main>
    <RouterView />
    <div id="foot_wrapper" class="absolute bottom-6 left-1/2 flex flex-col -translate-x-1/2 space-y-4">
      <TheFooter class="" />
      <div mx-auto text-center text-sm opacity-50>
        [Home Layout]
      </div>
    </div>
  </main>
</template>

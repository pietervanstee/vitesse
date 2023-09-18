<script setup lang="ts">
</script>

<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <RouterLink icon-btn to="/" title="Home">
      <div i-carbon-campsite />
    </RouterLink>

    <button icon-btn title="Toggle Dark" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a icon-btn title="Toogle Languages">
      <div i-carbon-language />
    </a>

    <RouterLink icon-btn to="/about" title="About" data-test-id="about">
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a icon-btn rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>

<template>
  <div class="layout-container">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
  <KfWidget 
    telegram="@JDchat_bot" 
    ws-url="wss://test.jdchat.im/ws" 
    email="service@jdchat.im"
  />
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>

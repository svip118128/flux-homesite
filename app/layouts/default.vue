<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
  <KfWidget 
    telegram="@JDchat_bot" 
    ws-url="wss://test.jdchat.im/ws" 
    email="hello@jdchat.app"
  />
</template>

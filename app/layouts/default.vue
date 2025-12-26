<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
  <KfWidget 
    telegram="@JDchat_bot" 
    ws-url="wss://test.jdchat.im/ws" 
    email="service@jdchat.im"
  />
</template>

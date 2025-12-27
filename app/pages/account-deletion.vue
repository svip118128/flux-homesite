<template>
  <div class="section">
    <div class="container">
      <h1>{{ $t('accountDeletion.title') }}</h1>
      <p class="lead">{{ $t('accountDeletion.intro') }}</p>

      <div class="legal-content card" style="padding: 24px; margin-top: 24px;">
        <section>
          <h2>{{ $t('accountDeletion.howToRequest.title') }}</h2>
          <p>{{ $t('accountDeletion.howToRequest.p1') }}</p>
          <ul>
            <li>{{ $t('accountDeletion.howToRequest.li1') }}</li>
            <li>{{ $t('accountDeletion.howToRequest.li2') }}</li>
            <li>{{ $t('accountDeletion.howToRequest.li3') }}</li>
          </ul>
          <p>{{ $t('accountDeletion.howToRequest.p2') }}</p>
        </section>

        <section>
          <h2>{{ $t('accountDeletion.guide.title') }}</h2>
          <p>{{ $t('accountDeletion.guide.intro') }}</p>
          
          <div class="tabs" style="margin: 20px 0;">
            <button 
              class="tab-button" 
              :class="{ active: activeTab === 'android' }"
              @click="activeTab = 'android'"
            >
              {{ $t('accountDeletion.guide.android') }}
            </button>
            <button 
              class="tab-button" 
              :class="{ active: activeTab === 'ios' }"
              @click="activeTab = 'ios'"
            >
              {{ $t('accountDeletion.guide.ios') }}
            </button>
          </div>

          <div v-if="activeTab === 'android'" class="screenshot-guide">
            <div class="steps">
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step1') }}</p>
                <img src="/assets/img/android_step_to_delete_account/1.png" alt="Step 1" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step2') }}</p>
                <img src="/assets/img/android_step_to_delete_account/2.png" alt="Step 2" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step3') }}</p>
                <img src="/assets/img/android_step_to_delete_account/3.png" alt="Step 3" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step4') }}</p>
                <img src="/assets/img/android_step_to_delete_account/4.png" alt="Step 4" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step5') }}</p>
                <img src="/assets/img/android_step_to_delete_account/5.png" alt="Step 5" />
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'ios'" class="screenshot-guide">
            <div class="steps">
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step1') }}</p>
                <img src="/assets/img/ios_step_to_delete_account/1.png" alt="Step 1" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step2') }}</p>
                <img src="/assets/img/ios_step_to_delete_account/2.png" alt="Step 2" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step3') }}</p>
                <img src="/assets/img/ios_step_to_delete_account/3.png" alt="Step 3" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step4') }}</p>
                <img src="/assets/img/ios_step_to_delete_account/4.png" alt="Step 4" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step5') }}</p>
                <img src="/assets/img/ios_step_to_delete_account/5.png" alt="Step 5" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>{{ $t('accountDeletion.dataWillBeDeleted.title') }}</h2>
          <p>{{ $t('accountDeletion.dataWillBeDeleted.intro') }}</p>
          <ul>
            <li>{{ $t('accountDeletion.dataWillBeDeleted.li1') }}</li>
            <li>{{ $t('accountDeletion.dataWillBeDeleted.li2') }}</li>
            <li>{{ $t('accountDeletion.dataWillBeDeleted.li3') }}</li>
            <li>{{ $t('accountDeletion.dataWillBeDeleted.li4') }}</li>
            <li>{{ $t('accountDeletion.dataWillBeDeleted.li5') }}</li>
          </ul>
        </section>

        <section>
          <h2>{{ $t('accountDeletion.dataRetention.title') }}</h2>
          <p>{{ $t('accountDeletion.dataRetention.p1') }}</p>
        </section>

        <section>
          <h2>{{ $t('accountDeletion.contact.title') }}</h2>
          <p>{{ $t('accountDeletion.contact.p1') }}</p>
        </section>

        <section>
          <h2>{{ $t('accountDeletion.dataDeletionRequests.title') }}</h2>
          <p>{{ $t('accountDeletion.dataDeletionRequests.intro') }}</p>
        </section>

        <section>
          <h2>{{ $t('accountDeletion.partialDataDeletion.title') }}</h2>
          <p>{{ $t('accountDeletion.partialDataDeletion.intro') }}</p>
          <ul>
            <li>{{ $t('accountDeletion.partialDataDeletion.li1') }}</li>
            <li>{{ $t('accountDeletion.partialDataDeletion.li2') }}</li>
          </ul>
          <p>{{ $t('accountDeletion.partialDataDeletion.p1') }}</p>
        </section>

        <section>
          <h2>{{ $t('accountDeletion.clearChatHistory.title') }}</h2>
          <p>{{ $t('accountDeletion.clearChatHistory.intro') }}</p>
          
          <div class="tabs" style="margin: 20px 0;">
            <button 
              class="tab-button" 
              :class="{ active: activeTab === 'android' }"
              @click="activeTab = 'android'"
            >
              {{ $t('accountDeletion.guide.android') }}
            </button>
            <button 
              class="tab-button" 
              :class="{ active: activeTab === 'ios' }"
              @click="activeTab = 'ios'"
            >
              {{ $t('accountDeletion.guide.ios') }}
            </button>
          </div>

          <div v-if="activeTab === 'android'" class="screenshot-guide">
            <div class="steps">
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step1') }}</p>
                <img src="/assets/img/android_step_to_delete_account/1.png" alt="Step 1" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step2') }}</p>
                <img src="/assets/img/android_step_to_delete_account/2.png" alt="Step 2" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step3') }}</p>
                <img src="/assets/img/android_step_to_delete_account/3.png" alt="Step 3" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.clearChatHistory.step4') }}</p>
                <img src="/assets/img/android_step_to_clear_chat_history/5.png" alt="Step 4" />
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'ios'" class="screenshot-guide">
            <div class="steps">
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step1') }}</p>
                <img src="/assets/img/ios_step_to_delete_account/1.png" alt="Step 1" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step2') }}</p>
                <img src="/assets/img/ios_step_to_delete_account/2.png" alt="Step 2" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.guide.step3') }}</p>
                <img src="/assets/img/ios_step_to_delete_account/3.png" alt="Step 3" />
              </div>
              <div class="step">
                <p class="step-label">{{ $t('accountDeletion.clearChatHistory.step4') }}</p>
                <img src="/assets/img/ios_step_to_clear_chat_history/5.png" alt="Step 4" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>{{ $t('accountDeletion.fullAccountDeletion.title') }}</h2>
          <p>{{ $t('accountDeletion.fullAccountDeletion.intro') }}</p>
          <ul>
            <li>{{ $t('accountDeletion.fullAccountDeletion.li1') }}</li>
            <li>{{ $t('accountDeletion.fullAccountDeletion.li2') }}</li>
          </ul>
        </section>

        <section>
          <h2>{{ $t('accountDeletion.dataRetention2.title') }}</h2>
          <p>{{ $t('accountDeletion.dataRetention2.p1') }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('android')
</script>

<style scoped>
.legal-content section {
  margin-bottom: 28px;
}

.legal-content h2 {
  font-size: 20px;
  margin-bottom: 12px;
  margin-top: 24px;
  color: var(--color-primary);
}

.legal-content h3 {
  font-size: 17px;
  margin-bottom: 10px;
  margin-top: 16px;
  color: var(--color-text);
}

.legal-content h4 {
  font-size: 15px;
  margin-bottom: 8px;
  margin-top: 12px;
  color: var(--color-muted);
}

.legal-content p {
  color: var(--color-muted);
  line-height: 1.8;
  margin-bottom: 10px;
}

.legal-content .intro {
  font-size: 16px;
  color: var(--color-text);
  margin-bottom: 20px;
}

.legal-content ul {
  margin-top: 12px;
  padding-left: 24px;
  color: var(--color-muted);
}

.legal-content li {
  margin-bottom: 8px;
}

.tabs {
  display: flex;
  gap: 12px;
  border-bottom: 2px solid var(--color-border, #e0e0e0);
  padding-bottom: 0;
}

.tab-button {
  padding: 12px 24px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: 15px;
  color: var(--color-muted);
  transition: all 0.2s;
  margin-bottom: -2px;
}

.tab-button:hover {
  color: var(--color-primary);
}

.tab-button.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
  font-weight: 500;
}

.screenshot-guide {
  margin-top: 24px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-label {
  font-weight: 500;
  margin-bottom: 12px;
  color: var(--color-text);
  text-align: center;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  padding: 0 8px;
  box-sizing: border-box;
}

.step img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>


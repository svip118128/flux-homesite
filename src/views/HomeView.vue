<template>
    <section class="hero">
        <div class="hero-grid"></div>
        <div class="container inner">
            <div>
                <div class="badge">
                    <img :src="'/assets/icons/globe.svg'" alt="" width="18" height="18"><span>{{ $t("hero.badge") }}</span>
                </div>
                <h1>{{ $t("hero.title") }}</h1>
                <p class="lead">{{ $t("hero.lead") }}</p>
                <div class="cta">
                    <router-link to="/download" class="btn primary">
                        <img :src="'/assets/icons/download.svg'" alt="" width="20" height="20"><span>{{ $t("hero.cta.download") }}</span>
                    </router-link>
                    <router-link to="/features" class="btn">
                        <img :src="'/assets/icons/bolt.svg'" alt="" width="20" height="20"><span>{{ $t("hero.cta.getStarted") }}</span>
                    </router-link>
                    <router-link to="/contact" class="btn">
                        <img :src="'/assets/icons/mail.svg'" alt="" width="20" height="20"><span>{{ $t("hero.cta.contact") }}</span>
                    </router-link>
                </div>
                <div id="detected-cta" style="margin-top:10px"></div>
            </div>
            <div class="card" style="padding:10px">
                <img id="home-hero-img" :src="'/assets/img/hero-image.png'" alt="Jdchat UI" style="width:100%; border-radius:12px">
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features section">
        <div class="container">
            <div class="section-title">
                <h2>{{ $t("section.features") }}</h2>
            </div>
            <div class="grid-4">
                <div class="card feature">
                    <div class="icon">
                        <img :src="'/assets/icons/lock.svg'" width="28" height="28" alt="">
                    </div>
                    <div>
                        <h3>{{ $t("feature.secure") }}</h3>
                        <p>{{ $t("feature.secure.desc") }}</p>
                    </div>
                </div>
                <div class="card feature">
                    <div class="icon">
                        <img :src="'/assets/icons/bolt.svg'" width="28" height="28" alt="">
                    </div>
                    <div>
                        <h3>{{ $t("feature.fast") }}</h3>
                        <p>{{ $t("feature.fast.desc") }}</p>
                    </div>
                </div>
                <div class="card feature">
                    <div class="icon">
                        <img :src="'/assets/icons/globe.svg'" width="28" height="28" alt="">
                    </div>
                    <div>
                        <h3>{{ $t("feature.global") }}</h3>
                        <p>{{ $t("feature.global.desc") }}</p>
                    </div>
                </div>
                <div class="card feature">
                    <div class="icon">
                        <img :src="'/assets/icons/chat.svg'" width="28" height="28" alt="">
                    </div>
                    <div>
                        <h3>{{ $t("feature.ecosystem") }}</h3>
                        <p>{{ $t("feature.ecosystem.desc") }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Use Cases Section -->
    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>{{ $t("section.usecases") }}</h2>
            </div>
            <div class="mini-grid" style="margin-top:10px">
                <div class="mini-card">
                    <h4>{{ $t("case.enterprise.title") }}</h4>
                    <div class="metrics">
                        <span class="metric">{{ $t("case.enterprise.m1") }}</span>
                        <span class="metric">{{ $t("case.enterprise.m2") }}</span>
                        <span class="metric">{{ $t("case.enterprise.m3") }}</span>
                    </div>
                </div>
                <div class="mini-card">
                    <h4>{{ $t("case.crossborder.title") }}</h4>
                    <div class="metrics">
                        <span class="metric">{{ $t("case.crossborder.m1") }}</span>
                        <span class="metric">{{ $t("case.crossborder.m2") }}</span>
                        <span class="metric">{{ $t("case.crossborder.m3") }}</span>
                    </div>
                </div>
                <div class="mini-card">
                    <h4>{{ $t("case.support.title") }}</h4>
                    <div class="metrics">
                        <span class="metric">{{ $t("case.support.m1") }}</span>
                        <span class="metric">{{ $t("case.support.m2") }}</span>
                        <span class="metric">{{ $t("case.support.m3") }}</span>
                    </div>
                </div>
                <div class="mini-card">
                    <h4>{{ $t("case.finance.title") }}</h4>
                    <div class="metrics">
                        <span class="metric">{{ $t("case.finance.m1") }}</span>
                        <span class="metric">{{ $t("case.finance.m2") }}</span>
                        <span class="metric">{{ $t("case.finance.m3") }}</span>
                    </div>
                </div>
                <div class="mini-card">
                    <h4>{{ $t("case.healthcare.title") }}</h4>
                    <div class="metrics">
                        <span class="metric">{{ $t("case.healthcare.m1") }}</span>
                        <span class="metric">{{ $t("case.healthcare.m2") }}</span>
                        <span class="metric">{{ $t("case.healthcare.m3") }}</span>
                    </div>
                </div>
                <div class="mini-card">
                    <h4>{{ $t("case.education.title") }}</h4>
                    <div class="metrics">
                        <span class="metric">{{ $t("case.education.m1") }}</span>
                        <span class="metric">{{ $t("case.education.m2") }}</span>
                        <span class="metric">{{ $t("case.education.m3") }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Case Studies Section -->
    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>{{ $t("section.casestudies") }}</h2>
                <router-link class="small" to="/news">{{ $t("viewNews") }}</router-link>
            </div>
            <div class="mini-grid">
                <div class="card feature">
                    <div class="icon">
                        <img :src="'/assets/icons/briefcase.svg'" width="28" height="28" alt="">
                    </div>
                    <div>
                        <h3>{{ $t("uc.enterprise") }}</h3>
                        <p class="small">{{ $t("uc.enterprise.desc") }}</p>
                    </div>
                </div>
                <div class="card feature">
                    <div class="icon">
                        <img :src="'/assets/icons/globe.svg'" width="28" height="28" alt="">
                    </div>
                    <div>
                        <h3>{{ $t("uc.crossborder") }}</h3>
                        <p class="small">{{ $t("uc.crossborder.desc") }}</p>
                    </div>
                </div>
                <div class="card feature">
                    <div class="icon">
                        <img :src="'/assets/icons/headset.svg'" width="28" height="28" alt="">
                    </div>
                    <div>
                        <h3>{{ $t("uc.support") }}</h3>
                        <p class="small">{{ $t("uc.support.desc") }}</p>
                    </div>
                </div>
                <div class="card feature">
                    <div class="icon">
                        <img :src="'/assets/icons/bank.svg'" width="28" height="28" alt="">
                    </div>
                    <div>
                        <h3>{{ $t("uc.finance") }}</h3>
                        <p class="small">{{ $t("uc.finance.desc") }}</p>
                    </div>
                </div>
                <div class="card feature">
                    <div class="icon">
                        <img :src="'/assets/icons/med.svg'" width="28" height="28" alt="">
                    </div>
                    <div>
                        <h3>{{ $t("uc.healthcare") }}</h3>
                        <p class="small">{{ $t("uc.healthcare.desc") }}</p>
                    </div>
                </div>
                <div class="card feature">
                    <div class="icon">
                        <img :src="'/assets/icons/graduation.svg'" width="28" height="28" alt="">
                    </div>
                    <div>
                        <h3>{{ $t("uc.education") }}</h3>
                        <p class="small">{{ $t("uc.education.desc") }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Steps Section -->
    <section class="section steps">
        <div class="container">
            <div class="section-title">
                <h2>{{ $t("section.steps") }}</h2>
                <span class="small">{{ $t("steps.subtitle") }}</span>
            </div>
            <div class="step-list">
                <div class="step">
                    <div class="num">1</div>
                    <div>
                        <h3>{{ $t("step1.title") }}</h3>
                        <p class="small">{{ $t("step1.desc") }}</p>
                        <router-link class="btn primary" to="/download">{{ $t("steps.cta.download") }}</router-link>
                    </div>
                </div>
                <div class="step">
                    <div class="num">2</div>
                    <div>
                        <h3>{{ $t("step2.title") }}</h3>
                        <p class="small">{{ $t("step2.desc") }}</p>
                        <router-link class="btn" to="/help/create-team">{{ $t("steps.cta.help") }}</router-link>
                    </div>
                </div>
                <div class="step">
                    <div class="num">3</div>
                    <div>
                        <h3>{{ $t("step3.title") }}</h3>
                        <p class="small">{{ $t("step3.desc") }}</p>
                        <router-link class="btn" to="/contact">{{ $t("steps.cta.contact") }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Inline FAQ Section -->
    <div id="inline-faq" class="container" style="margin-top:10px">
        <div class="section-title">
            <h2>{{ $t("section.faqInline") }}</h2>
        </div>
        <details>
            <summary>{{ $t("faqinline.q1") }}</summary>
            <p class="small">{{ $t("faqinline.a1") }}</p>
        </details>
        <details>
            <summary>{{ $t("faqinline.q2") }}</summary>
            <p class="small">{{ $t("faqinline.a2") }}</p>
        </details>
        <details>
            <summary>{{ $t("faqinline.q3") }}</summary>
            <p class="small">{{ $t("faqinline.a3") }}</p>
        </details>
    </div>

    <!-- Clients Section -->
    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>{{ $t("section.clients") }}</h2>
            </div>
            <div class="clients">
                <img :src="'/assets/img/clients/OrionTech.svg'" alt="OrionTech">
                <img :src="'/assets/img/clients/NovaPay.svg'" alt="NovaPay">
                <img :src="'/assets/img/clients/SkyLabs.svg'" alt="SkyLabs">
                <img :src="'/assets/img/clients/BlueBank.svg'" alt="BlueBank">
                <img :src="'/assets/img/clients/MetaRetail.svg'" alt="MetaRetail">
                <img :src="'/assets/img/clients/SunTel.svg'" alt="SunTel">
                <img :src="'/assets/img/clients/NextEdu.svg'" alt="NextEdu">
                <img :src="'/assets/img/clients/Medix.svg'" alt="Medix">
                <img :src="'/assets/img/clients/Globex.svg'" alt="Globex">
                <img :src="'/assets/img/clients/VeloAI.svg'" alt="VeloAI">
            </div>
        </div>
    </section>

    <!-- Screens Section -->
    <section class="section screens">
        <div class="container">
            <div class="section-title">
                <h2>{{ $t("section.screens") }}</h2>
                <router-link class="small" to="/download">{{ $t("section.download") }}</router-link>
            </div>
            <div class="grid-3">
                <img id="feature-main-img" :src="'/assets/img/mobile_preview.png'" alt="Conversations">
                <img id="steps-img" :src="'/assets/img/pc_preview.png'" alt="Voice">
                <img :src="'/assets/img/admin_preview.png'" alt="Admin">
            </div>
        </div>
    </section>
</template>

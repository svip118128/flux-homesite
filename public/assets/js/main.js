
(function () {
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  // Full translations
  const translations = {
    zh: {
      "brand.name": "Jdchat",
      "nav.home": "首页",
      "nav.features": "特色",
      "nav.functions": "功能",
      "nav.transfer": "传输",
      "nav.solutions": "方案",
      "nav.news": "新闻",
      "nav.help": "帮助",
      "nav.faq": "问答",
      "nav.download": "下载",
      "page.title.transfer": "文件传输",
      "hero.badge": "新一代 · IM + AI",
      "hero.title": "企业级 IM 通讯，让协作更智能",
      "hero.lead": "Jdchat 采用端到端加密、分布式架构与 AI 智能助手，支持多平台、多语言，覆盖消息、群组、文件、音视频会议与机器人生态。",
      "hero.cta.getStarted": "立即开始",
      "hero.cta.download": "下载客户端",
      "hero.cta.contact": "联系销售",
      "section.features": "核心特色",
      "feature.secure": "银行级安全",
      "feature.secure.desc": "端到端加密、二次验证与权限矩阵，保障数据全生命周期安全。",
      "feature.fast": "极速可靠",
      "feature.fast.desc": "自研分布式消息队列与重试机制，超大规模下依然稳定。",
      "feature.global": "多语言多区域",
      "feature.global.desc": "内置中/英/越语言包与时区处理，支持全球团队协作。",
      "section.clients": "客户与案例",
      "section.screens": "产品截图",
      "section.download": "立即部署",
      "download.lead": "支持 iOS / Android / Windows / macOS，多平台一致体验。",
      "footer.cta": "联系我们",
      "footer.rights": "© 2025 Jdchat. All rights reserved.",
      "download.title": "下载中心",
      "download.card.ios": "iOS 安装包（TestFlight）",
      "download.card.android": "Android APK",
      "download.card.desktop": "桌面客户端",
      "download.note": "下载即表示你同意《用户协议》和《隐私政策》。",
      "page.title.features": "特色",
      "page.title.functions": "功能",
      "page.title.solutions": "方案",
      "page.title.news": "新闻资讯",
      "page.title.help": "使用帮助",
      "page.title.faq": "常见问答",
      "page.title.contact": "联系",
      "table.feature": "功能点",
      "table.desc": "说明",
      "table.status": "状态",
      "status.ready": "已支持",
      "status.dev": "开发中",
      "news.sample1": "Jdchat v1.0 发布：支持多平台与端到端加密",
      "news.sample2": "Jdchat 接入 AI 智能助手，提升客服效率 60%",
      "help.sample1": "如何创建团队与频道？",
      "help.sample2": "如何启用两步验证与安全策略？",
      "faq.q1": "Jdchat 是否支持离线消息与多设备同步？",
      "faq.a1": "支持。消息在云端加密存储，并在设备上线时自动同步。",
      "detected.os": "为你推荐的下载：",
      "section.usecases": "适用场景",
      "uc.enterprise": "企业内部沟通",
      "uc.enterprise.desc": "组织架构/审批/权限/SSO/审计留痕。",
      "uc.crossborder": "跨境团队协作",
      "uc.crossborder.desc": "多语言多时区，全球成员沟通无障碍。",
      "uc.support": "客服联络中心",
      "uc.support.desc": "多渠道接入、AI 机器人、工单与 SLA。",
      "uc.finance": "金融合规模块",
      "uc.finance.desc": "细粒度权限、加密策略与合规审计。",
      "uc.healthcare": "医疗隐私场景",
      "uc.healthcare.desc": "隐私保护、加密传输、本地化部署。",
      "uc.education": "教育教学协作",
      "uc.education.desc": "班级群、作业互动、直播课堂。",
      "section.casestudies": "落地案例",
      "case.enterprise.title": "OrionTech · 企业内部沟通",
      "case.enterprise.m1": "上线时间 3 天",
      "case.enterprise.m2": "流程效率 +40%",
      "case.enterprise.m3": "通讯成本 -25%",
      "case.crossborder.title": "Globex · 跨境协作",
      "case.crossborder.m1": "跨时区延迟 -45%",
      "case.crossborder.m2": "自动翻译命中率 95%",
      "case.crossborder.m3": "交付周期 -20%",
      "case.support.title": "MetaRetail · 客服中台",
      "case.support.m1": "响应时间 -35%",
      "case.support.m2": "一次解决率 +18%",
      "case.support.m3": "满意度 +12pt",
      "case.finance.title": "BlueBank · 金融合规",
      "case.finance.m1": "消息送达率 99.99%",
      "case.finance.m2": "审计覆盖 100%",
      "case.finance.m3": "变更可追溯",
      "case.healthcare.title": "Medix · 医疗隐私",
      "case.healthcare.m1": "PHI 全程加密",
      "case.healthcare.m2": "审计事件 0 漏记",
      "case.healthcare.m3": "本地化部署",
      "case.education.title": "NextEdu · 教学协作",
      "case.education.m1": "作业提交率 +30%",
      "case.education.m2": "课堂参与度 +22%",
      "case.education.m3": "直播稳定性 99.95%",
      "section.steps": "如何开始",
      "steps.subtitle": "三步即可拥有属于你的 Jdchat",
      "step1.title": "选择部署 & 获取安装包",
      "step1.desc": "公有云/私有化任选，下载适配你平台的客户端与服务组件。",
      "step2.title": "品牌化 & 导入团队",
      "step2.desc": "上传 Logo/主题色，导入组织与成员，设置权限与安全策略。",
      "step3.title": "上线 & 集成扩展",
      "step3.desc": "开启频道与机器人，接入 Webhook/OpenAPI，与业务系统联动。",
      "steps.cta.download": "前往下载",
      "steps.cta.help": "查看文档",
      "steps.cta.contact": "联系顾问",
      "section.faqInline": "常见问题",
      "faqinline.q1": "私有化与云部署如何选择？",
      "faqinline.a1": "看合规与运维能力：有合规要求/内网系统建议私有化，否则云更省心。",
      "faqinline.q2": "是否支持对接现有账号体系？",
      "faqinline.a2": "支持 OIDC/SAML 与自定义 Webhook，同步组织架构与单点登录。",
      "faqinline.q3": "迁移成本如何评估？",
      "faqinline.a3": "提供导入工具与顾问：成员/频道/历史消息可分批迁移。",
      "transfer.badge": "文件传输 · 即将上线",
      "transfer.title": "大文件极速传输，企业级安全",
      "transfer.lead": "支持超大文件、断点续传、端到端加密与权限控制；跨平台一致体验。",
      "transfer.cta.contact": "联系顾问",
      "transfer.cta.download": "下载客户端",
      "transfer.drop.tip": "拖拽文件到此或点击选择（静态演示）",
      "transfer.note": "当前为静态入口，功能开发中；可通过 API 接入断点续传与加密策略。",
      "transfer.f1": "极速传输",
      "transfer.f1.desc": "多线程并发、分片与压缩优化。",
      "transfer.f2": "安全合规",
      "transfer.f2.desc": "E2E 加密、到期自动销毁、审计留痕。",
      "transfer.f3": "跨平台",
      "transfer.f3.desc": "iOS / Android / Windows / macOS 全覆盖。",
      "feature.ecosystem": "开放生态",
      "feature.ecosystem.desc": "机器人、Webhook、企业 SSO、审计与归档。",
      "solutions.enterprise": "企业内聊",
      "solutions.enterprise.desc": "组织架构、审批、SSO 接入；支持多租户与分区隔离。",
      "solutions.crossborder": "跨境团队",
      "solutions.crossborder.desc": "多语言协作、国际化短信/邮件、合规审计。",
      "solutions.support": "客服中台",
      "solutions.support.desc": "AI 机器人、工单与知识库、满意度评价。",
      "solutions.finance": "金融行业",
      "solutions.finance.desc": "合规与加密策略、细粒度权限管理。",
      "solutions.healthcare": "医疗行业",
      "solutions.healthcare.desc": "隐私保护、留痕审计、专有部署。",
      "solutions.education": "教育行业",
      "solutions.education.desc": "班级群、作业协作、直播课堂工具链。",
      "features.lead": "围绕安全、性能、全球化、可扩展性四大维度，打造企业级沟通基座。",
      "feature.e2e.desc": "端到端加密，安全传输与存储",
      "feature.av.desc": "高清音视频会议，噪声抑制",
      "feature.bot.desc": "机器人平台、Webhook、指令路由",
      "feature.audit.desc": "安全审计、数据合规与归档",
      "feature.sso.desc": "OIDC/SAML 单点登录",
      "feature.storage.desc": "分片与断点续传、加密存储",
      "feature.international.desc": "多语言、多时区、多货币",
      "func.chat": "聊天",
      "func.chat.desc": "单聊/群聊、已读回执、消息撤回、置顶与收藏",
      "func.security": "安全",
      "func.security.desc": "端到端加密、2FA、会话风控、设备管理",
      "func.performance": "性能",
      "func.performance.desc": "海量并发、弱网优化、消息重试与幂等",
      "func.collab": "协作",
      "func.collab.desc": "文件共享、任务、公告、@组织/群组",
      "func.support": "客服",
      "func.support.desc": "多渠道接入、智能分配、SLA 监控",
      "func.admin": "管理",
      "func.admin.desc": "分级权限、审计日志、行为留痕",
      "func.platform": "开放平台",
      "func.platform.desc": "Bot、Webhook、OpenAPI",
      "func.multi": "多端",
      "func.multi.desc": "iOS/Android/Windows/macOS",
      "faq.q2": "如何私有化部署？",
      "faq.a2": "支持容器化部署（Docker Compose/K8s），可按需扩展。",
      "help.item1": "如何创建团队与频道？",
      "help.item2": "如何启用两步验证与安全策略？",
      "help.item3": "批量导入成员与组织架构",
      "news.item1.title": "Jdchat v1.0 发布：支持多平台与端到端加密",
      "news.item1.date": "2025-08-26 • Jdchat Team",
      "news.item1.desc": "首次公开发布，提供移动与桌面多平台客户端。",
      "news.item2.title": "Jdchat 接入 AI 智能助手，提升客服效率 60%",
      "news.item2.date": "2025-08-10 • Jdchat Team",
      "news.item2.desc": "AI 智能助手上线，自动归类意图与回复建议。",
      "contact.lead": "请填写你的需求，我们将在 1 个工作日内与您联系。",
      "contact.label.name": "公司/姓名",
      "contact.label.email": "邮箱",
      "contact.label.phone": "电话/微信",
      "contact.label.edition": "意向版本",
      "contact.option.private": "私有化部署",
      "contact.option.cloud": "公有云",
      "contact.label.message": "需求描述",
      "contact.placeholder": "请描述你的场景、预计用户规模等",
      "contact.submit": "提交",
      "contact.emailDirect": "或直接邮箱",
      "contact.notice": "提示：表单为纯前端实现，若需后端收件，请提供第三方表单网关地址。",
      "transfer.chooseFiles": "选择文件",
      "helpDetail.team.title": "如何创建团队与频道？",
      "helpDetail.team.intro": "前往“管理后台 → 团队”，新建团队后可创建频道，支持公开/私有与权限设置。",
      "helpDetail.2fa.title": "如何启用两步验证与安全策略？",
      "helpDetail.2fa.intro": "在“设置 → 安全”，开启二次验证（GA/短信），并配置登录/IP 白名单策略。",
      "helpDetail.import.title": "批量导入成员与组织架构",
      "helpDetail.import.intro": "支持 CSV/Excel 导入，字段包括姓名/邮箱/部门/角色。",
      "helpDetail.steps": "操作步骤",
      "helpDetail.step1": "登录 Jdchat 管理后台。",
      "helpDetail.step2": "按照页面提示填写配置。",
      "helpDetail.step3": "保存后在客户端验证效果。",
      "helpDetail.tip": "提示：如需 API 自动化，请联系技术支持开通。",
      "helpDetail.back": "← 返回帮助列表",
      "newsDetail.v1.title": "Jdchat v1.0 发布：支持多平台与端到端加密",
      "newsDetail.v1.date": "2025-08-26 • Jdchat Team",
      "newsDetail.v1.content": "我们正式发布 v1.0 版本，支持端到端加密与跨平台同步，适配 iOS/Android/Windows/macOS。后续将引入机器人平台、开放 API 与更完整的合规审计能力。",
      "newsDetail.ai.title": "Jdchat 接入 AI 智能助手，提升客服效率 60%",
      "newsDetail.ai.date": "2025-08-10 • Jdchat Team",
      "newsDetail.ai.content": "我们上线 AI 智能助手，通过知识库与上下文检索，自动生成回复建议，大幅提升客服处理效率与用户满意度。",
      "newsDetail.back": "← 返回新闻列表",
      "footer.docs": "文档",
      "footer.faq": "常见问答",
      "footer.site": "站点",
      "footer.sitemap": "站点地图",
      "footer.robots": "Robots",
      "footer.contact": "联系",
      "viewNews": "查看新闻",
      "detected.os.zh": "为你推荐的下载：",
      "page.title.sitemap": "站点地图",
      "sitemap.main": "主要页面",
      "sitemap.news": "新闻资讯",
      "sitemap.help": "帮助与支持"
    },
    en: {
      "brand.name": "Jdchat",
      "nav.home": "Home",
      "nav.features": "Features",
      "nav.functions": "Functions",
      "nav.transfer": "Transfer",
      "nav.solutions": "Solutions",
      "nav.news": "News",
      "nav.help": "Help",
      "nav.faq": "FAQ",
      "nav.download": "Download",
      "page.title.transfer": "File Transfer",
      "hero.badge": "Next-gen · IM + AI",
      "hero.title": "Enterprise IM that makes work smarter",
      "hero.lead": "Jdchat brings end-to-end encryption, distributed reliability and AI assistants across chat, groups, files, meetings and bots.",
      "hero.cta.getStarted": "Get Started",
      "hero.cta.download": "Download App",
      "hero.cta.contact": "Contact Sales",
      "section.features": "Key Features",
      "feature.secure": "Bank-grade Security",
      "feature.secure.desc": "E2E encryption, 2FA and role-based permissions secure data end-to-end.",
      "feature.fast": "Fast & Reliable",
      "feature.fast.desc": "Custom distributed MQ with retries keeps delivery rock-solid at scale.",
      "feature.global": "Global & Multilingual",
      "feature.global.desc": "Built-in Chinese/English/Vietnamese with timezone care for global teams.",
      "section.clients": "Customers & Case Studies",
      "section.screens": "Screenshots",
      "section.download": "Deploy Now",
      "download.lead": "Available for iOS / Android / Windows / macOS.",
      "footer.cta": "Contact Us",
      "footer.rights": "© 2025 Jdchat. All rights reserved.",
      "download.title": "Downloads",
      "download.card.ios": "iOS (TestFlight)",
      "download.card.android": "Android APK",
      "download.card.desktop": "Desktop App",
      "download.note": "By downloading you agree to the Terms and Privacy Policy.",
      "page.title.features": "Features",
      "page.title.functions": "Functions",
      "page.title.solutions": "Solutions",
      "page.title.news": "News",
      "page.title.help": "Help",
      "page.title.faq": "FAQ",
      "page.title.contact": "Contact",
      "table.feature": "Feature",
      "table.desc": "Description",
      "table.status": "Status",
      "status.ready": "Ready",
      "status.dev": "In Dev",
      "news.sample1": "Jdchat v1.0 launched: multi-platform with end-to-end encryption",
      "news.sample2": "AI assistants boost support efficiency by 60%",
      "help.sample1": "How to create teams and channels?",
      "help.sample2": "How to enable 2FA and security policies?",
      "faq.q1": "Does Jdchat support offline messages and multi-device sync?",
      "faq.a1": "Yes. Messages are encrypted in the cloud and sync on reconnect.",
      "detected.os": "Recommended download:",
      "section.usecases": "Use Cases",
      "uc.enterprise": "Internal Communications",
      "uc.enterprise.desc": "Org chart, approvals, RBAC/SSO, audit trails.",
      "uc.crossborder": "Cross‑border Teams",
      "uc.crossborder.desc": "Multi‑language & timezones for global work.",
      "uc.support": "Support Contact Center",
      "uc.support.desc": "Omnichannel, AI bots, tickets & SLA.",
      "uc.finance": "Financial Compliance",
      "uc.finance.desc": "Fine‑grained permissions, encryption, audits.",
      "uc.healthcare": "Healthcare Privacy",
      "uc.healthcare.desc": "Data privacy, encrypted transport, on‑prem.",
      "uc.education": "Education & Teaching",
      "uc.education.desc": "Class groups, assignments, live classes.",
      "section.casestudies": "Case Studies",
      "case.enterprise.title": "OrionTech · Internal Comms",
      "case.enterprise.m1": "Go‑live in 3 days",
      "case.enterprise.m2": "Workflow efficiency +40%",
      "case.enterprise.m3": "Comms cost −25%",
      "case.crossborder.title": "Globex · Cross‑border",
      "case.crossborder.m1": "Timezone delay −45%",
      "case.crossborder.m2": "Auto‑translation hit 95%",
      "case.crossborder.m3": "Delivery cycle −20%",
      "case.support.title": "MetaRetail · Support Center",
      "case.support.m1": "Response time −35%",
      "case.support.m2": "FCR +18%",
      "case.support.m3": "CSAT +12pt",
      "case.finance.title": "BlueBank · Compliance",
      "case.finance.m1": "Delivery 99.99%",
      "case.finance.m2": "Audit coverage 100%",
      "case.finance.m3": "Full change traceability",
      "case.healthcare.title": "Medix · Healthcare",
      "case.healthcare.m1": "PHI encrypted end‑to‑end",
      "case.healthcare.m2": "0 missed audit events",
      "case.healthcare.m3": "On‑prem deployment",
      "case.education.title": "NextEdu · Education",
      "case.education.m1": "Assignments submitted +30%",
      "case.education.m2": "Class participation +22%",
      "case.education.m3": "Live uptime 99.95%",
      "section.steps": "How to Start",
      "steps.subtitle": "Own your Jdchat in 3 steps",
      "step1.title": "Choose deployment & get installers",
      "step1.desc": "Cloud or on‑prem. Download apps and server components.",
      "step2.title": "Brand & import your team",
      "step2.desc": "Upload logo/theme, import org & members, set RBAC & policies.",
      "step3.title": "Go live & integrate",
      "step3.desc": "Enable channels & bots, plug Webhook/OpenAPI to your systems.",
      "steps.cta.download": "Go to Download",
      "steps.cta.help": "Read Docs",
      "steps.cta.contact": "Talk to Us",
      "section.faqInline": "FAQ",
      "faqinline.q1": "Cloud vs on‑prem?",
      "faqinline.a1": "Depends on compliance & ops: choose on‑prem for strict data control, otherwise cloud is easier.",
      "faqinline.q2": "Integrate with existing identity?",
      "faqinline.a2": "Supports OIDC/SAML & custom Webhooks; sync org structure & SSO.",
      "faqinline.q3": "Migration cost?",
      "faqinline.a3": "Import tools & advisory: members/channels/history can be migrated in batches.",
      "transfer.badge": "File Transfer · Coming soon",
      "transfer.title": "Fast large‑file transfer with enterprise security",
      "transfer.lead": "Supports huge files, resumable uploads, E2E encryption & permissions.",
      "transfer.cta.contact": "Contact Sales",
      "transfer.cta.download": "Download App",
      "transfer.drop.tip": "Drag files here or click to choose (static demo)",
      "transfer.note": "Static entry for now; resumable uploads & encryption will be exposed via API.",
      "transfer.f1": "Fast",
      "transfer.f1.desc": "Parallel chunks, compression pipeline.",
      "transfer.f2": "Secure & compliant",
      "transfer.f2.desc": "E2E encryption, auto-expiry, audit trails.",
      "transfer.f3": "Cross‑platform",
      "transfer.f3.desc": "iOS / Android / Windows / macOS.",
      "feature.ecosystem": "Open Ecosystem",
      "feature.ecosystem.desc": "Bots, Webhooks, Enterprise SSO, Audit & Archiving.",
      "solutions.enterprise": "Enterprise Chat",
      "solutions.enterprise.desc": "Org chart, approvals, SSO; Multi-tenant & partition isolation.",
      "solutions.crossborder": "Cross-border Teams",
      "solutions.crossborder.desc": "Multi-language collab, Int'l SMS/Email, Compliance audits.",
      "solutions.support": "Customer Support",
      "solutions.support.desc": "AI Bots, Tickets & Knowledge Base, CSAT surveys.",
      "solutions.finance": "Finance",
      "solutions.finance.desc": "Compliance & Encryption policies, Granular permissions.",
      "solutions.healthcare": "Healthcare",
      "solutions.healthcare.desc": "Privacy protection, Audit trails, Private deployment.",
      "solutions.education": "Education",
      "solutions.education.desc": "Class groups, Assignments, Live classroom tools.",
      "features.lead": "Built on security, performance, globalization, and scalability.",
      "feature.e2e.desc": "E2E encryption, secure transport & storage",
      "feature.av.desc": "HD Video/Audio meetings, noise suppression",
      "feature.bot.desc": "Bot platform, Webhooks, Command routing",
      "feature.audit.desc": "Security audit, compliance & archiving",
      "feature.sso.desc": "OIDC/SAML Single Sign-On",
      "feature.storage.desc": "Chunked resumable uploads, encrypted storage",
      "feature.international.desc": "Multi-language, timezones, multi-currency",
      "func.chat": "Chat",
      "func.chat.desc": "1-on-1/Group, Read receipts, Recall, Pin & Favorite",
      "func.security": "Security",
      "func.security.desc": "E2E Encryption, 2FA, Session risk control, Device mgmt",
      "func.performance": "Performance",
      "func.performance.desc": "Massive concurrency, Weak network optimization, Idempotency",
      "func.collab": "Collaboration",
      "func.collab.desc": "File sharing, Tasks, Announcements, @Org/Groups",
      "func.support": "Support",
      "func.support.desc": "Omnichannel, Smart routing, SLA monitoring",
      "func.admin": "Management",
      "func.admin.desc": "Tiered permissions, Audit logs, Activity tracking",
      "func.platform": "Open Platform",
      "func.platform.desc": "Bot, Webhook, OpenAPI",
      "func.multi": "Multi-platform",
      "func.multi.desc": "iOS/Android/Windows/macOS",
      "faq.q2": "How to deploy on-premise?",
      "faq.a2": "Supports containerized deployment (Docker Compose/K8s), scale as needed.",
      "help.item1": "How to create teams and channels?",
      "help.item2": "How to enable 2FA and security policies?",
      "help.item3": "Batch import members and org structure",
      "news.item1.title": "Jdchat v1.0 launched: multi-platform with E2E encryption",
      "news.item1.date": "2025-08-26 • Jdchat Team",
      "news.item1.desc": "First public release with mobile and desktop clients.",
      "news.item2.title": "Jdchat integrates AI assistant, boosting support efficiency by 60%",
      "news.item2.date": "2025-08-10 • Jdchat Team",
      "news.item2.desc": "AI assistant launched with intent classification and reply suggestions.",
      "contact.lead": "Fill in your requirements and we'll contact you within 1 business day.",
      "contact.label.name": "Company/Name",
      "contact.label.email": "Email",
      "contact.label.phone": "Phone/WeChat",
      "contact.label.edition": "Preferred Edition",
      "contact.option.private": "On-premise",
      "contact.option.cloud": "Public Cloud",
      "contact.label.message": "Requirements",
      "contact.placeholder": "Describe your use case, expected user scale, etc.",
      "contact.submit": "Submit",
      "contact.emailDirect": "Or email directly",
      "contact.notice": "Note: This form is front-end only. For backend receipt, provide a form gateway URL.",
      "transfer.chooseFiles": "Choose Files",
      "helpDetail.team.title": "How to create teams and channels?",
      "helpDetail.team.intro": "Go to 'Admin Panel → Teams', create a team then add channels. Supports public/private visibility and permissions.",
      "helpDetail.2fa.title": "How to enable 2FA and security policies?",
      "helpDetail.2fa.intro": "In 'Settings → Security', enable two-factor auth (GA/SMS) and configure login/IP whitelist policies.",
      "helpDetail.import.title": "Batch import members and org structure",
      "helpDetail.import.intro": "Supports CSV/Excel import with fields: name/email/department/role.",
      "helpDetail.steps": "Steps",
      "helpDetail.step1": "Log into Jdchat admin panel.",
      "helpDetail.step2": "Fill in the configuration as prompted.",
      "helpDetail.step3": "Save and verify the results in the client.",
      "helpDetail.tip": "Tip: For API automation, contact technical support.",
      "helpDetail.back": "← Back to help list",
      "newsDetail.v1.title": "Jdchat v1.0 launched: multi-platform with E2E encryption",
      "newsDetail.v1.date": "2025-08-26 • Jdchat Team",
      "newsDetail.v1.content": "We officially release v1.0 with E2E encryption and cross-platform sync for iOS/Android/Windows/macOS. Coming soon: bot platform, open API, and full compliance auditing.",
      "newsDetail.ai.title": "Jdchat integrates AI assistant, boosting support efficiency by 60%",
      "newsDetail.ai.date": "2025-08-10 • Jdchat Team",
      "newsDetail.ai.content": "We launched AI assistant with knowledge base and context retrieval, auto-generating reply suggestions to significantly improve support efficiency and user satisfaction.",
      "newsDetail.back": "← Back to news list",
      "footer.docs": "Docs",
      "footer.faq": "FAQ",
      "footer.site": "Site",
      "footer.sitemap": "Sitemap",
      "footer.robots": "Robots",
      "footer.contact": "Contact",
      "viewNews": "View news",
      "page.title.sitemap": "Sitemap",
      "sitemap.main": "Main Pages",
      "sitemap.news": "News",
      "sitemap.help": "Help & Support"
    },
    vi: {
      "brand.name": "Jdchat",
      "nav.home": "Trang chủ",
      "nav.features": "Đặc sắc",
      "nav.functions": "Chức năng",
      "nav.transfer": "Truyền tệp",
      "nav.solutions": "Giải pháp",
      "nav.news": "Tin tức",
      "nav.help": "Trợ giúp",
      "nav.faq": "Hỏi đáp",
      "nav.download": "Tải xuống",
      "page.title.transfer": "Truyền tệp",
      "hero.badge": "Thế hệ mới · IM + AI",
      "hero.title": "IM cấp doanh nghiệp thông minh hơn",
      "hero.lead": "Jdchat mang lại mã hóa đầu-cuối, kiến trúc phân tán và trợ lý AI cho chat, nhóm, tệp, họp và bot.",
      "hero.cta.getStarted": "Bắt đầu",
      "hero.cta.download": "Tải ứng dụng",
      "hero.cta.contact": "Liên hệ kinh doanh",
      "section.features": "Tính năng nổi bật",
      "feature.secure": "Bảo mật cấp ngân hàng",
      "feature.secure.desc": "Mã hóa E2E, 2FA và phân quyền dựa trên vai trò.",
      "feature.fast": "Nhanh & ổn định",
      "feature.fast.desc": "Hàng đợi thông điệp phân tán với cơ chế thử lại, bền vững ở quy mô lớn.",
      "feature.global": "Đa ngôn ngữ & Toàn cầu",
      "feature.global.desc": "Tích hợp Trung/Anh/Việt và xử lý múi giờ cho nhóm toàn cầu.",
      "section.clients": "Khách hàng & Case study",
      "section.screens": "Ảnh sản phẩm",
      "section.download": "Triển khai ngay",
      "download.lead": "Hỗ trợ iOS / Android / Windows / macOS.",
      "footer.cta": "Liên hệ",
      "footer.rights": "© 2025 Jdchat. Bảo lưu mọi quyền.",
      "download.title": "Tải xuống",
      "download.card.ios": "iOS (TestFlight)",
      "download.card.android": "Android APK",
      "download.card.desktop": "Ứng dụng máy tính",
      "download.note": "Tải xuống nghĩa là bạn đồng ý với Điều khoản và Chính sách riêng tư.",
      "page.title.features": "Đặc sắc",
      "page.title.functions": "Chức năng",
      "page.title.solutions": "Giải pháp",
      "page.title.news": "Tin tức",
      "page.title.help": "Trợ giúp",
      "page.title.faq": "Hỏi đáp",
      "page.title.contact": "Liên hệ",
      "table.feature": "Tính năng",
      "table.desc": "Mô tả",
      "table.status": "Trạng thái",
      "status.ready": "Sẵn sàng",
      "status.dev": "Đang phát triển",
      "news.sample1": "Ra mắt Jdchat v1.0: đa nền tảng và mã hóa đầu-cuối",
      "news.sample2": "Trợ lý AI tăng hiệu suất hỗ trợ 60%",
      "help.sample1": "Cách tạo nhóm và kênh?",
      "help.sample2": "Cách bật 2FA và chính sách bảo mật?",
      "faq.q1": "Jdchat có đồng bộ đa thiết bị và tin nhắn offline không?",
      "faq.a1": "Có. Tin nhắn được mã hóa trên đám mây và đồng bộ khi kết nối lại.",
      "detected.os": "Khuyến nghị tải:",
      "section.usecases": "Tình huống áp dụng",
      "uc.enterprise": "Giao tiếp nội bộ doanh nghiệp",
      "uc.enterprise.desc": "Sơ đồ tổ chức, phê duyệt, RBAC/SSO, nhật ký kiểm toán.",
      "uc.crossborder": "Nhóm làm việc xuyên biên giới",
      "uc.crossborder.desc": "Đa ngôn ngữ & múi giờ cho hợp tác toàn cầu.",
      "uc.support": "Trung tâm CSKH",
      "uc.support.desc": "Đa kênh, bot AI, ticket & SLA.",
      "uc.finance": "Tuân thủ tài chính",
      "uc.finance.desc": "Quyền chi tiết, mã hóa, kiểm toán.",
      "uc.healthcare": "Y tế & quyền riêng tư",
      "uc.healthcare.desc": "Bảo vệ dữ liệu, truyền mã hóa, triển khai on‑prem.",
      "uc.education": "Giáo dục & giảng dạy",
      "uc.education.desc": "Nhóm lớp, bài tập, lớp học trực tuyến.",
      "section.casestudies": "Case study",
      "case.enterprise.title": "OrionTech · Giao tiếp nội bộ",
      "case.enterprise.m1": "Triển khai trong 3 ngày",
      "case.enterprise.m2": "Hiệu quả quy trình +40%",
      "case.enterprise.m3": "Chi phí liên lạc −25%",
      "case.crossborder.title": "Globex · Xuyên biên giới",
      "case.crossborder.m1": "Độ trễ múi giờ −45%",
      "case.crossborder.m2": "Dịch tự động chính xác 95%",
      "case.crossborder.m3": "Chu kỳ bàn giao −20%",
      "case.support.title": "MetaRetail · Trung tâm CSKH",
      "case.support.m1": "Thời gian phản hồi −35%",
      "case.support.m2": "Tỷ lệ xử lý lần đầu +18%",
      "case.support.m3": "Hài lòng +12 điểm",
      "case.finance.title": "BlueBank · Tuân thủ",
      "case.finance.m1": "Tỷ lệ giao 99.99%",
      "case.finance.m2": "Kiểm toán bao phủ 100%",
      "case.finance.m3": "Truy vết thay đổi đầy đủ",
      "case.healthcare.title": "Medix · Y tế",
      "case.healthcare.m1": "Mã hoá PHI end‑to‑end",
      "case.healthcare.m2": "0 sự kiện kiểm toán bỏ sót",
      "case.healthcare.m3": "Triển khai on‑prem",
      "case.education.title": "NextEdu · Giáo dục",
      "case.education.m1": "Bài nộp +30%",
      "case.education.m2": "Tham gia lớp +22%",
      "case.education.m3": "Ổn định live 99.95%",
      "section.steps": "Bắt đầu",
      "steps.subtitle": "3 bước để sở hữu Jdchat",
      "step1.title": "Chọn triển khai & tải bộ cài",
      "step1.desc": "Cloud hoặc on‑prem. Tải ứng dụng và thành phần server.",
      "step2.title": "Gắn thương hiệu & nhập đội ngũ",
      "step2.desc": "Tải logo/chủ đề, nhập tổ chức & thành viên, thiết lập RBAC & policy.",
      "step3.title": "Vận hành & tích hợp",
      "step3.desc": "Bật kênh & bot, kết nối Webhook/OpenAPI với hệ thống của bạn.",
      "steps.cta.download": "Đi tới Tải xuống",
      "steps.cta.help": "Xem tài liệu",
      "steps.cta.contact": "Liên hệ",
      "section.faqInline": "Câu hỏi thường gặp",
      "faqinline.q1": "Chọn cloud hay on‑prem?",
      "faqinline.a1": "Tuỳ tuân thủ & vận hành: có yêu cầu dữ liệu -> on‑prem, còn lại cloud tiện hơn.",
      "faqinline.q2": "Kết nối hệ thống danh tính hiện có?",
      "faqinline.a2": "Hỗ trợ OIDC/SAML & Webhook; đồng bộ tổ chức & SSO.",
      "faqinline.q3": "Chi phí di chuyển?",
      "faqinline.a3": "Có công cụ import & tư vấn: thành viên/kênh/lịch sử có thể di chuyển từng đợt.",
      "transfer.badge": "Truyền tệp · Sắp ra mắt",
      "transfer.title": "Truyền tệp lớn nhanh, bảo mật doanh nghiệp",
      "transfer.lead": "Hỗ trợ tệp cực lớn, upload tiếp tục, mã hoá E2E & phân quyền.",
      "transfer.cta.contact": "Liên hệ",
      "transfer.cta.download": "Tải ứng dụng",
      "transfer.drop.tip": "Kéo thả tệp vào đây hoặc bấm chọn (demo)",
      "transfer.note": "Trang tĩnh trước mắt; API sẽ hỗ trợ resume & mã hoá.",
      "transfer.f1": "Nhanh",
      "transfer.f1.desc": "Chia mảnh song song, nén tối ưu.",
      "transfer.f2": "Bảo mật & tuân thủ",
      "transfer.f2.desc": "Mã hóa E2E, tự huỷ theo hạn, nhật ký kiểm toán.",
      "transfer.f3": "Đa nền tảng",
      "transfer.f3.desc": "iOS / Android / Windows / macOS.",
      "feature.ecosystem": "Hệ sinh thái mở",
      "feature.ecosystem.desc": "Bot, Webhook, SSO doanh nghiệp, Kiểm toán & Lưu trữ.",
      "solutions.enterprise": "Chat nội bộ",
      "solutions.enterprise.desc": "Sơ đồ tổ chức, phê duyệt, SSO; Đa thuê bao & cách ly phân vùng.",
      "solutions.crossborder": "Nhóm xuyên biên giới",
      "solutions.crossborder.desc": "Hợp tác đa ngôn ngữ, SMS/Email quốc tế, Kiểm toán tuân thủ.",
      "solutions.support": "Trung tâm hỗ trợ",
      "solutions.support.desc": "Bot AI, Vé & Cơ sở tri thức, Khảo sát hài lòng.",
      "solutions.finance": "Tài chính",
      "solutions.finance.desc": "Chính sách tuân thủ & mã hóa, Phân quyền chi tiết.",
      "solutions.healthcare": "Y tế",
      "solutions.healthcare.desc": "Bảo vệ quyền riêng tư, Nhật ký kiểm toán, Triển khai riêng.",
      "solutions.education": "Giáo dục",
      "solutions.education.desc": "Nhóm lớp, Bài tập, Công cụ lớp học trực tuyến.",
      "features.lead": "Xây dựng trên bốn trụ cột: bảo mật, hiệu năng, toàn cầu hóa và khả năng mở rộng.",
      "feature.e2e.desc": "Mã hóa đầu cuối, truyền & lưu trữ an toàn",
      "feature.av.desc": "Họp video/âm thanh HD, khử ồn",
      "feature.bot.desc": "Nền tảng Bot, Webhooks, Định tuyến lệnh",
      "feature.audit.desc": "Kiểm toán bảo mật, tuân thủ dữ liệu & lưu trữ",
      "feature.sso.desc": "Đăng nhập một lần OIDC/SAML",
      "feature.storage.desc": "Tải lên phân mảnh nối tiếp, lưu trữ mã hóa",
      "feature.international.desc": "Đa ngôn ngữ, múi giờ, đa tiền tệ",
      "func.chat": "Trò chuyện",
      "func.chat.desc": "1-1/Nhóm, Đã xem, Thu hồi, Ghim & Yêu thích",
      "func.security": "Bảo mật",
      "func.security.desc": "Mã hóa E2E, 2FA, Kiểm soát rủi ro phiên, Quản lý thiết bị",
      "func.performance": "Hiệu năng",
      "func.performance.desc": "Đồng thời lớn, Tối ưu mạng yếu, Thử lại & Idempotency",
      "func.collab": "Cộng tác",
      "func.collab.desc": "Chia sẻ tệp, Nhiệm vụ, Thông báo, @Tổ chức/Nhóm",
      "func.support": "Hỗ trợ",
      "func.support.desc": "Đa kênh, Định tuyến thông minh, Giám sát SLA",
      "func.admin": "Quản lý",
      "func.admin.desc": "Quyền phân cấp, Nhật ký kiểm toán, Theo dõi hành vi",
      "func.platform": "Nền tảng mở",
      "func.platform.desc": "Bot, Webhook, OpenAPI",
      "func.multi": "Đa nền tảng",
      "func.multi.desc": "iOS/Android/Windows/macOS",
      "faq.q2": "Làm sao để triển khai riêng?",
      "faq.a2": "Hỗ trợ triển khai container (Docker Compose/K8s), mở rộng theo nhu cầu.",
      "help.item1": "Cách tạo nhóm và kênh?",
      "help.item2": "Cách bật 2FA và chính sách bảo mật?",
      "help.item3": "Nhập hàng loạt thành viên và cấu trúc tổ chức",
      "news.item1.title": "Ra mắt Jdchat v1.0: đa nền tảng với mã hóa E2E",
      "news.item1.date": "2025-08-26 • Jdchat Team",
      "news.item1.desc": "Phiên bản công khai đầu tiên với ứng dụng di động và máy tính.",
      "news.item2.title": "Jdchat tích hợp trợ lý AI, tăng hiệu suất hỗ trợ 60%",
      "news.item2.date": "2025-08-10 • Jdchat Team",
      "news.item2.desc": "Trợ lý AI ra mắt với phân loại ý định và gợi ý trả lời.",
      "contact.lead": "Điền yêu cầu và chúng tôi sẽ liên hệ trong 1 ngày làm việc.",
      "contact.label.name": "Công ty/Tên",
      "contact.label.email": "Email",
      "contact.label.phone": "Điện thoại/WeChat",
      "contact.label.edition": "Phiên bản mong muốn",
      "contact.option.private": "Triển khai riêng",
      "contact.option.cloud": "Cloud công cộng",
      "contact.label.message": "Yêu cầu",
      "contact.placeholder": "Mô tả tình huống, quy mô người dùng dự kiến...",
      "contact.submit": "Gửi",
      "contact.emailDirect": "Hoặc gửi email trực tiếp",
      "contact.notice": "Lưu ý: Biểu mẫu chỉ hoạt động ở front-end. Để nhận backend, cung cấp URL gateway biểu mẫu.",
      "transfer.chooseFiles": "Chọn tệp",
      "helpDetail.team.title": "Cách tạo nhóm và kênh?",
      "helpDetail.team.intro": "Vào 'Quản trị → Nhóm', tạo nhóm rồi thêm kênh. Hỗ trợ công khai/riêng tư và phân quyền.",
      "helpDetail.2fa.title": "Cách bật 2FA và chính sách bảo mật?",
      "helpDetail.2fa.intro": "Trong 'Cài đặt → Bảo mật', bật xác thực hai bước (GA/SMS) và cấu hình danh sách trắng đăng nhập/IP.",
      "helpDetail.import.title": "Nhập hàng loạt thành viên và cấu trúc tổ chức",
      "helpDetail.import.intro": "Hỗ trợ nhập CSV/Excel với các trường: tên/email/phòng ban/vai trò.",
      "helpDetail.steps": "Các bước",
      "helpDetail.step1": "Đăng nhập bảng quản trị Jdchat.",
      "helpDetail.step2": "Điền cấu hình theo hướng dẫn.",
      "helpDetail.step3": "Lưu và kiểm tra kết quả trên ứng dụng.",
      "helpDetail.tip": "Mẹo: Để tự động hóa API, liên hệ hỗ trợ kỹ thuật.",
      "helpDetail.back": "← Quay lại danh sách trợ giúp",
      "newsDetail.v1.title": "Ra mắt Jdchat v1.0: đa nền tảng với mã hóa E2E",
      "newsDetail.v1.date": "2025-08-26 • Jdchat Team",
      "newsDetail.v1.content": "Chúng tôi chính thức phát hành v1.0 với mã hóa E2E và đồng bộ đa nền tảng cho iOS/Android/Windows/macOS. Sắp ra mắt: nền tảng bot, API mở và kiểm toán tuân thủ đầy đủ.",
      "newsDetail.ai.title": "Jdchat tích hợp trợ lý AI, tăng hiệu suất hỗ trợ 60%",
      "newsDetail.ai.date": "2025-08-10 • Jdchat Team",
      "newsDetail.ai.content": "Chúng tôi ra mắt trợ lý AI với cơ sở tri thức và tìm kiếm ngữ cảnh, tự động tạo gợi ý trả lời để nâng cao đáng kể hiệu quả hỗ trợ và sự hài lòng của người dùng.",
      "newsDetail.back": "← Quay lại danh sách tin tức",
      "footer.docs": "Tài liệu",
      "footer.faq": "Câu hỏi thường gặp",
      "footer.site": "Trang web",
      "footer.sitemap": "Sơ đồ trang",
      "footer.robots": "Robots",
      "footer.contact": "Liên hệ",
      "viewNews": "Xem tin tức",
      "page.title.sitemap": "Sơ đồ trang",
      "sitemap.main": "Trang chính",
      "sitemap.news": "Tin tức",
      "sitemap.help": "Trợ giúp & Hỗ trợ"
    }
  };

  function getLangFromQuery() {
    const m = location.search.match(/[?&]lang=(zh|en|vi)\\b/i);
    return m ? m[1].toLowerCase() : null;
  }
  function getLangFromNavigator() {
    const prefs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']).map(s => String(s || '').toLowerCase());
    for (const p of prefs) {
      if (p.startsWith('zh')) return 'zh';
      if (p.startsWith('vi')) return 'vi';
      if (p.startsWith('en')) return 'en';
    }
    return null;
  }
  function currentLang() {
    return getLangFromQuery() || localStorage.getItem('jdchat_lang') || getLangFromNavigator() || 'zh';
  }

  function applyLang(lang) {
    const dict = translations[lang] || translations.zh;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k]) el.textContent = dict[k];
    });
    $$('[data-i18n-placeholder]').forEach(el => {
      const k = el.getAttribute('data-i18n-placeholder');
      if (dict[k]) el.setAttribute('placeholder', dict[k]);
    });
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey && dict[titleKey]) document.title = dict[titleKey] + " · Jdchat";
    const sel = $('#lang-select'); if (sel) sel.value = lang;
  }

  function navActive() {
    const path = location.pathname.split('/').pop() || 'index.html';
    $$('.nav a').forEach(a => { const href = a.getAttribute('href'); if (href === path) a.classList.add('active'); });
  }

  function initLangSelect() {
    const sel = $('#lang-select'); if (!sel) return;
    sel.value = currentLang();
    sel.addEventListener('change', () => {
      const lang = sel.value;
      localStorage.setItem('jdchat_lang', lang);
      applyLang(lang);
    });
  }

  // Platform detection & CTA
  function detectPlatform() {
    const ua = navigator.userAgent || "";
    if (/android/i.test(ua)) return 'android';
    if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
    if (/Win/.test(ua)) return 'windows';
    if (/Mac/.test(ua)) return 'mac';
    if (/Linux/.test(ua)) return 'linux';
    return 'web';
  }
  function renderDetectedCTA() {
    const box = $('#detected-cta'); if (!box) return;
    const os = detectPlatform();
    const dict = {
      ios: { label: "iOS", href: "#ios" },
      android: { label: "Android", href: "#android" },
      mac: { label: "macOS", href: "#desktop" },
      windows: { label: "Windows", href: "#desktop" },
      linux: { label: "Linux", href: "#desktop" },
      web: { label: "Web", href: "download.html" }
    }[os];
    const lang = currentLang();
    const text = (translations[lang] && translations[lang]["detected.os"]) || "Recommended:";
    box.innerHTML = `<span class="badge-os">${text} ${dict.label}</span> <a class="btn primary" href="download.html${dict.href}">${dict.label}</a>`;
  }

  // Remote images config (optional)
  // async function applyRemoteImages() {
  //   try {
  //     const res = await fetch('assets/remote_images.json?v=2');
  //     const cfg = await res.json();
  //     if (!cfg.enabled) return;
  //     if (cfg.images && cfg.images.home_hero) {
  //       const heroImg = $('#home-hero-img'); if (heroImg) heroImg.src = cfg.images.home_hero;
  //     }
  //     if (cfg.images && cfg.images.feature_main) {
  //       const fImg = $('#feature-main-img'); if (fImg) fImg.src = cfg.images.feature_main;
  //     }
  //     if (cfg.images && cfg.images.steps) {
  //       const sImg = $('#steps-img'); if (sImg) sImg.src = cfg.images.steps;
  //     }
  //   } catch (e) { /* ignore */ }
  // }

  // Contact form
  function initContactForm() {
    const form = $('#contact-form');
    if (!form) return;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const data = Object.fromEntries(fd.entries());
      const endpoint = form.dataset.endpoint || "";
      if (endpoint) {
        try {
          const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
          if (r.ok) { alert('Submitted. Thank you!'); form.reset(); return; }
        } catch (e) { }
      }
      const body = encodeURIComponent(Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\\n'));
      location.href = `mailto:hello@jdchat.example?subject=Jdchat Inquiry&body=${body}`;
    });
  }

  // Steps progress bars (animate on view)
  function initStepProgress() {
    const steps = $$('.step');
    if (!('IntersectionObserver' in window) || !steps.length) return;
    steps.forEach((s, i) => {
      let bar = s.querySelector('.bar');
      if (!bar) {
        const prog = document.createElement('div');
        prog.className = 'progress';
        bar = document.createElement('div');
        bar.className = 'bar';
        prog.appendChild(bar);
        s.appendChild(prog);
      }
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const bar = en.target.querySelector('.bar');
          if (bar && !bar.dataset.done) {
            bar.dataset.done = "1";
            bar.style.width = (60 + Math.random() * 35).toFixed(0) + '%';
          }
        }
      });
    }, { threshold: .4 });
    steps.forEach(s => io.observe(s));
  }

  // Inline FAQ accordion
  function initInlineFAQ() {
    const wrap = $('#inline-faq');
    if (!wrap) return;
    // nothing special: <details> works natively
  }

  function registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => { });
    }
  }

  // Mobile Menu
  function initMobileMenu() {
    const toggle = $('.mobile-toggle');
    const nav = $('.nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.contains('open');
      if (isOpen) {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        nav.classList.add('open');
        toggle.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const lang = currentLang();
    localStorage.setItem('jdchat_lang', lang);
    applyLang(lang);
    navActive();
    initLangSelect();
    renderDetectedCTA();
    // applyRemoteImages();
    initContactForm();
    initStepProgress();
    initInlineFAQ();
    initMobileMenu();
    registerSW();
  });
})();

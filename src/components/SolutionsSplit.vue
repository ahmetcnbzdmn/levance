<template>
  <section class="solutions-split">
    <!-- Left Side: Web Solutions -->
    <div class="solution-half web-solutions">
      <div class="glass-overlay"></div>
      <div class="content fade-up">
        <span class="top-label">Levance</span>
        <h2 class="title">{{ $t('solutions.web.title') }}</h2>
        <span class="subtitle-tag">{{ $t('solutions.web.subtitle') }}</span>
        <p class="description">
          {{ $t('solutions.web.description') }}
        </p>
        <Button :label="$t('solutions.web.cta')" class="p-button-outlined p-button-white explore-btn" />
      </div>
    </div>

    <!-- Right Side: ERP Solutions -->
    <div class="solution-half erp-solutions">
      <div class="glass-overlay"></div>
      <div class="content fade-up">
        <span class="top-label">Levance</span>
        <h2 class="title">{{ $t('solutions.erp.title') }}</h2>
        <span class="subtitle-tag">{{ $t('solutions.erp.subtitle') }}</span>
        <p class="description">
          {{ $t('solutions.erp.description') }}
        </p>
        <Button :label="$t('solutions.erp.cta')" class="p-button-outlined p-button-white explore-btn" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
.solutions-split {
  display: flex;
  min-height: 650px;
  width: 100%;
  overflow: hidden;
  background-color: #050b18;
}

.solution-half {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  overflow: hidden;
}

/* Backgrounds - Ultra Premium Gradients */
.web-solutions {
  background: radial-gradient(circle at 0% 0%, #1e4bb3 0%, #0a1934 100%);
}

.erp-solutions {
  background: radial-gradient(circle at 100% 100%, #009688 0%, #051a17 100%);
}

/* Decorative Glass Overlay */
.glass-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%);
  pointer-events: none;
  z-index: 1;
}

/* Hover Growth Logic */
.solutions-split:hover .solution-half {
  flex: 0.85;
}

.solution-half:hover {
  flex: 1.15 !important;
}

/* Content Styling */
.content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 2rem;
  width: 500px;
  flex-shrink: 0;
  transition: transform 0.5s ease;
}

.solution-half:hover .content {
  transform: scale(1.05);
}

.top-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--accent-green);
  letter-spacing: 4px;
  text-transform: uppercase;
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.subtitle-tag {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.description {
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0.85;
  font-weight: 400;
}

/* Premium Button Styling */
:deep(.p-button.p-button-outlined.p-button-white) {
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  background: rgba(255, 255, 255, 0.05) !important;
  padding: 1rem 2.5rem !important;
  font-weight: 700 !important;
  border-radius: 12px !important;
  backdrop-filter: blur(5px);
  transition: all 0.4s ease !important;
}

:deep(.p-button.p-button-outlined.p-button-white:hover) {
  background: white !important;
  color: #0a1934 !important;
  border-color: white !important;
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.erp-solutions :deep(.p-button.p-button-outlined.p-button-white:hover) {
  color: #005a4e !important;
}

@media (max-width: 1024px) {
  .solutions-split {
    min-height: 1000px;
    flex-direction: column;
  }
  .solutions-split:hover .solution-half {
    flex: 1;
  }
  .solution-half:hover {
    flex: 1 !important;
  }
  .title {
    font-size: 2.75rem;
  }
  .content {
    padding: 2rem;
  }
}
</style>

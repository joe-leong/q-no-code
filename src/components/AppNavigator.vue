<template>
  <div class="app-navigator">
    <div class="app-info-wrapper">
      <div class="app-logo">
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/11.3.0/2/svg/1f469-200d-1f692.svg"
        />
      </div>
      <h1 class="app-name">Q</h1>
    </div>
    <div class="app-navigator-link-wrapper">
      <RouterLink
        class="app-navigator-link-item"
        v-for="item in linkItems"
        :key="item.value"
        :style="activeLink === item.value && { background: item.bg }"
        :to="item.value"
      >
        <div
          :style="{
            lineHeight: 0.7,
            color: activeLink === item.value ? item.color : 'var(--color-gray-700)'
          }"
        >
          <Icon :type="item.value" :active="activeLink === item.value" />
        </div>
        <span class="item-title">
          {{ item.label }}
        </span>
        <div
          class="item-border"
          :style="activeLink === item.value ? { background: item.borderColor } : {}"
        ></div>
      </RouterLink>
    </div>
    <div class="app-setting-wrapper">
      <div class="common-btn debug-btn" :class="{ debug: envStore.debug }" @click="envStore.toggle">
        <Bug />
        开发模式:({{ envStore.debug ? '开' : '关' }})
      </div>
      <div class="common-btn">
        <Share />
        发布
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Data, LayoutThree, Lightning, Share, Bug } from '@icon-park/vue-next'
import { useEnvStore } from '@/stores/debug'

const linkItems = [
  {
    value: 'dataSource',
    label: '数据源',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(0, 196, 83, 0.2) 0%, rgba(0, 196, 83, 0) 100%)`,
    color: 'rgb(0, 196, 83)',
    borderColor: 'radial-gradient(50% 50%, rgb(0, 196, 83) 0%, rgba(0, 196, 83, 0) 100%)'
  },
  {
    value: 'layout',
    label: '布局',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(24, 190, 212, 0.2) 0%, rgba(24, 190, 212, 0) 100%)`,
    color: 'rgb(24, 190, 212)',
    borderColor: 'radial-gradient(50% 50%, rgb(24, 190, 212) 0%, rgba(24, 190, 212, 0) 100%)'
  },
  {
    value: 'actions',
    label: '动作',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(241, 60, 11, 0.2) 0%, rgba(241, 60, 11, 0) 100%)`,
    color: 'rgb(241, 60, 11)',
    borderColor: 'radial-gradient(50% 50%, rgb(241, 60, 11) 0%, rgba(241, 60, 11, 0) 100%)'
  }
]

const route = useRoute()

const envStore = useEnvStore()

const activeLink = computed(() => route.name)

const Icon = defineComponent({
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup(props) {
    switch (props.type) {
      case 'dataSource':
        return () => h(Data, { size: 16 })
      case 'layout':
        return () => h(LayoutThree, { size: 16 })
      case 'actions':
        return () => h(Lightning, { size: 16 })

      default:
        return () => h('div')
    }
  }
})
</script>

<style scoped>
.app-navigator {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
}

.app-info-wrapper {
  display: flex;
  width: 1000px;
  place-items: center;
}

.app-logo {
  margin: 10px 8px 10px 18px;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  background-color: var(--color-primary);
}

.app-logo img {
  padding: 6px;
  width: 100%;
  height: 100%;
}

.app-name {
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bolder);
  color: var(--color-gray-900);
}

.app-navigator-link-wrapper {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-self: stretch;
}

.app-navigator-link-item {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 24px;
  padding: 0 8px;
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  background-color: var(--color-white);
  align-self: stretch;
}

.item-title {
  margin-left: 8px;
  color: var(--color-black);
}

.item-border {
  position: absolute;
  right: 0;
  bottom: -1px;
  left: 0;
  height: 1px;
}

.app-setting-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-right: 18px;
  width: 1000px;
  place-items: center;
  gap: 12px;
}

.common-btn {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 6px 18px;
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  background-color: var(--color-black);
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.debug-btn {
  color: var(--color-black);
  background-color: var(--color-white);
  box-shadow: var(--color-gray-300) 0 0 0 1px;
}

.debug-btn.debug {
  color: var(--color-primary);
  box-shadow: var(--color-primary) 0 0 0 1px;
}
</style>

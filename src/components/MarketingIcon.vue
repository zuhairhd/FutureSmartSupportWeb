<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <g v-if="name === 'phone'"><path d="M22 16.5v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18 19.5 19.5 0 0 1 5 11.8 19.8 19.8 0 0 1 1.5 3.18 2 2 0 0 1 3.5 1h3a2 2 0 0 1 2 1.72c.13.96.37 1.91.7 2.81a2 2 0 0 1-.45 2.11L7.5 8.9a16 16 0 0 0 7.6 7.6l1.26-1.25a2 2 0 0 1 2.11-.45c.9.33 1.85.57 2.81.7A2 2 0 0 1 22 16.5Z"/></g>
    <g v-else-if="name === 'bot'"><rect x="4" y="7" width="16" height="13" rx="4"/><path d="M12 3v4M9 3h6M2 13h2m16 0h2"/><circle cx="9" cy="13" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="13" r="1" fill="currentColor" stroke="none"/><path d="M9 17h6"/></g>
    <g v-else-if="name === 'gateway'"><rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M7 9h10M7 14h3m4 0h3"/><circle cx="6.5" cy="15" r=".6" fill="currentColor"/></g>
    <g v-else-if="name === 'deskphone'"><rect x="3" y="4" width="18" height="16" rx="2"/><rect x="7" y="7" width="10" height="4" rx="1"/><path d="M7 15h2m3 0h2m3 0h.1M7 18h2m3 0h2m3 0h.1"/></g>
    <g v-else-if="name === 'cloud'"><path d="M7 18a5 5 0 1 1 0-10c.7-3 3.3-5 6.5-5a6.5 6.5 0 0 1 6.3 5A5 5 0 0 1 19 18Z"/><path d="m10 14 2 2 3-3"/></g>
    <g v-else-if="name === 'bell'"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></g>
    <g v-else-if="name === 'shield'"><path d="M12 22c-6-2.5-9-6.2-9-12V4l9-3 9 3v6c0 5.8-3 9.5-9 12Z"/><path d="m8 11 3 3 5-5"/></g>
    <g v-else-if="name === 'globe'"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 6 5 12 0 18M12 3c-5 6-5 12 0 18"/></g>
    <g v-else-if="name === 'chart'"><path d="M4 20V10m6 10V4m6 16v-7m4 7H2"/></g>
    <g v-else-if="name === 'clock'"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></g>
    <g v-else-if="name === 'arrow'"><path d="M4 12h16m-6-6 6 6-6 6"/></g>
    <g v-else-if="name === 'check'"><path d="m4 12 5 5L20 6"/></g>
    <g v-else-if="name === 'messages'"><path d="M20 11.5a7 7 0 0 1-7 7 8 8 0 0 1-3-.55L5 20l1.75-4A7 7 0 1 1 20 11.5Z"/><path d="M8 11h8m-8 3h5"/></g>
    <g v-else-if="name === 'people'"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 11a3 3 0 0 0 0-6M17 14a6 6 0 0 1 4 6"/></g>
    <g v-else-if="name === 'server'"><rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"/></g>
    <g v-else-if="name === 'whatsapp'"><path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z"/><path d="M9 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.1.7l-.5.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.6c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.6v.5c0 .3-.2.6-.6.8-.6.3-1.6.4-2.9-.2a9 9 0 0 1-4.3-4.3c-.5-1.2-.5-2.3-.2-2.9z"/></g>
    <g v-else-if="name === 'wallet'"><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2M7 6l8-3 1.5 3"/></g>
    <g v-else-if="name === 'tool'"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.5 17.3a1.8 1.8 0 0 0 2.6 2.6l5.8-5.8a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/></g>
    <g v-else-if="name === 'network'"><rect x="9" y="2.5" width="6" height="5" rx="1"/><rect x="2.5" y="16.5" width="6" height="5" rx="1"/><rect x="15.5" y="16.5" width="6" height="5" rx="1"/><path d="M12 7.5v4.5M5.5 16.5V12h13v4.5"/></g>
    <g v-else-if="name === 'lock'"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></g>
  </svg>
</template>
<script setup>
defineProps({ name: { type: String, required: true }, size: { type: [Number, String], default: 24 } })
</script>

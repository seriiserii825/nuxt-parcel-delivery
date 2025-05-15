<template>
  <div id="map" style="height: 500px"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  if (process.client && navigator.geolocation) {
    const L = await import('leaflet')

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      const map = L.map('map').setView([latitude, longitude], 13)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map)

      L.marker([latitude, longitude]).addTo(map)
        .bindPopup('You are here!')
        .openPopup()
    })
  }
})
</script>

<script setup>
import { ref, onMounted } from "vue";

const location = ref(null);

onMounted(async () => {
  if (process.client && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
        );
        const data = await response.json();
        const city = data.address.city || data.address.town || data.address.village;
        const country = data.address.country || data.address.state || data.address.region;
        console.log("country", country);

        if (country && city) {
          location.value = {
            city,
            country,
          };
        }
      },
      (err) => {
        console.error("Geolocation error:", err);
      },
    );
  }
});
</script>

<template>
  <div class="flex items-center gap-6">
    <div class="flex items-center justify-center p-2 w-[30] dark:bg-dark-primary rounded-sm">
      <i class="fa-solid fa-location-dot"></i>
    </div>
    <div>
      <p class="text-sm">Your Location</p>
      <p v-if="location" class="font-bold">{{ location.city }}, {{ location.country }}</p>
      <p v-else>Detecting your location...</p>
    </div>
  </div>
</template>

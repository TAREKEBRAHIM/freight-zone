<template>
    <button 
      v-show="showScrollButton" 
      class="scroll-top-btn" 
      @click="scrollToTop"
    >
      ↑
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const showScrollButton = ref(false);
  
  const handleScroll = () => {
    showScrollButton.value = window.scrollY > 300;
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  .scroll-top-btn {
    position: fixed;
    bottom: 40px;
    right: 30px;
    padding: 7px 14px;
    font-size: 24px;
    background-color: #FC153B;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;
  }
  
  .scroll-top-btn:hover {
    background-color: #d61232;
  }
  </style>
  
<template>
  <router-view />
  <ScrollTop />
</template>

<script setup>
import ScrollTop from '@/components/ScrollTop.vue';
import { useHead } from '@vueuse/head';

useHead({
  title: 'FreightZone | Smart Delivery & Shipping Solutions',
  meta: [
    { name: 'description', content: 'FreightZone is a smart delivery app that connects customers with shipping providers easily and securely, offering real-time tracking, order management, and fast delivery services locally and internationally.' },
    { name: 'keywords', content: 'freightzone, delivery app, shipping app, logistics, freight delivery, order tracking, courier service, package delivery, express shipping, delivery management, smart logistics, international shipping' },
    { name: 'author', content: 'By Tarek Ebrahim' },
  ]
});

</script>

<style>
body {
  margin: 0;
  font-family: 'poppins-regular', sans-serif;
  padding: 0px;
}




/*cairo */
@font-face {
  font-family: 'cairo-regular';
  src: url(../src/assets/fonts/cairo/ArbFONTS-Cairo-Regular.ttf);
}


@font-face {
  font-family: 'cairo-bold';
  src: url(../src/assets/fonts/cairo/ArbFONTS-Cairo-Bold.ttf);
}

/*poppins */


@font-face {
  font-family: 'poppins-light';
  src: url(../src/assets/fonts/poppins/Poppins-Light.ttf);
}


@font-face {
  font-family: 'poppins-regular';
  src: url(../src/assets/fonts/poppins/Poppins-Regular.ttf);
}

@font-face {
  font-family: 'poppins-bold';
  src: url(../src/assets/fonts/poppins/Poppins-Bold.ttf);
}

@font-face {
  font-family: 'poppins-extrabold';
  src: url(../src/assets/fonts/poppins/Poppins-ExtraBold.ttf);
}


/*dm-sans */

@font-face {
  font-family: 'dm-light';
  src: url(../src/assets/fonts/DM/DMSans_24pt-Light.ttf);
}


@font-face {
  font-family: 'dm-regular';
  src: url(../src/assets/fonts/DM/DMSans_24pt-Regular.ttf);
}


@font-face {
  font-family: 'dm-semi-bold';
  src: url(../src/assets/fonts/DM/DMSans_24pt-SemiBold.ttf);
}



@font-face {
  font-family: 'dm-bold';
  src: url(../src/assets/fonts/DM/DMSans_24pt-Bold.ttf);
}


/*rlway */

@font-face {
  font-family: 'rlway-regular';
  src: url(../src/assets/fonts/relway/Raleway-Regular.ttf);
}

/*KumbhSans*/

@font-face {
  font-family: 'KumbhSans';
  src: url(../src/assets/fonts/kumbh-sans/KumbhSans-VariableFont_YOPQ\,wght.ttf);
}
</style>

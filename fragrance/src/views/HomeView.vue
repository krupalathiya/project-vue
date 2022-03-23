<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
import Product from '@/product.json'
export default {
  default () {
    return {
      inventory: Product
    }
  }
}
</script>

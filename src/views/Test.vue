<template>
  <div>
    <ProductGrid :products="products" cols="2" />
  </div>
</template>

<script>
import ProductGrid from "@/components/ProductGrid";

export default {
  components: {
    ProductGrid
  },
  data() {
    return {
      products: [
        {title: "FIFA 22", price: "3485", img: "fifa22", discount: "57"},
        {title: "Elite dangerous", price: "2000", img: "ed", discount: null},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Fallout 76", price: "3000", img: "fallout76", discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "God of war", price: "6000", img: "gow", discount: "38"},
        {title: "GTA 5", price: "600", img: "gta5", discount: null},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "RDR 2", price: "2600", img: "rdr2", discount: "5"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},
        {title: "Test", price: "1600", img: null, discount: "10"},



      ]
    }
  }
}
</script>

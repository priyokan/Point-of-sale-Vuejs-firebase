<template>
    <div>
        <Slider :menus='menu' ></Slider>           
        <Menus :menus='menu' class="position-relative mt-5"></Menus>
    </div>
</template>

<script>
import Slider from './home/Slider'
import Menus from './home/Menus'

  export default {
    props:{
        menu:Array,
    },
    components:{
        Slider,
        Menus,
    }
  }
</script>
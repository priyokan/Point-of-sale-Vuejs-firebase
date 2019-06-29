<template>
    <div>
        <b-container style='position:relative;
                    top:75px'>
            <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;
                    box-shadow: 5px 10px 20px #232323;
                    "
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            class="m-2"
            >

            <b-carousel-slide
                v-for='(menu,index) in menus'
                :caption="menu.tittle"
                :text="menu.deskripsi"
                :key="index">
                <img
                  slot="img"
                  class="d-block img-fluid w-100"
                  style="height:500px;object-fit:cover"
                  :src="menu.img"
                  alt="image slot"
            ></b-carousel-slide>                        

        </b-carousel> 
    </b-container>                          
  </div>
</template>

<script>
  export default {
    props:{
        menus:Array,
    },

    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<template>
    <div id="menus">
        <b-container style="position:relative;
                    top:75px;">
            <div>
            <b-card-group v-for="(menu,index) in menus" class="m-2"  style="max-width:30%;height100%;display:inline-block" :key="index">
                <div class="card bg-white text-white">
                <img :src="menu.img" class="card-img" :alt="menu.img" style='height:200px;object-fit:cover'>
                    <div class="card-img-overlay">
                        <h5 class="card-title"> {{menu.tittle}} </h5>
                        <p class="card-text"> {{menu.deskripsi}} </p>
                    </div>
                </div>
            </b-card-group>   
            </div>
        </b-container>


    </div>
</template>
<script>
export default {
    props:{
        menus:Array,
    },
    mounted(){
    }
}
</script>
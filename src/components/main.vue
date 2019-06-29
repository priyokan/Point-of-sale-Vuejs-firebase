<template>
    <div>       
       <div><img src="../img/dark-wood-3840x2160.jpg" style="position:fixed;width:100%;left:0px;z-index:-4;" ></div> 
         <div class="" style="width:100vw;height:60px"></div>
        <Navbar></Navbar>
        <Home :menu='Menus'></Home>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from './main/navbar'
import Home from './main/Home'
import Footer from './main/Footer'

export default {
    components: {
        Navbar,
        Home,
        Footer,
    },
    data() {
        return {
            Menus:[
                {tittle:'Brownies',deskripsi:'lorem ipsum dolor sit amet consetetur hahah hehehe',img:'https://firebasestorage.googleapis.com/v0/b/projectmb-8fcd6.appspot.com/o/59633061_1437224753087073_7711968901351158938_n.jpg?alt=media&token=8173d881-53a5-4945-8366-42fd17445aae'},
                {tittle:'Cookies',deskripsi:'lorem ipsum dolor sit amet consetetur hahah hehehe',img:'https://firebasestorage.googleapis.com/v0/b/projectmb-8fcd6.appspot.com/o/59940313_420549635166814_3606121362590884351_n.jpg?alt=media&token=bf88b853-79c0-472b-99d3-54cf6d770114'},
                {tittle:'Puding',deskripsi:'lorem ipsum dolor sit amet consetetur hahah hehehe',img:'https://firebasestorage.googleapis.com/v0/b/projectmb-8fcd6.appspot.com/o/38774351_320980808638202_582526770838765568_n.jpg?alt=media&token=ac476211-ee7d-42d9-a363-2413112d8cba'},
                {tittle:'Pizza',deskripsi:'lorem ipsum dolor sit amet consetetur hahah hehehe',img:'https://firebasestorage.googleapis.com/v0/b/projectmb-8fcd6.appspot.com/o/pza.jpg?alt=media&token=f5284f82-77d8-46c4-a777-b3f938c5bfa0'},   
                {tittle:'Donnut',deskripsi:'lorem ipsum dolor sit amet consetetur hahah hehehe',img:'https://firebasestorage.googleapis.com/v0/b/projectmb-8fcd6.appspot.com/o/52302878_401757560393009_6098301107787540994_n.jpg?alt=media&token=d36f2427-104d-4eb2-b249-2d52f7e6e3b9'}   
            ]
        }
    },
}
</script>
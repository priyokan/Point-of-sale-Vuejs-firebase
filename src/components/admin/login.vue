<template>
    <div id='login'>
        <b-container  
            class="shadow-lg"  
            style="
            background:none; 
            margin:auto;
            padding-top:4px;
            border-radius:20px;
            position:relative;
            border:2px solid #ffffff;
            width:400px;
            height:350px">
            <div>                    
                    <b-form-group id="group-username">
                        <h3 class="">@</h3>
                        <b-form-input
                        id="username"
                        v-model="form.username"
                        type="email"
                        class="input username"
                        required
                        placeholder="Email..."
                        ></b-form-input>
                    </b-form-group>                    
                    <b-form-group id="group-password">
                        <div class="pokok">
                        <!-- <img class="img" style="width: 31px;" src="../../assets/password.svg" alt="">
                        <img class='eye' v-show="pwType=='text'" src="../../assets/slash.svg" alt="">
                        <img class='eye' @click="showPass" src="../../assets/eye.svg" alt=""> -->
                        </div>
                        <b-form-input
                        id="password"
                        v-model="form.password"
                        :type="pwType"
                        class="input password"
                        required
                        placeholder="Password..."
                        ></b-form-input>
                    </b-form-group>
                    <b-alert show variant="danger" v-show="alert"> {{alert}} tidak boleh kosong </b-alert>
                    <b-alert show variant="danger" v-show="salah">{{salah}}</b-alert>
                    <b-form-checkbox
                        id="cookie"
                        v-model="cookie"
                        value=true
                        unchecked-value=false
                        class='text-left m-2'
                        >
                        Ingat saya
                    </b-form-checkbox>
                    <b-button variant="primary" class="mt-4 pt-4" pill @click="submit">Login</b-button>
                </div>
        </b-container>
    </div>
</template>
<script>
export default {
    components:{
    },
    data() {
        return {
            form:{
                nis:null
            },
            cookie:false,
            alert:'',
            classUcapan:['ucapan-login','p-5','pergeseran-kanan-ucapan'],
            classForm:['m-5', 'form','pergeseran-kiri-form'],
            text:{
                head:'siswa',
                deskripsi:'Friendship contrasted solicitude insipidity in introduced literature it. Repulsive extremity enjoyment she perceived nor. ',
            }
        }
    },
    methods: {
        geser(){
            if(this.text.head=='siswa'){
                this.classUcapan.pop()
                this.classForm.pop()
                this.classUcapan.push('pergeseran-kiri-ucapan')
                this.classForm.push('pergeseran-kanan-form')
                this.text.head = 'guru/admin'
            }else{                
                this.classUcapan.pop()
                this.classForm.pop()
                this.classUcapan.push('pergeseran-kanan-ucapan')
                this.classForm.push('pergeseran-kiri-form')
                this.text.head = 'siswa'
            }
        },
        enter(){
            let ress
            let form = {
                nis : this.form.nis,
            }      
            if(form.nis){  
                Axios
                .post(apiUrl()+'signin',form)
                .then((result)=>{
                    
                    if(result.data.results){
                        console.log(result.data.results.token)
                    }
                })
            }
        },
        submit(){
            let ress
            let form = {
                nis : this.form.nis,
            }      
            this.alert=''
            if(form.nis){  
                enter()
            }else{
                if(!form.nis){
                    this.alert += 'NIS'
                }
            }
        }
    },
}
</script>
<style>
#login{
    background: url('../../img/dark-wood-3840x2160.jpg');
    height: 44vw;
    background-size: contain;
    padding: 80px
}
#login .input{
    border: none;
    border-bottom: 1px solid #c8c8c8;
    margin-top:-10px;
    padding-left:30px;
    padding-right:30px;
}
 #login .img{
    position: relative;
    top: 23px;
    left: -47%;
    height: 35px;
    width: 30px;
}
 #login h3{
    position: relative;
    top: 31px;
    left: 0%;
    height: 35px;
    color: rgb(158, 158, 158);
    width: 30px;
}
.pokok{
    position: relative;
    display: inline;
    height: 30px;
    width: 100%;
}

#login .btn{
    width: 100%;
    height: 50px;
}
.ucapan-login{
    position: absolute;
    top: 0%;
    color:#ffffff;
    right: 0px;
    margin-left: -15px;
    background: linear-gradient(to left bottom,#4EAFBA,#47B199);
    height: 350px;
    width: 300px;
    padding: auto;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 2;
    transition: border-radius 3s,right 2s,;
}
.pergeseran-kiri-ucapan{
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        right: 500px;
}
.pergeseran-kanan-ucapan{
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        right: 0px;
}
.ucapan-login .btn-ucapan{
    background:none;
    border:2px solid #ffffff;
    color:#ffffff;
    position: absolute;
    bottom: 10%;    
    left: 10%;
}
.form{
    position: relative;;
    top: 0%;
    transition:left 2s;
}
.pergeseran-kiri-form{
        left: 00px;
}
.pergeseran-kanan-form{
        left: 300px;
}
</style>


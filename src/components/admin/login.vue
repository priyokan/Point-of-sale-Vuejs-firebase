<template>
    <div id='login'>
        <b-container    
            style="
            background:none; 
            margin:auto;
            padding-bottom:50px;    
            border-radius:20px;
            position:relative;
            box-shadow:4px 8px 30px 10px #2d2d2d;
            border:5px solid #ffffff;
            width:400px;">
                    <img src="../../img/koki.svg" alt=""
                    style="width:50%;margin-bottom:-50px">
            <div>    
                <b-form>
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
                        <b-button variant="primary" type='submit' class="mt-4 pt-4" pill >Login</b-button>
                    </b-form>                
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
    border-bottom: 1px solid #ffffff;
    margin-top:0px;
    padding-left:30px;
    padding-right:30px;
    background-color:rgba(59, 53, 53, 0.555);   
    color: #ffffff;
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
</style>


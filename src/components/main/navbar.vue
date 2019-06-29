<template>
    <div>
        <b-navbar type="dark" class="p-2 mb-0" style="background-image: linear-gradient(rgb(35, 35, 35), rgba(35, 35, 35,0));height:70px;position:fixed;width:100vw;top:0px;z-index:100">
            <!-- <div class="position-fixed" style="z-index:1"> -->
                <b-container>
                    <img src="../../img/koki.svg" style="width:5%;margin-top:-5px;margin-right:2%" alt="">

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#">Home</b-nav-item>

                        <b-nav-item-dropdown text="Menu">
                        <b-dropdown-item href="#">Brownies</b-dropdown-item>
                        <b-dropdown-item href="#">Cookies</b-dropdown-item>
                        <b-dropdown-item href="#">Puding</b-dropdown-item>
                        <b-dropdown-item href="#">Pizza</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item href="#">Lokasi</b-nav-item>

                    </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    </b-nav-form>

                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template slot="button-content"><em>User</em></template>
                    <b-dropdown-item to="/admin">Login Admin</b-dropdown-item>
                    <b-dropdown-item href="#">Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                </b-collapse>    
            </b-container>
        <!-- </div> -->
    </b-navbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },    

}
</script>
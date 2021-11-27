<template>
    <header class="header">
         <div class="nav container">
            <h3 class="title">Where in the word ?</h3>
            <div class="toogle">
                <i class="far fa-moon"></i>
                <p class="btn" @click="switchTheme">Dark Mode</p>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    methods: {
        switchTheme() {

         document.body.classList.toggle('light');  

        }
    }
    
}
</script>
<style>
.header { 
    background-color: var(--darkblue);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
}
.light .header { 
    background-color: var(--white);
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline; 
    padding: 10px 0; 
}


.title {
    font-size: 22px;
}
 
</style>
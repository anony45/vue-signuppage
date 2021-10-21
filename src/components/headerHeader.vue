<template>
  <div id="app" class="top_container">
<h1 :heading="{value:'My Title'}"></h1>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  props:{
    heading:{
        type:Object,
        default(){
            return {
                value:'A Default Title',
                icon: 'fa-user', 
                number: 0 
            }
        }
    }
},
}

</script>

<style lang="css" scoped>
</style>

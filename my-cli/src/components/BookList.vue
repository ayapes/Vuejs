<template>
    <div>
        <img v-bind:src="url" alt="">
        <div>{{title}}</div>
    </div>
</template>
<script>
export default {
    name:'BookList',
    props:{
        title:String,
        url:String
    }
}
</script>
<style>
    
</style>
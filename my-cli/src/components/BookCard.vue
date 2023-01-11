<template>
    <div class="container">
        <img v-bind:src="bookData.mediumImageUrl" alt="">
        <div>
            <div>{{ bookData.title }}</div>
            <div>{{ bookData.publisherName }}</div>
            <div>{{ bookData.itemPrice }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BookCard',
    props: {
        bookData: Object
    }
}
</script>
<style>
.container {
    display: flex;
    flex-direction: row;
    border: solid 1px gray;
    margin: 0;
    padding: 5px;
    width: 500px;
}
</style>
<template>
    <div>
        <strong>Hello, Vue!</strong>
        <p>The trade widget will appear below</p>
        <trade-form/>
    </div>
</template>

<script>
    import TradeForm from "./trade-form";
    export default {
        name: "hello-world",
        components: {TradeForm}
    }
</script>

<style scoped>
    strong {
        color: tomato;
    }
</style>
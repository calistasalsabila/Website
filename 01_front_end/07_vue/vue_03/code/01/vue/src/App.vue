<script setup>
import { ref } from 'vue'

const count = ref(0);
</script>

<template>
   <main>
        <h1>Counter</h1>
        <span id="value">{{ count }}</span>
        <div>
            <button id="decrement" @click="count--">-</button>
            <button id="increment" @click="count++">+</button>
        </div>
    </main>
</template>

<style scoped>
  main{
    text-align: center;
    outline: 2px solid aqua;
    border-radius: 8px;
    padding: 30px;
}

#value{
    font-size: 50px;
    
}

button {
    font-size: 16px;
    margin: 0 5px;
    background-color: black;
    color: aqua;
    border: 1px solid aqua;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
}

button:hover{
    background-color: aqua;
    color: black;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }

}
</style>
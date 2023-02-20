<template>
    <h1 class="flex justify-content-center font-arial color-pink">To Do List App</h1>
    <ShowHeader @add:card="onAddCard"></ShowHeader>
    <ShowCard @delete:card="onDeleteCard" :cards="cards"></ShowCard>
</template>

<script>
import ShowHeader from './components/ShowHeader.vue';
import ShowCard from './components/ShowCard.vue';

export default {
    data() {
        return {
            cards: []
        };
    },
    methods: {
        onAddCard(card) {
            console.log(card);
            this.cards.push(card);
        },
        onDeleteCard(id) {
            console.log(id);
            this.cards = this.cards.filter((card) => card.id !== id);
        }
    },
    components: {
        ShowHeader,
        ShowCard
    }
};
</script>

<style></style>

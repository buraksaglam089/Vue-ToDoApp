<template>
    <HeaderComponent @add:card="onAddCard"></HeaderComponent>
    <AppCard :cards="cards"></AppCard>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import AppCard from './components/AppCard.vue';

export default {
    data() {
        return {
            cards: []
        };
    },
    methods: {
        onAddCard(card) {
            this.cards.push(card);
        }
    },
    components: {
        HeaderComponent,
        AppCard
    }
};
</script>

<style></style>

<template>
    <h1 class="flex justify-content-center font-arial color-pink">To Do List App</h1>
    <ShowHeader @changer="onEditModeChanger" @add:card="onAddCard" :editCard="editCard" :editMode="editMode"></ShowHeader>
    <ShowCard @edit:card="onChangeCard" @delete:card="onDeleteCard" :cards="cards"></ShowCard>
</template>

<script>
import ShowHeader from './components/ShowHeader.vue';
import ShowCard from './components/ShowCard.vue';

export default {
    data() {
        return {
            cards: [],
            editCard: {},
            editMode: false
        };
    },
    methods: {
        onAddCard(card) {
            if (!this.editMode) {
                this.cards.push(card);
            } else {
                this.cards = this.cards.map((item) => {
                    if (item.id === card.id) {
                        return card;
                    }

                    return item;
                });

                this.onEditModeChanger();
            }
        },
        onDeleteCard(id) {
            console.log(id);
            this.cards = this.cards.filter((card) => card.id !== id);
        },
        onChangeCard(card) {
            console.log('sdada');
            this.editCard = card;
            this.editMode = true;
        },
        onEditModeChanger() {
            this.editMode = !this.editMode;
        }
    },
    components: {
        ShowHeader,
        ShowCard
    }
};
</script>

<style></style>

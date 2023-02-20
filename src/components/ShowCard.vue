<template>
    <div class="grid mt-5">
        <div v-for="card in cards" :key="card" class="col-3">
            <Card>
                <template #header>
                    <div class="flex justify-content-between px-3">
                        <span> {{ card.title }}</span>
                        <i @click="deleteCard(card.id)" class="pi pi-times ml-8"></i>
                    </div>
                </template>
                <template #content>
                    {{ card.description }}
                </template>
            </Card>
        </div>
    </div>
</template>
<script>
export default {
    emits: ['delete:card'],
    props: {
        cards: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        deleteCard(card) {
            this.$emit('delete:card', card);
        }
    }
};
</script>

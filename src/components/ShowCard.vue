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
                <template #footer>
                    <div class="flex justify-content-end px-0">
                        <i @click="editCard(card)" class="pi pi-pencil"></i>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>
<script>
export default {
    emits: ['delete:card', 'edit:card'],

    props: {
        cards: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        deleteCard(card) {
            this.$emit('delete:card', card);
        },
        editCard(card) {
            this.$emit('edit:card', card);
        }
    }
};
</script>

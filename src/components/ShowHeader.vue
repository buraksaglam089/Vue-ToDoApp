<template>
    <InputText v-model="title" placeholder="Title" class="ml-8"></InputText>
    <InputText v-model="description" placeholder="Description" class="ml-4"></InputText>
    <Button class="ml-4" @click="addCard" label="Add"></Button>
</template>

<script>
export default {
    emits: ['add:card'],
    data() {
        return {
            title: '',
            description: ''
        };
    },
    methods: {
        addCard() {
            this.$emit('add:card', { id: Date.now(), title: this.title, description: this.description });

            this.title = '';
            this.description = '';
        }
    }
};
</script>

<style></style>

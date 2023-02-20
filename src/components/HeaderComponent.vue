<template>
    <InputText v-model="title" placeholder="title"></InputText>
    <InputText v-model="description" placeholder="description"></InputText>
    <Button @click="addCard" label="Add"></Button>
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
            this.$emit('add:card', { title: this.title, description: this.description });
        }
    }
};
</script>

<style></style>

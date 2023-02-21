<template>
    <div class="flex justify-content-center">
        <InputText v-model="title" placeholder="Title" class="ml-8"></InputText>
        <InputText v-model="description" placeholder="Description" class="ml-4"></InputText>
        <Button class="ml-4" @click="onClickSave" :label="editableButtonLabel"></Button>
        <Button v-if="editMode" class="ml-4" @click="onClickCancel" label="Cancel"></Button>
    </div>
</template>

<script>
export default {
    emits: ['add:card', 'changer'],
    props: {
        editCard: {
            type: Object,
            default: () => {}
        },
        editMode: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            title: '',
            description: ''
        };
    },
    watch: {
        editMode() {
            if (this.editMode) {
                this.title = this.editCard.title;
                this.description = this.editCard.description;
            }
        }
    },
    computed: {
        editableButtonLabel() {
            return this.editMode ? 'Update' : 'Add';
        }
    },
    methods: {
        onClickSave() {
            const card = {
                id: this.editMode ? this.editCard.id : Date.now(),
                title: this.title,
                description: this.description
            };

            this.$emit('add:card', card);

            this.clearCard();
        },
        onClickCancel() {
            this.clearCard();
            this.reditModeChanger();
        },
        clearCard() {
            this.title = '';
            this.description = '';
        },
        reditModeChanger() {
            this.$emit('changer', this.editMode);
        }
    }
};
</script>

<style></style>

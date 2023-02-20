<template>
    <div class="grid">
        <div v-for="card in cards" :key="card" class="col-3">
            <Card>
                <template #header>
                    {{ card.title }}
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
    props: {
        cards: {
            type: Array,
            default: () => []
        }
    }
};
</script>

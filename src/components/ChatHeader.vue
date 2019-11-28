<template>
    <div v-bind:class="{ active: isActive }" class="card" @click="$emit('chatClick', index)">
        <div class="card-header">
            {{header}}
        </div>
        <div class="card-body">
            <p class="card-text">Posted by: {{createdBy}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            required: true
        },
        createdBy: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        }
    }
    
}
</script>

<style lang="css" scoped>
    .card {
        width: 90%;
        margin-top: 5px;
    }

    .active {
        background: rgba(192, 209, 245, 0.9)
    }
</style>
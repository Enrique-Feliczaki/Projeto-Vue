<template>
    <div class="pagination">
        <button @click="prevPage" :disabled= "currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Próximo</button>
    </div>
</template>

<script>
    export default{
        props:['currentPage', 'totalPages'],
        methods:{
            prevPage(){
                if(this.currentPage > 1){
                    this.$emit('changePage', this.currentPage - 1 );
                }
            },
            nextPage(){
                if(this.currentPage < history.totalPages){
                    this.$emit('changePage', this.currentPage + 1);
                }
            }
        }
    };
</script>

<style scoped>
    .pagination{
        display: flex;
        justify-content: center;
    }
    button{
        margin: 0 5px;
    }
</style>
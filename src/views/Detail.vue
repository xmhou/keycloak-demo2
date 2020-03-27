<template>
    <div v-if="detail">
        <h1>{{detail.title}}</h1>
        <p>{{detail.briefIntro}}</p>
        <p>{{detail.content}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                detail: null
            }
        },
        created() {
            let _this = this;
            let id = this.$route.params.id;
            fetch("/api/getDetail/" + id)
                .then(res => res.json())
                .then(res => {
                    if(res.status == 200) {
                        _this.detail = res.data;
                    }else {
                        console.log(res.errMsg)
                    }
                    
                })
        }
    }
</script>
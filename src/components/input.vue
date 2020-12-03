<template>
    <div @click="attribute">
        <vuedraggable :group='{name: "menu", put: true}'>
        <p>{{msg}}</p>
            <a-input placeholder="Basic usage" />
        </vuedraggable>
    </div>
</template>
<script>
    import vuedraggable from 'vuedraggable';

    export default {
        components:{
            vuedraggable
        },
        name:'input',
        data () {
            return {
                msg: "输入框组件"
            }
        },
    methods:{
        attribute(){
            this.$emit('showAttribbute');
        }
    }
    }
</script>



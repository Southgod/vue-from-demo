<template>
    <vuedraggable :group='{name: "menu", put: true}'>
    <div @click="show('block','block','none','block')" style=" border:1px solid #bfd1eb;background:#f3faff;padding:3px">
            <a-input placeholder="Basic usage" />
    </div>
    </vuedraggable>
</template>
<script>
    import store from '@/store'
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
        //修改状态，控制当组件出现时出现相对应的属性选择框
        show(sizeshow,heightshow,weightshow,charactershow){
            store.commit("changesizeshow",sizeshow);
            store.commit("changeheightshow",heightshow);
            store.commit("changeweightshow",weightshow);
            store.commit("changecharactershow",charactershow);
        }
    }
    }
</script>



<template>
    <vuedraggable :group='{name: "menu", put: true}'>
    <div @click="show('block','block','block','block')" class="buttonproperty" style=" border:1px solid #bfd1eb;background:#f3faff;padding:3px">
        <a-button type="primary" block :style="{'height':divheight,'width':divweight}">
            {{content}}
        </a-button>
    </div>
    </vuedraggable>
</template>



<script>
    import store from '@/store'
    import vuedraggable from 'vuedraggable';
    export default {
        name: "characters",
        components:{
            vuedraggable
        },
        data(){
            return{
                divheight:store.state.divheight,
                divcontent:'this.computed.content'
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
        },
        computed:{
            content(){
                return store.state.content;
            },
            divweight(){
                return store.state.divweight
            }
        }
    }
</script>
<style>

</style>
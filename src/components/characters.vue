<template>
    <vuedraggable :group='{name: "menu", put: true}'>
    <div @click="show('block','block','block','block')" @dblclick="changestate(1)" class="buttonproperty" style=" border:1px solid #bfd1eb;background:#f3faff;padding:3px">
        <a-button type="primary" block :style="{'height':this.statelist[0].divheight,'width':this.statelist[0].divweight}">
            {{this.statelist[0].divcontent}}
        </a-button>
    </div>
    </vuedraggable>
</template>


<script>
    import store from '@/store'
    import vuedraggable from 'vuedraggable';

    let componentsstate = 0;
    export default {
        name: "characters",
        components:{
            vuedraggable
        },
        data() {
            return{
                statelist : [{
                    divheight:store.state.divheight,
                    divcontent:store.state.content,
                    charactersize:store.state.charactersize,
                    divweight:store.state.divweight
                }]
            }

        },
        methods:{
            //修改状态，控制当组件出现时出现相对应的属性选择框
            show(sizeshow,heightshow,weightshow,charactershow){
                store.commit("changesizeshow",sizeshow);
                store.commit("changeheightshow",heightshow);
                store.commit("changeweightshow",weightshow);
                store.commit("changecharactershow",charactershow);
            },
            resetshow(){
                store.commit('weightchange',this.statelist[0].divweight);
                store.commit('sizechange',this.statelist[0].charactersize);
                store.commit('heightchange',this.statelist[0].divheight);
                store.commit('contentchange',this.statelist[0].divcontent);
                console.log(this.statelist[0].divweight)
            },
            changestate(changedstate){
                componentsstate = changedstate;
                if (componentsstate === 1 && this.statelist.length < 1){
                    this.statelist.push({
                        divheight:store.state.divheight,
                        divcontent:this.content,
                        charactersize:store.state.charactersize,
                        divweight:store.state.divweight
                    })
                }else if (componentsstate === 1 && this.statelist.length >= 1) {
                    this.statelist.splice(0,1,{
                        divheight:store.state.divheight,
                        divcontent:this.content,
                        charactersize:store.state.charactersize,
                        divweight:store.state.divweight})
                }
            }
        },
        computed:{
            content(){
                return store.state.content;
            },
            divweight(){
                return this.statelist.filter(item => item.divweight);
            },
            charactersize(){
                return this.statelist.filter(item => item.charactersize);
            },
            divheight(){
                return this.statelist.filter(item => item.divheight);
            }
        }
    }
</script>
<style>

</style>
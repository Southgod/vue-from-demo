<template>
    <vuedraggable>
    <div style=" border:1px solid #bfd1eb;background:#f3faff;padding:3px;height: 50px;width: 100%" @click="show('none','none','none','none','block')" @dblclick="changestate(1)">
        <div v-for="item in layoutlist" :key="item">
            <div style="height: 40px;background-color: #42b983;float:left" :style="{'width':widthcomputed}">
                {{widthcomputed}}
                <vuedraggable :group='{name: "menu", put: true}'>
                </vuedraggable>
            </div>
        </div>
    </div>
    </vuedraggable>
</template>

<script>
    import store from '@/store'
    import vuedraggable from 'vuedraggable';

    let componentsstate = 0;
    export default {
        name: "layout",
        data(){
            return{
                layoutlist:[1,2],
                layoutnum:[2]
            }
        },
        components:{
            vuedraggable
        },
        methods:{
            changelist(){
                for (let i=0;i<this.latticenum();i++){
                    this.layoutlist.push(1);
                }
                console.log(this.layoutlist);
            },
            show(sizeshow,heightshow,weightshow,charactershow,latticeshow){
                store.commit("changesizeshow",sizeshow);
                store.commit("changeheightshow",heightshow);
                store.commit("changeweightshow",weightshow);
                store.commit("changecharactershow",charactershow);
                store.commit('changelatticeshow',latticeshow);
            },
            changestate(changedstate){
                componentsstate = changedstate;
                if (componentsstate === 1 && this.layoutnum.length < 1){
                    this.layoutnum.push(store.state.latticenum)
                }else if (componentsstate === 1 && this.layoutnum.length >= 1) {
                    this.layoutnum.splice(0,1, store.state.latticenum)
                }
                this.layoutlist = []
                for (let i=0;i<this.layoutnum;i++){
                    this.layoutlist.push(1);
                }
            }
        },
        computed:{
            latticenum(){
                return store.state.latticenum;
            },
            widthcomputed(){
                let  tempVal = (100/this.layoutnum).toFixed(3) ;
                return  tempVal.substring(0, tempVal.length - 1) + '%'
            }
        }
    }
</script>

<style scoped>

</style>
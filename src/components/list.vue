<template>
    <vuedraggable :group='{name: "menu", put: true}'>
    <div @click="show('block','none','none','block')" style=" border:1px solid #bfd1eb;background:#f3faff;padding:3px">

        <div>
            <a-collapse accordion>
                <a-collapse-panel key="1" header="This is panel header 1">
                    <p>{{ text }}</p>
                </a-collapse-panel>
                <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
                    <p>{{ text }}</p>
                </a-collapse-panel>
                <a-collapse-panel key="3" header="This is panel header 3">
                    <p>{{ text }}</p>
                </a-collapse-panel>
            </a-collapse>
        </div>

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
        data () {
            return {
                aboutMsg: '表单组件',
                text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
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
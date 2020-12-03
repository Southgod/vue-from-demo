<template>
    <div @click="show('none','block','none','block')">
        <a-button type="primary" block>
            primary
        </a-button>
    </div>
</template>


<script>

    export default {
        name: "characters",
        props:{
            sizeshow:String
        },
        methods:{
            //修改状态，控制当组件出现时出现相对应的属性选择框
            show(sizeshow,heightshow,weightshow,charactershow){
                this.$store.commit("changesizeshow",sizeshow);
                this.$store.commit("changeheightshow",heightshow);
                this.$store.commit("changeweightshow",weightshow);
                this.$store.commit("changecharactershow",charactershow);
            }
        }
    }
</script>
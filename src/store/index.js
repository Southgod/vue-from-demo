import vue from 'vue'
import Vuex from  'vuex'

//1.安装插件
vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        sizeshow:'none',
        heightshow:'none',
        weightshow:'none',
        charactershow:'none',
        latticeshow:'none',
        marginbottom:'16px',
        divweight:'500px',
        content:'文字内容',
        divheight:'30px',
        charactersize:'20px',
        latticenum:2
},
    mutations:{
        //控制属性栏目出现消失
        changesizeshow(state,sizeshow){
            state.sizeshow = sizeshow
        },
        changeheightshow(state,heightshow){
            state.heightshow = heightshow
        },
        changeweightshow(state,weightshow){
            state.weightshow = weightshow
        },
        changecharactershow(state,charactershow){
            state.charactershow = charactershow
        },
        changelatticeshow(state,latticeshow){
            state.latticeshow = latticeshow
        },

        //控制属性栏中值与组件属性绑定
        weightchange(state,divweight){
            state.divweight = divweight
        },
        sizechange(state, size){
            state.charactersize =  size
        },
        heightchange(state,divheight){
            state.divheight = divheight
        },
        contentchange(state,content){
            state.content = content
        },
        latticechange(state,latticenum){
            state.latticenum = latticenum
        }
    }
})


export default store
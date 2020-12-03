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
    marginbottom:'16px'
},
    mutations:{
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
        }
    }
})

export default store
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
        theadshow:'none',
        trankshow:'none',
        rcnumbershow:'none',
        selectshow:'none',
        marginbottom:'16px',
        divweight:'500px',
        content:'文字内容',
        divheight:'30px',
        charactersize:'20px',
        latticenum:2,
        thead:3,
        trank:1,
        rcnumber:2,
        rowrank:1,
        colrank:1,
        rownumber:2,
        colnumber:2,
        selectvalue:'row',
        columnstart:'',
        columnend:'',
        rowstart:'',
        rowend:'',
        gridrank:1,
        gridrankshow:'none',
        columnstartshow:'none',
        columnendshow:'none',
        rowstartshow:'none',
        rowendshow:'none',
        gridtemplatecolumns:'200px',
        gridtemplaterows:'200px'
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
        changetheadshow(state,theadshow){
            state.theadshow = theadshow
        },
        changetrankshow(state,trankshow){
            state.trankshow = trankshow
        },
        changercnumbershow(state,rcnumbershow){
            state.rcnumbershow = rcnumbershow
        },
        changeselectshow(state,selectshow){
            state.selectshow = selectshow
        },
        changegridrankshow(state,gridrankshow){
            state.gridrankshow = gridrankshow
        },
        changecolumnstartshow(state,columnstartshow){
            state.columnstartshow = columnstartshow
        },
        changecolumnendshow(state,columnendshow){
            state.columnendshow = columnendshow
        },
        changerowstartshow(state,rowstartshow){
            state.rowstartshow = rowstartshow
        },
        changerowendshow(state,rowendshow){
            state.rowendshow = rowendshow
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
        },
        theadchange(state,thead){
            state.thead = thead
        },
        trankchange(state,trank){
            state.trank = trank
        },
        rcnumberchange(state,rcnumber){
            state.rcnumber = rcnumber
        },
        columnstartchange(state,columnstart){
            state.columnstart = columnstart
        },
        columnendchange(state,columnend){
            state.columnend = columnend
        },
        rowstartchange(state,rowstart){
            state.rowstart = rowstart
        },
        rowendchange(state,rowend){
            state.rowend = rowend
        },
        gridrankchange(state,gridrank){
            state.gridrank = gridrank
        },
        gridtemplatecolumnschange(state,gridtemplatecolumns){
            state.gridtemplatecolumns = gridtemplatecolumns
        },
        gridtemplaterowschange(state,gridtemplaterows){
            state.gridtemplaterowsnn = gridtemplaterows
        }
    }
})


export default store
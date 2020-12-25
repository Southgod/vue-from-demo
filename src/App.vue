<template>
  <div id="app" style="width:1500px;">
    <div  style="width:300px;float:left;background-color: azure;height: 800px">
        <vuedraggable :group='{name: "menu", put: true}'>
            <a-button type="primary" @click="onClick();show('block','block','none','block','none','none','none','none','none','none','none','none','none','none')">输入框</a-button>
            <a-button type="primary" @click="onClick2();show('block','none','none','block','none','none','none','none','none','none','none','none','none','none')">列表</a-button>
            <a-button type="primary" @click="onClick3();show('block','block','block','block','none','none','none','none','none','none','none','none','none','none')">文字</a-button>
            <a-button type="primary" @click="onClick4();show('none','none','none','none','block','none','none','none','none','none','none','none','none','none')">布局</a-button>
            <a-button type="primary" @click="onClick5();show('none','none','none','none','none','block','block','block','block','none','none','none','none','none')">表格布局</a-button>
            <a-button type="primary" @click="onClick6();show('none','none','none','none','none','none','none','none','none','block','block','block','block','block')">网格布局</a-button>

        </vuedraggable>
    </div>
    <div style="width:900px;float:left;background-color: aliceblue;height: 800px" >
        <vuedraggable :group='{name: "menu", put: true}'>
            <div ref="container"></div>
        </vuedraggable>
    </div>
      <div style="width:300px;float:left;background-color:azure;height: 800px" >
          <div>
              <a-tabs default-active-key="1" @change="callback">
                  <a-tab-pane key="1" tab="属性栏">
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.sizeshow}" >
                          <a-input addon-before="字体大小" :default-value="charactersize" @pressEnter="sizechange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.heightshow}">
                          <a-input addon-before="宽度" :default-value="divheight" @pressEnter="heightchange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.weightshow}">
                          <a-input addon-before="长度" :default-value="divweight" @pressEnter="weightchange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.charactershow}">
                          <a-input addon-before="文字内容" :default-value="content" @pressEnter="contentchange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.latticeshow}">
                          <a-input addon-before="布局格数" :default-value="latticenum" @pressEnter="latticechange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.theadshow}">
                          <a-input addon-before="选择表头" :default-value="thead" @pressEnter="theadchange"/>
                      </div>
                      <div>
                      <a-select default-value="行" style="width: 120px" @change="selectvaluechange" :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.selectshow}">
                          <a-select-option value="row">行</a-select-option>
                          <a-select-option value="col">列</a-select-option>
                      </a-select>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.trankshow}">
                          <a-input addon-before="选择行列" :default-value="trank" @pressEnter="trankchange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.rcnumbershow}">
                          <a-input addon-before="合并行列数" :default-value="rcnumber" @pressEnter="rcnumberchange"/>
                      </div>
                      <div>
                          <a-select default-value="格1" style="width: 120px" @change="gridvaluechange" :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.gridrankshow}">
                              <a-select-option value="1">格1</a-select-option>
                              <a-select-option value="2">格2</a-select-option>
                              <a-select-option value="3">格3</a-select-option>
                              <a-select-option value="4">格4</a-select-option>
                              <a-select-option value="5">格5</a-select-option>
                              <a-select-option value="6">格6</a-select-option>
                              <a-select-option value="7">格7</a-select-option>
                              <a-select-option value="8">格8</a-select-option>
                              <a-select-option value="9">格9</a-select-option>
                              <a-select-option value="10">格10</a-select-option>
                              <a-select-option value="11">格11</a-select-option>
                              <a-select-option value="12">格12</a-select-option>
                              <a-select-option value="13">格13</a-select-option>
                              <a-select-option value="14">格14</a-select-option>
                              <a-select-option value="15">格15</a-select-option>
                              <a-select-option value="16">格16</a-select-option>
                              <a-select-option value="17">格17</a-select-option>
                              <a-select-option value="18">格18</a-select-option>
                          </a-select>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.rowstartshow}">
                          <a-input addon-before="行开始" :default-value="rowstart" @pressEnter="rowstartchange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.rowendshow}">
                          <a-input addon-before="行结束" :default-value="rowend" @pressEnter="rowendchange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.columnstartshow}">
                          <a-input addon-before="列开始" :default-value="columnstart" @pressEnter="columnstartchange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.columnendshow}">
                          <a-input addon-before="列结束" :default-value="columnend" @pressEnter="columnendchange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.columnendshow}">
                          <a-input addon-before="总体长度" :default-value="gridtemplatecolumns" @pressEnter="gridtemplatecolumnschange"/>
                      </div>
                      <div :style="{'margin-bottom':$store.state.marginbottom,'display':$store.state.columnendshow}">
                          <a-input addon-before="总体宽度" :default-value="gridtemplaterows" @pressEnter="gridtemplaterowschange"/>
                      </div>
                  </a-tab-pane>
                  <a-tab-pane key="2" tab="Tab 2" force-render></a-tab-pane>
                  <a-tab-pane key="3" tab="Tab 3"></a-tab-pane>
              </a-tabs>
          </div>
      <div id="showAttribbute" @showattribbute="showattribbute()">
      </div>
      </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vuedraggable from 'vuedraggable';
  import input from './components/input';
  import list from './components/list';
  import characters from './components/characters';
  import layout from './components/layout';
  import table from './components/table';
  import grid from './components/grid';

  export default {
    name: 'app',
    components:{
        vuedraggable,
    },data(){
          return{
              charactersize : this.$store.state.charactersize,
              divheight : this.$store.state.divheight,
              divweight : this.$store.state.divweight,
              content : this.$store.state.content,
              latticenum :this.$store.state.latticenum,
              thead :this.$store.state.thead,
              trank :this.$store.state.trank,
              rcnumber :this.$store.state.rcnumber,
              columnstart :this.$store.state.columnstart,
              columnend :this.$store.state.columnend,
              rowstart :this.$store.state.rowstart,
              rowend :this.$store.state.rowend,
              gridtemplatecolumns :this.$store.state.gridtemplatecolumns,
              gridtemplaterows :this.$store.state.gridtemplaterows
          }
      },
      methods:{
          callback(key) {
              console.log(key);
          },
          //修改状态，控制当组件出现时出现相对应的属性选择框
          show(sizeshow,heightshow,weightshow,charactershow,latticeshow,theadshow,trankshow,rcnumbershow,selectshow,gridrankshow,columnstartshow,columnendshow,rowstartshow,rowendshow){
              this.$store.commit('changesizeshow',sizeshow);
              this.$store.commit('changeheightshow',heightshow);
              this.$store.commit('changeweightshow',weightshow);
              this.$store.commit('changecharactershow',charactershow);
              this.$store.commit('changelatticeshow',latticeshow);
              this.$store.commit('changetheadshow',theadshow);
              this.$store.commit('changetrankshow',trankshow);
              this.$store.commit('changercnumbershow',rcnumbershow);
              this.$store.commit('changeselectshow',selectshow);
              this.$store.commit('changegridrankshow',gridrankshow);
              this.$store.commit('changecolumnstartshow',columnstartshow);
              this.$store.commit('changecolumnendshow',columnendshow);
              this.$store.commit('changerowstartshow',rowstartshow);
              this.$store.commit('changerowendshow',rowendshow);
          },
          //控制组件出现
          onClick(){
              var ComponentClass = Vue.extend(input)
              var instance = new ComponentClass({
                  propsData:{
                      type:'primary'
                  }
              })
              instance.$mount()
              this.$refs.container.appendChild(instance.$el)
          },
          onClick2(){
              var ComponentClass = Vue.extend(list)
              var instance = new ComponentClass({
                  propsData:{
                      type:'primary'
                  }
              })
              instance.$mount()
              this.$refs.container.appendChild(instance.$el)
          },
          onClick3(){
              var ComponentClass = Vue.extend(characters)
              var instance = new ComponentClass({
                  propsData:{
                      type:'primary'
                  }
              })
              instance.$mount()
              this.$refs.container.appendChild(instance.$el)
          },
          onClick4(){
              var ComponentClass = Vue.extend(layout)
              var instance = new ComponentClass({
                  propsData:{
                      type:'primary'
                  }
              })
              instance.$mount()
              this.$refs.container.appendChild(instance.$el)
          },
          onClick5(){
              var ComponentClass = Vue.extend(table)
              var instance = new ComponentClass({
                  propsData:{
                      type:'primary'
                  }
              })
              instance.$mount()
              this.$refs.container.appendChild(instance.$el)
          },
          onClick6(){
              var ComponentClass = Vue.extend(grid)
              var instance = new ComponentClass({
                  propsData:{
                      type:'primary'
                  }
              })
              instance.$mount()
              this.$refs.container.appendChild(instance.$el)
          },
          //控制组件属性
          weightchange(e){
              this.$store.commit('weightchange',e.target.value);
              console.log(this.$store.state.divweight)
          },
          sizechange(e){
              this.$store.commit('sizechange',e.target.value);
              console.log(this.$store.state.charactersize)
          },
          heightchange(e){
              this.$store.commit('heightchange',e.target.value);
              console.log(this.$store.state.divheight)
          },
          contentchange(e){
              this.$store.commit('contentchange',e.target.value);
              console.log(this.$store.state.content)
          },
          latticechange(e){
              this.$store.commit('latticechange',e.target.value);
              console.log(this.$store.state.content)
          },
          theadchange(e){
              this.$store.commit('theadchange',e.target.value);
              console.log(this.$store.state.thead)
          },
          trankchange(e){
              this.$store.commit('trankchange',e.target.value);
              console.log(this.$store.state.trank)
          },
          rcnumberchange(e){
              this.$store.commit('rcnumberchange',e.target.value);
              console.log(this.$store.state.rcnumber)
          },
          selectvaluechange(value) {
              this.$store.commit('selectvaluechange',value);
              console.log(value);
          },
          gridvaluechange(value) {
              this.$store.commit('gridrankchange',value);
              console.log(value);
          },
          rowstartchange(e) {
              this.$store.commit('rowstartchange',e.target.value);
              console.log(this.$store.state.columnstart);
          },
          rowendchange(e) {
              this.$store.commit('rowendchange',e.target.value);
              console.log(this.$store.state.columnend);
          },
          columnstartchange(e) {
              this.$store.commit('columnstartchange',e.target.value);
              console.log(this.$store.state.columnstart);
          },
          columnendchange(e) {
              this.$store.commit('columnendchange',e.target.value);
              console.log(this.$store.state.columnend);
          },
          gridtemplatecolumnschange(e) {
              this.$store.commit('gridtemplatecolumnschange',e.target.value);
              console.log(this.$store.state.gridtemplatecolumns);
          },
          gridtemplaterowschange(e) {
              this.$store.commit('gridtemplaterowschange',e.target.value);
              console.log(this.$store.state.gridtemplaterows);
          }
      }
  }
</script>
<template>
  <div id="app" style="width:1500px;">
    <div  style="width:300px;float:left;background-color: azure;height: 800px">
        <vuedraggable :group='{name: "menu", put: true}'>
            <a-button type="primary" @click="onClick();show('block','block','none','block','none')">输入框</a-button>
            <a-button type="primary" @click="onClick2();show('block','none','none','block','none')">列表</a-button>
            <a-button type="primary" @click="onClick3();show('block','block','block','block','none')">文字</a-button>
            <a-button type="primary" @click="onClick4();show('none','none','none','none','block')">布局</a-button>
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
                          <a-input addon-before="布局格数" :default-value="latticeshow" @pressEnter="latticechange"/>
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
              latticeshow :this.$store.state.latticenum
          }
      },
      methods:{
          callback(key) {
              console.log(key);
          },
          //修改状态，控制当组件出现时出现相对应的属性选择框
          show(sizeshow,heightshow,weightshow,charactershow,latticeshow){
              this.$store.commit('changesizeshow',sizeshow);
              this.$store.commit('changeheightshow',heightshow);
              this.$store.commit('changeweightshow',weightshow);
              this.$store.commit('changecharactershow',charactershow);
              this.$store.commit('changelatticeshow',latticeshow);
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
          }
      }
  }
</script>
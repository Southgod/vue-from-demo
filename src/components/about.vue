<template>
    <div>
        <vuedraggable :group='{name: "menu", put: true}'>
        <p>{{aboutMsg}}</p>
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
        </vuedraggable>
    </div>
</template>
<script>
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
        }
    }
</script>
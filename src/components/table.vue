<template>
    <div @dblclick="changethead">
    <a-table :columns="columns" :data-source="data" bordered>
        <template slot="name" slot-scope="text">
            <a>{{ text }}</a>
        </template>
    </a-table>
    </div>
</template>



<script>
    // In the fifth row, other columns are merged into first column
    // by setting it's colSpan to be 0

    import store from '@/store'


    const renderContent = (value, row, index) => {
        const obj = {
            children: value,
            attrs: {},
        };
        if (index === 4) {
            obj.attrs.colSpan = 0;
        }
        return obj;
    };

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            tel: '0571-22098909',
            phone: 18889898989,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            tel: '0571-22098333',
            phone: 18889898888,
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            tel: '0575-22098909',
            phone: 18900010002,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 18,
            tel: '0575-22098909',
            phone: 18900010002,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '5',
            name: 'Jake White',
            age: 18,
            tel: '0575-22098909',
            phone: 18900010002,
            address: 'Dublin No. 2 Lake Park',
        },
    ];

    export default {
        name: "grit",
     data() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                customRender: (text, row, index) => {
                    if (index < 4) {
                        return <a href="javascript:;">{text}</a>;
                    }
                    return {
                        children: <a href="javascript:;">{text}</a>,
                    attrs: {
                        colSpan: 5,
                    },
                };
                },
            },
            {
                title: 'Age',
                dataIndex: 'age',
                customRender: renderContent,
            },
            {
                title: 'Home phone',
                colSpan: 2,
                dataIndex: 'tel',
                customRender: (value, row, index) => {
                    const obj = {
                        children: value,
                        attrs: {},
                    };
                    if (index === this.changelist[0].trank) {
                        obj.attrs.rowSpan = this.changelist[0].rcnumber;
                    }
                    for (let i = this.changelist[0].trank+1;i<this.changelist[0].trank+this.changelist[0].rcnumber;i++){
                        if (index === i) {
                            obj.attrs.rowSpan = 0;
                        }
                    }
                    for (let i = this.changelist[0].trank+this.changelist[0].rcnumber;i<5;i++){
                        if (index === i) {
                            obj.attrs.rowSpan = 1;
                        }
                    }
                    // These two are merged into above cell

                    if (index === 4) {
                        obj.attrs.colSpan = 0;
                    }
                    return obj;
                },
            },
            {
                title: 'Phone',
                colSpan: 0,
                dataIndex: 'phone',
                customRender: renderContent,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                customRender: renderContent,
            },
        ];
        return {
            data,
            columns,
            changelist : [{thead:store.state.thead,
                trank:store.state.trank,
                rcnumber:store.state.rcnumber,
                rowrank:store.state.rowrank,
                colrank:store.state.colrank,
                rownumber:store.state.rownumber,
                colnumber:store.state.colnumber
            }]
        };
    },
        computed:{
            thead(){
                return store.state.thead
            },
            trank(){
                return store.state.trank
            },
            rcnumber(){
                return store.state.rcnumber
            }
        },
        methods:{
            changethead(){
                if (store.state.selectvalue === 'col'){
                this.changelist.splice(0,1,{
                    thead:store.state.thead,
                    trank:store.state.trank,
                    rcnumber:store.state.rcnumber,
                    rowrank:this.changelist[0].rowrank,
                    colrank:store.state.trank,
                    rownumber:this.changelist[0].rownumber,
                    colnumber:store.state.rcnumber
                })
                }else if (store.state.selectvalue === 'row'){
                    this.changelist.splice(0,1,{
                        thead:store.state.thead,
                        trank:store.state.trank,
                        rcnumber:store.state.rcnumber,
                        rowrank:store.state.trank,
                        colrank:this.changelist[0].colrank,
                        rownumber:store.state.rcnumber,
                        colnumber:this.changelist[0].colnumber
                    })
                }
                console.log(this.changelist)
            }
        }
    }
</script>

<style scoped>

</style>
/**
 * Created by liaopeng on 2017/8/29.
 */
import React from 'react';
import {Table, Button, Input, Select,Tooltip} from 'antd';
import "./index.less"
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];


export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selecteRows: [],
        };
    }

    changecheck(selectedRowKeys, selectedRows) {
        console.log(selectedRows)

    }

    render() {
        return (
            <div>
                <div className="lp-table-top">
                    <div className="lp-sbox">
                        <label>搜索条件: </label>
                        <Select defaultValue="lucy" style={{width: "130px"}}>
                            <Select.Option value="jack">Jack</Select.Option>
                            <Select.Option value="lucy">Lucy</Select.Option>
                            <Select.Option value="disabled" disabled>Disabled</Select.Option>
                            <Select.Option value="Yiminghe">yiminghe</Select.Option>
                        </Select>
                        <Input style={{width: "130px"}}/>
                        <Input style={{width: "130px"}}/>
                        <Input style={{width: "130px"}}/>
                        <Input style={{width: "130px"}}/>
                        <Input style={{width: "130px"}}/>
                        <Input style={{width: "130px"}}/>
                        <Input style={{width: "130px"}}/>
                        <Input style={{width: "130px"}}/>
                        <Button type="primary" id="search_btn" icon="search">搜索</Button>
                    </div>

                    <div className="lp-tool">
                        <div className="lp-tool-left">
                            <Button type="primary" size="small" icon="plus-circle">添加</Button>
                            <Button type="danger" size="small" icon="delete">删除</Button>
                        </div>
                        <div className="lp-tool-right">
                            <Tooltip title="刷新" placement="left">
                                <Button shape="circle" icon="sync" onClick={()=>{}}
                                        size="small"/>
                            </Tooltip>
                        </div>
                        <div style={{clear:"both"}}></div>
                    </div>

                </div>


                <Table bordered={true} size="midden" rowSelection={{onChange: this.changecheck.bind(this)}}
                       dataSource={dataSource} columns={columns} style={{margin: "0px 5px 0px 5px"}}/>
            </div>
        );
    }
}
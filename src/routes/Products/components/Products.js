import React from 'react';
import  Container from 'components/Container';
import ProductService from 'utils/ProductService';
import ProductStore from 'stores/ProductStore';
import {Table} from 'antd';


let getProductState = ()=> {
    return {
        products: ProductStore.getAll()
    }
};

const columns = [{
    title: '商品名称',
    dataIndex: 'title',
    render: function (text) {
        return <a href="javascript:;">{text}</a>;
    }
}, {
    title: '年龄',
    dataIndex: 'age'
}, {
    title: '住址',
    dataIndex: 'address'
}];

// 通过 rowSelection 对象表明需要行选择
const rowSelection = {
    onSelect: function (record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: function (selected, selectedRows) {
        console.log(selected, selectedRows);
    }
};

export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = getProductState();
    }


    _onChange() {
        this.setState(getProductState());
        console.log(this.state);

    }

    componentDidMount() {
        ProductStore.addChangeListener(this._onChange.bind(this));
        ProductService.getAll();

    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onChange)
    }

    render() {

        if (!this.state.products) {
            return <Container> 正在加载中... </Container>
        }

        return (
            <Container sidebar={{id:1}}>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.products}></Table>
            </Container>
        )

    }

}



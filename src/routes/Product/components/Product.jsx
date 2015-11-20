import React from 'react';
import ProductActions from 'actions/ProductActions';
import ProductStore from 'stores/ProductStore';
import  Container from 'components/Container'; 
import {Link} from 'react-router';
import { Table, Icon } from 'antd';
import DataTable from 'components/DataTable';


function getState(props){
    return {products: ProductStore.getAll()} 
}

let columns = [{
    key:'0',
    title: '缩略图',
    dataIndex:'image_group',
    render(text){
      
        return text !== null ? <img src={`http://172.16.30.125:8080/zeus/file.get?id=${text}&width=60&height=60`} /> : <span>暂无图片</span>;
     
    
    }
},{
//缩略图	商品名称 	展示名称	品牌	商品分类	SPU	所属渠道	库存单位	是否可用	操作
  key:'1',
  title: '商品名称',
  dataIndex: 'name'
},{
  key:'2',
  title: '展示名称',
  dataIndex: 'display_name'
},{
  key:'3',
  title: '品牌',
  dataIndex: 'brand_name'
},{
  key:'4',
  title: '商品分类',
  dataIndex: 'category_name'
},{
  key:'5',
  title: 'SPU',
  dataIndex: 'spu_id'
},{
  key:'6',
  title: '所属渠道',
  dataIndex: ''
},{
  key:'7',
  title: '库存单位',
  dataIndex: 'stock_unit'
},{
  key:'8',
  title: '是否可用',
  dataIndex: 'status',
  render(status){
  return status ? <span>是</span> :<span>否</span> 
  }
},{
  key:'9',
  title: '操作',
  dataIndex: 'id',
  render(id){
  return <span> <Link to={`/products/edit/${id}`}>编辑</Link> | <Link to={`/products/${id}`}>查看</Link> </span>
  }
}];

// 通过 rowSelection 对象表明需要行选择
const rowSelection = {
  onSelect: function(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: function(selected, selectedRows) {
    console.log(selected, selectedRows);
  }
};



let dataSource = new Table.DataSource({
  url: '/api/iteminfo.queryItemList',
  resolve: function(result) {
  let d = JSON.parse(result.response);

    return d.items
  },
  data: {},
  // 和后台接口返回的分页数据进行适配
  getPagination: function(result) {
   let d = JSON.parse(result.response);

    return {    
    pageSize: d.pageSize,
    total: d.totalItems
    };
   
  },
  // 和后台接口接收的参数进行适配
  // 参数里提供了分页、筛选、排序的信息
  getParams: function(pagination, filters, sorter) {
    console.log('getParams 的参数是：', pagination, filters, sorter);
    const params = {
      pageSize: pagination.pageSize,
      pageNumber: pagination.current,
      sort: sorter.field,
      //sort: sorter.order,
      channelId:'0'
    };
    for (let key in filters) {
      params[key] = filters[key];
    }
    console.log('请求参数：', params);
    return params;
  }
});


export default React.createClass({

  getInitialState() {
     return {
      dataSource: null,
      params:{
       channelId: '0'
      }
    };
  },

  componentDidMount() {
   this.setState({
      dataSource: dataSource.clone()
    });
      
    },

    _onChange() {
        this.setState(getState(this.props)); 
    },

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onChange);
    },
    
  render() {
    return (　 this.props.children ||　 <Container><DataTable params={this.state.params} url="/iteminfo.queryItemList" rowSelection={rowSelection}  bordered={true} columns={columns} /></Container>
      )
    
  }

});

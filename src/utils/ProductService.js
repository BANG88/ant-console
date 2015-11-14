/**
 * SunEee
 * @date Created on 11/12/15
 * @author YuHui(语晖)<yuhui@suneee.com>
 */
import ProductActions from '../actions/ProductActions';

import fetch from './WebApi'


class ProductService {

    getAll(params) {
        ProductActions.query([
            {
                id: 1,
                title: '测试商品'
            }
        ])
    }


}


export  default new ProductService();
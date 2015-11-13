import React from 'react';
import {Validation, Button, Form, Input,message,Spin} from 'antd';
import AuthService from 'utils/AuthService';
import AuthStore from 'stores/AuthStore';


const Validator = Validation.Validator;
const FormItem = Form.Item;

function cx(classNames) {
    if (typeof classNames === 'object') {
        return Object.keys(classNames).filter(function (className) {
            return classNames[className];
        }).join(' ');
    } else {
        return Array.prototype.join.call(arguments, ' ');
    }
}

function noop() {
    return false;
}

let Login = React.createClass({
    mixins: [Validation.FieldMixin],

    getInitialState() {
        return {
            status: {
                account: {},
                password: {}
            },
            formData: {

                account: undefined,
                password: undefined

            },
            loading: false
        };
    },

    renderValidateStyle(item) {
        const formData = this.state.formData;
        const status = this.state.status;

        const classes = cx({
            'error': status[item].errors,
            'validating': status[item].isValidating,
            'success': formData[item] && !status[item].errors && !status[item].isValidating
        });

        return classes;
    },

    handleReset(e) {
        this.refs.validation.reset();
        this.setState(this.getInitialState());
        e.preventDefault();
    },

    handleSubmit(e) {
        e.preventDefault();

        const validation = this.refs.validation;
        validation.validate((valid) => {
            if (!valid) {
                console.log('error in form');
                return;
            } else {

                this.setState({
                    loading: true
                });

                console.log(this);


                AuthService.login(this.state.formData)['catch']((error)=> {
                    this.setState({
                        loading: false
                    });
                    console.log(error)
                });


            }


        });
    },


    componentDidMount() {
        AuthStore.addChangeListener(this._onChange);
    },

    _onChange() {
        if (AuthStore.isLoggedIn()) {
            this.props.history.replaceState(null, '/');
        }
        console.log(AuthStore)
    },

    componentWillUnmount() {
        AuthStore.removeChangeListener(this._onChange);
    },
    render() {
        const formData = this.state.formData;
        const status = this.state.status;

        return (
            <Form horizontal>
                <Validation ref="validation" onValidate={this.handleValidate}>
                    <FormItem
                        label="用户名："
                        id="account"
                        labelCol={{span: 7}}
                        wrapperCol={{span: 12}}
                        validateStatus={this.renderValidateStyle('account')}
                        hasFeedback
                        help={ status.account.errors ? status.account.errors.join(',') : null}
                        required>
                        <Validator
                            rules={[{required: true, min: 5, message: '用户名至少为 5 个字符'}]}>
                            <Input name="account" id="account" value={formData.account} placeholder="输入 admin 看看"
                                   onChange={this.setField.bind(this, 'account')}/>
                        </Validator>
                    </FormItem>

                    <FormItem
                        label="密码："
                        id="password"
                        labelCol={{span: 7}}
                        wrapperCol={{span: 12}}
                        validateStatus={this.renderValidateStyle('password')}
                        hasFeedback
                        help={status.password.errors ? status.password.errors.join(',') : null}
                        required>
                        <Validator
                            rules={[{required: true,min:6, whitespace: true, message: '请填写密码'}]}>
                            <Input name="password" id="password" type="password" placeholder="密码: 123456"
                                   onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop} autoComplete="off"
                                   value={formData.password}/>
                        </Validator>
                    </FormItem>

                    <FormItem
                        wrapperCol={{span: 12, offset: 7}}>
                        <Button type="primary" loading={this.state.loading} onClick={this.handleSubmit}>确定</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button type="ghost" onClick={this.handleReset}>重置</Button>
                    </FormItem>

                </Validation>
            </Form>
        );
    }
});


export default Login

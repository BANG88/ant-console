import React from 'react';
import {Validation, Button, Form, Input,message} from 'antd';
import cookie from 'js-cookie';


const Validator = Validation.Validator;
const FormItem = Form.Item;

function cx(classNames) {
  if (typeof classNames === 'object') {
    return Object.keys(classNames).filter(function(className) {
      return classNames[className];
    }).join(' ');
  } else {
    return Array.prototype.join.call(arguments, ' ');
  }
}

function noop() {
  return false;
}

const Demo = React.createClass({
  mixins: [Validation.FieldMixin],

  getInitialState() {
    return {
      status: {
        email: {},
        name: {},
        passwd: {},
        rePasswd: {},
        textarea: {}
      },
      formData: {

        name: undefined,
        passwd: undefined

      },
      isEmailOver: false, // email 是否输入完毕
      emailValidateMethod: 'onBlur' // 用于改变 email 的验证方法
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
    this.setState({
      isEmailOver: true
    });
    const validation = this.refs.validation;
    validation.validate((valid) => {
      if (!valid) {
        console.log('error in form');
        return;
      } else {

        console.log('submit');

				cookie.set('token',this.state.formData);

				console.log(this);
				console.log(this.state.formData);

				this.props.history.replaceState(null,'/');

      }



    });
  },

  userExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(function () {
        if (value === 'bang') {
          callback([new Error('抱歉，该用户名已被占用。')]);
        } else {
          callback();
        }
      }, 800);
    }
  },

  checkPass(rule, value, callback) {
    if (!value) {
			callback();
    }
		callback();
  },

  render() {
    const formData = this.state.formData;
    const status = this.state.status;

    return (
      <Form horizontal>
        <Validation ref="validation" onValidate={this.handleValidate}>
          <FormItem
            label="用户名："
            id="name"
            labelCol={{span: 7}}
            wrapperCol={{span: 12}}
            validateStatus={this.renderValidateStyle('name')}
            hasFeedback
            help={status.name.isValidating ? "正在校验中.." : status.name.errors ? status.name.errors.join(',') : null}
            required>
              <Validator rules={[{required: true, min: 5, message: '用户名至少为 5 个字符'}, {validator: this.userExists}]}>
                <Input name="name" id="name" value={formData.name} placeholder="实时校验，输入 admin 看看" onChange={this.setField.bind(this, 'name')} />
              </Validator>
          </FormItem>

          <FormItem
            label="密码："
            id="password"
            labelCol={{span: 7}}
            wrapperCol={{span: 12}}
            validateStatus={this.renderValidateStyle('passwd')}
            hasFeedback
            help={status.passwd.errors ? status.passwd.errors.join(',') : null}
            required>
              <Validator rules={[{required: true, whitespace: true, message: '请填写密码'}, {validator: this.checkPass}]}>
                <Input name="passwd" id="password" type="password" placeholder="密码: 123456" onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop} autoComplete="off" value={formData.passwd}/>
              </Validator>
          </FormItem>

          <FormItem
            wrapperCol={{span: 12, offset: 7}} >
            <Button type="primary" onClick={this.handleSubmit}>确定</Button>
            &nbsp;&nbsp;&nbsp;
            <Button type="ghost" onClick={this.handleReset}>重置</Button>
          </FormItem>

        </Validation>
      </Form>
    );
  }
});

class Login extends React.Component{
	render(){
		return <div>Login</div>
	}
}

export default Demo

/**
 * Created by liaopeng on 2017/8/29.
 */
import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox, Card,Spin,Alert} from 'antd';
const FormItem = Form.Item;
import  "./login.less"
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            showloading:false,
        };
    }

    handleSubmit(e) {
        this.setState({
            showloading:true
        })
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        setTimeout(()=>{
            this.setState({
                showloading:false
            })

        },2000)
    }

    render() {

        let {getFieldDecorator} = this.props.form;
        return (
            <Spin spinning={this.state.showloading} tip="正在加载..." style={{backgroundColor:"rgba(0,0,0,0.3)", height:"100%", maxHeight:"5000px",color:"#ffffff"}}>
            <div className="login-bg">
                <Card className="login-panel" title="后台登录">
                    <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入用户名!'}],
                            })(
                                <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                       placeholder="密码"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('verify', {
                                rules: [{required: true, message: '请输入验证码!'}],
                            })(
                                <Input  prefix={<Icon type="bulb" style={{fontSize: 13}}/>} type="verify"  addonAfter={<div style={{width:"150px"}}><img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{width:"100%",height:"20px"}}/></div>}
                                       placeholder="验证码"/>

                            )}


                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}

                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登 录
                            </Button>

                        </FormItem>
                    </Form>
                </Card>


            </div>
            </Spin>



        );

    }
}
export default Login = Form.create({})(Login);
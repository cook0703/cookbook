<template>
<el-form label-width="100px" class="demo-ruleForm" v-bind:rules="rules" ref="ruleForm" v-bind:model="ruleForm">
    <el-form-item label="账号" prop="name">
        <el-input type="text" auto-complete="off" v-model="ruleForm.name" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input type="password" auto-complete="off" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
        <!-- 点击进行登录提交 -->
        <el-button type="primary" v-on:click="handleSubmit">登录</el-button>
        <!-- 点击重置表单 -->
        <el-button v-on:click="handleReset">重置</el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
   // 进入路由的时候执行，用于判断登录状态
    beforeRouteEnter () {},
    // 数据
  data () {
     // 姓名验证
    let validatorName = function (rule, value, callback) {
        if (!value) {
            callback(new Error('请输入账号'))
        } else if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(value) || value.length < 6) {
            callback(new Error('账号只能是6位以上中英文或者数字'))
        } else {
            callback()
        }
    }
    // 密码验证
    let validatorPass = (rule, value, callback) => {
        if (!value) {
            callback(new Error('请输入密码'))
        } else if (!/^[A-Za-z0-9]+$/.test(value) || value.length < 6) {
            callback(new Error('密码只能是6位以上英文或者数字'))
        } else {
            callback()
        }
    }
    return {
        // 表单数据
        ruleForm: {
            name: '',
            password: '',
            password2: ''
        },
        // 验证规则
        rules: {
            name: [
                { validator: validatorName, trigger: 'blur' }
            ],
            password: [
                { validator: validatorPass, trigger: 'blur' }
            ]
        }
    }
  },
   methods: {
    // 表单提交
    handleSubmit () {
        // 验证表单
        this.$refs.ruleForm.validate(valid => {
            if (valid) {
            console.log('验证通过')
            // 调用SDK登录方法，执行登录过程
            this.$AV.User.logIn(this.ruleForm.name, this.ruleForm.password).then(loginedUser => {
                    console.log(loginedUser)
                    this.$message('成功登录')
                    // 登录成功跳转到首页
                    this.$router.push('/')
                }, error => {
                    console.log(error)
                    this.$message('登录失败，请重试')
                    // 登录失败清空表单
                    this.handleReset()
                })
            } else {
                console.log('验证不通过')
            }
        })
    },
    // 重置表单
    handleReset () {
        this.$refs.ruleForm.resetFields()
    }
},
   beforeRouteEnter (to, from, next) {
    next(VM => {
        // 当前是否有用户登录
        if (VM.$AV.User.current()) {
            console.log('当前登录')
            // 跳转到首页
            VM.$router.push('/')
        } else {
            console.log('当前未登录')
        }
    })
}
}
</script>
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
</style>

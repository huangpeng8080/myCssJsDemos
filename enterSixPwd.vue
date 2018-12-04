<template>
    <div>
        <div class="title">输入您的交易密码</div>
        <div  id="payPwd">
            <input ref="pwd" type="tel" maxlength="6" v-model="msg" class="pwd" unselectable="on" />
            <ul class="pwd-wrap" @click="focus">
                <li :class="msg.length == 0?'psd-blink':''"><i v-if="msg.length > 0"></i></li>
                <li :class="msg.length == 1?'psd-blink':''"><i v-if="msg.length > 1"></i></li>
                <li :class="msg.length == 2?'psd-blink':''"><i v-if="msg.length > 2"></i></li>
                <li :class="msg.length == 3?'psd-blink':''"><i v-if="msg.length > 3"></i></li>
                <li :class="msg.length == 4?'psd-blink':''"><i v-if="msg.length > 4"></i></li>
                <li :class="msg.length == 5?'psd-blink':''"><i v-if="msg.length > 5"></i></li>
            </ul>
        </div>

        <div class="text-center m-t-lg">
            <Button type="primary" size="large" @click="next">确定</Button>
        </div>

    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        data () {
            return {
                msg: ''
            }
        },
        methods: {
            ...mapMutations([
                'SET_TITLE'
            ]),
        next () {
            this.$router.push('/flow/auditing')
        },
        focus() {
            this.$refs.pwd.focus();
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.$refs.pwd.focus();
        this.SET_TITLE('交易密码验证')
    })
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .title{
        color:#0F1B33;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-top: 60px;
    }
    @keyframes psdblink {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0;
        }
        51%{
            opacity: 1;
        }
        100%{
            opacity: 1;
        }
    }
    #payPwd {
        height: auto;
        margin-top: 30px;
    header {
        text-align: center;
        height: 80px;
        line-height: 90px;
        text-align: center;
    }
    input[type=tel] {
        width: 0.1px;
        height: 0.1px;
        color: transparent;
        position: relative;
        top: 23px;
        background: #000000;
        left: 46px;
        border: none;
        font-size: 18px;
        opacity: 0;
        z-index: -1;
    }
    //光标
      .psd-blink {
          /* display: inline-block;
           border-left: 4px solid #333;
           animation: psdblink 2s linear infinite;*/
          /* background: url("./img/blink.gif") no-repeat center;*/
      }
    .psd-blink:before {
        content: "";
        font-size: 0;
        padding: 18px 3px 5px;
        margin-left: 15px;
        border-left: 2px solid #000;
        animation: psdblink 1s linear infinite;
        /* background: url("./img/blink.gif") no-repeat center;*/
    }
    .pwd-wrap {
        width: 370px;
        margin: 0 auto;
        background: #fff;
        border: 1px solid #ddd;
        cursor: pointer;
    li {
        list-style-type: none;
        text-align: center;
        line-height: 58px;
        border-right: 1px solid #ddd;
        display:inline-block;
        width:58px;
        height:58px;
        vertical-align:top;
    &:last-child {
         border-right: 0;
     }
    i {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: #000;
        display: inline-block;
    }
    }
    }

    }
</style>

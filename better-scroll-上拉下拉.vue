<template>
    <div >
        <div  class="wrapper" ref="wrapper">
            <div>
                <ul class="content" style="">
                    <li v-for="item in data">{{item.name}}</li>
                    <li v-for="item in data">{{item.name}}</li>
                    <li v-for="item in data">{{item.name}}</li>
                    <li v-for="item in data">{{item.name}}</li>
                    <li v-for="item in data">{{item.name}}</li>
                    <li v-for="item in data">{{item.name}}</li>
                    <li v-for="item in data">{{item.name}}</li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        data() {
            return {
                data: [{name:'xxx'},{name:'xxx'},{name:'xxx'},{name:'xxx'},{name:'xxx'},{name:'xxx'}]
            }
        },
        created() {


        },
        methods: {

        },
        mounted () {
            this.$nextTick(()=>{
                this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                scrollY: true,
                pullUpLoad: {
                    threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
                },
                pullDownRefresh: {
                    threshold: 30, // 下拉距离超过30px触发pullingDown事件
                    stop: 20 // 回弹停留在距离顶部20px的位置
                }

            })
            this.scroll.on('pullingUp', () => {
                console.log('pullingUp')
            alert('pullingUp')
            setTimeout(()=>{
                this.scroll.finishPullUp();
        },3000)
            // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
        })
            this.scroll.on('pullingDown', () => {
                console.log('pullingDown')
            alert('pullingDown')
            setTimeout(()=>{
                this.scroll.finishPullDown();
        },3000)
            // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
        });
        })
        }
    }
</script>
<style  scoped>
    .wrapper{
        height: 700px;
    }
</style>

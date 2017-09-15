<template>
<div class="box">
    <header class="header">
		<input type="text" placeholder="观复嘟嘟|采采|鬼故事">
	</header>
    <div class="main">
		 <router-view></router-view>
	</div>
    <footer class="footer">
			<ul>
				<router-link :to="{name:'home'}" tag="li">
					<span>首页</span>
				</router-link>
				<router-link :to="{name:'me'}" tag="li">
					<span>我的</span>
				</router-link>
				<router-link :to="{name:'me'}" tag="li">
					<span>发现</span>
				</router-link>
				<router-link :to="{name:'dirco'}" tag="li">
					<span>发现</span>
				</router-link>
				<router-link :to="{name:'login'}" tag="li">
					<span>未登录</span>
				</router-link>
			</ul>
	</footer>
</div>
</template>
<script>
export default {

}
</script>
<style>
.box{
    position: absolute;
    width: 100%;
    top:0;
    bottom:0;
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 45px ;
    background: #ff0;
    padding:5px 20px;
    box-sizing: border-box;
}
.header input{
    width: 100%;
    height: 100%;
}
.main{
    flex: 1;
    overflow: auto;
}
.footer{
    height: 45px;
    border-top:1px solid #ccc;
}
.footer ul{
    display: flex
}
.footer ul li{
    flex: 1;
    text-align: center;
    line-height: 45px;
}
</style>


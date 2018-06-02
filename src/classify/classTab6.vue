<template>
  <div class="mobile">
  	<div>
 		<img v-bind:src='headImg' />
 	</div>
 	<div class='mobileContent'>
 		<ul>
 			<li v-for='item in contentImg'>
				<img v-bind:src="item.url" />
				<span>{{item.title}}</span>
			</li>
 		</ul>
 	</div>
  </div>
</template>
 
<script>
export default {
  name: '',
  data () {
    return {
      headImg:'../../static/classifyImg/classHead6.jpg',
      contentImg:[
      	{url:'../../static/classifyImg/class41.jpg',title:'空气净化器'},
      	{url:'../../static/classifyImg/class42.jpg',title:'净水器'},
      	{url:'../../static/classifyImg/class43.jpg',title:'洗衣机'},
      	{url:'../../static/classifyImg/class42.jpg',title:'冰箱'},
      	{url:'../../static/classifyImg/class42.jpg',title:'生活电器'},
      	{url:'../../static/classifyImg/class42.jpg',title:'空调/风扇'},
      	{url:'../../static/classifyImg/class42.jpg',title:'厨房家电'}
      ]
    }
  }
}
</script>
<style lang='scss'>
	.mobile{
		& > div{
			img{
				width:100%;
			}
		}
		.mobileContent{
			display:flex;
			
			& > ul{
				display:flex;
				justify-content:start;
				flex-wrap:wrap;
				& > li{
					width:5rem;
					margin-left:1rem;
					span{
						font-size:12px;
					}
				}
			}
		}
	}

</style>
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
      headImg:'../../static/classifyImg/classHead3.jpg',
      contentImg:[
      	{url:'../../static/classifyImg/class31.jpg',title:'床垫'},
      	{url:'../../static/classifyImg/class32.jpg',title:'被枕'},
      	{url:'../../static/classifyImg/class33.jpg',title:'床品件套'},
      	{url:'../../static/classifyImg/class34.jpg',title:'灯具'},
      	{url:'../../static/classifyImg/class35.jpg',title:'家具'},
      	{url:'../../static/classifyImg/class36.jpg',title:'花卉盆栽'},
      	{url:'../../static/classifyImg/class37.jpg',title:'家饰'},
      	{url:'../../static/classifyImg/class38.jpg',title:'布艺软装'}
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
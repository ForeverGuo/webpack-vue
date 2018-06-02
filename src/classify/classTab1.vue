<template>
  <div class="recommend">
  	<div>
 		<img v-bind:src='headImg' />
 	</div>
 	<div class='reContent'>
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
      headImg:'../../static/classifyImg/classHead1.jpg',
      contentImg:[
      	{url:'../../static/classifyImg/class11.jpg',title:'小米自营'},
      	{url:'../../static/classifyImg/class12.jpg',title:'新品'},
      	{url:'../../static/classifyImg/class13.jpg',title:'应季'},
      	{url:'../../static/classifyImg/class14.jpg',title:'男士'},
      	{url:'../../static/classifyImg/class15.jpg',title:'女士'}
      ]
    }
  }
}
</script>
<style lang='scss'>
	.recommend{
		& > div{
			img{
				width:100%;
			}
		}
		.reContent{
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
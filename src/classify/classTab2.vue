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
      headImg:'../../static/classifyImg/classHead2.jpg',
      contentImg:[
      	{url:'../../static/classifyImg/class21.jpg',title:'小米8'},
      	{url:'../../static/classifyImg/class22.jpg',title:'小米8 SE'},
      	{url:'../../static/classifyImg/class23.jpg',title:'小米MIX 2S'},
      	{url:'../../static/classifyImg/class21.jpg',title:'小米6X'},
      	{url:'../../static/classifyImg/class21.jpg',title:'黑鲨游戏...'},
      	{url:'../../static/classifyImg/class21.jpg',title:'小米MIX2'},
      	{url:'../../static/classifyImg/class21.jpg',title:'小米Max 2'},
      	{url:'../../static/classifyImg/class21.jpg',title:'小米MIX...'},
      	{url:'../../static/classifyImg/class21.jpg',title:'小米5X'},
      	{url:'../../static/classifyImg/class21.jpg',title:'红米Note 5'},
      	{url:'../../static/classifyImg/class21.jpg',title:'红米S2'},
      	{url:'../../static/classifyImg/class21.jpg',title:'红米5A'},
      	{url:'../../static/classifyImg/class21.jpg',title:'红米5 Plus'}
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
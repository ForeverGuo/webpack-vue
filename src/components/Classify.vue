<template>
  <div class="classify">
	<div class='head'>
		<div class='search'>	
			<img v-bind:src='classifySearch' />
			<div>愿时光永驻她的芳华</div>
		</div>
	</div>
	<div class='content' v-bind:style="{height:fullHeight + 'px'}">
		<div class='left' v-bind:style="{height:fullHeight-13 + 'px'}">

	        	<div v-for="item in leftTitle" :style="isSelect === item.title ? item.active0 : item.active1">
					<div @click='toSim(item.id,item.title)'>{{item.title}}</div> 
	             </div>
		</div>
		<div class='right'>	
			 <component :is="tabView"></component>
		</div>
  	</div>
  </div>
</template>
 
<script>
import classTab1 from "../classify/classTab1.vue";
import classTab2 from "../classify/classTab2.vue";
import classTab3 from "../classify/classTab3.vue";
import classTab4 from "../classify/classTab4.vue";
import classTab5 from "../classify/classTab5.vue";
import classTab6 from "../classify/classTab6.vue";
import classTab7 from "../classify/classTab7.vue";
export default {
  name: '',
  data () {
    return {
      tabView: "classTab1",
      isSelect: '有品推荐',
      classifySearch:"../../static/image/home_search.png",
      msg: '我是分类',
      leftTitle:[
      	{id:1,title:'有品推荐',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:2,title:'手机',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:3,title:'居家',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:4,title:'家电',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:5,title:'服饰',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:6,title:'智能',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:7,title:'影音',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:8,title:'笔记本',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:9,title:'餐厨',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:10,title:'洗护',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:11,title:'饮食',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:12,title:'健康',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:13,title:'日杂',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:14,title:'配件',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:15,title:'出行',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:16,title:'婴童',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:17,title:'箱包',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''},
      	{id:18,title:'品牌',active0:'border-style:solid;color: rgb(132, 95, 63)',active1:''}

		],
	  fullHeight: document.documentElement.clientHeight-114 		
    }
  },
  methods:{
  	toSim(index,title){
  		this.tabView = "classTab"+index
  		this.isSelect = title
  	}
  },
  components:{
  	classTab1,
  	classTab2,
  	classTab3,
  	classTab4,
  	classTab5,
  	classTab6,
  	classTab7
  }
}
</script>
<style lang='scss'>
	.classify{
		background-color: rgb(239, 239, 240);
		.head{
			height:50px;
			border:1px solid transparent;
			.search{
				width: 94%;
			    margin: 11px 13px;
			    background: #fff;
			    height: 30px;
			    border-radius: 5px;
			    display:flex;
			    & > img{
			    	width:20px;
			    	height:20px;
			    	margin:5px 8px;
			    }
			    & > div{
			    	    width: 100%;
					    font-size: 14px;
					    text-align: left;
					    height: 30px;
					    line-height: 30px;
					    color: rgb(219, 218, 218);
			    }
			}
		}
		.content{
			width:100%;
			background:#fff;
			display:flex;
		    flex: 1 1 0%;
		    flex-direction: row;
		    justify-content: flex-start;
		    ::-webkit-scrollbar{
				  display:none;
			}
			.left{
				width: 75px;
			    height: auto;
			    border-style: solid;
			    border-width: 0px 1px 0px 0px;
			    border-color: black rgba(0, 0, 0, 0.1) black black;
			    padding-top: 13px;
			    overflow-y:scroll;
				& > div{
					height: 24px;
				    margin-right: 0px;
				    margin-left: 0px;
				    margin-bottom: 20px;
				    justify-content: center;
				    white-space: nowrap;
				    //border-style:solid;
				    border-width: 0px 0px 0px 3px;
				    border-color: black black black rgb(132, 95, 63);

				}
			}
			.right{
    			flex: 1 1 0%;
    			padding:1rem;
    			overflow-y: scroll;
			}
		}

	}



</style>
<template>
	 <div class="foot">
        <ul>
        	<router-link v-for="item in footNav"  :to="{name:item.tolink}" tag="li" exact>
              	 <div @click="tabClick(item.tolink)">
	                 <div> 
				     	<i :style="isSelect === item.tolink ? item.active1 : item.active0" ref="tab1"></i>
				    </div> 
				    <div>{{item.title}}</div> 
			    </div>
             </router-link>
        </ul>
    </div>
</template>
<script>
	export default{
		data () {
		    return {
		      isSelect:'Home',
		      footNav:[
		      	{
		      	title:'首页',
		      	tolink:'Home',
		      	active0:'background-position: 0 0%',
		      	active1:'background-position: 0 11.111111%',
		      	},
		      	{
		      	title:'分类',
		      	tolink:'Classify',
		      	active0:'background-position: 0 22.222222%',
		      	active1:'background-position: 0 33.333333%',
		      	},
		      	{
		      	title:'品味',
		      	tolink:'Taste',
		      	active0:'background-position: 0 44.444444%',
		      	active1:'background-position: 0 55.555555%',
		      	},
		      	{
		      	title:'购物车',
		      	tolink:'Shop',
		      	active0:'background-position: 0 66.666667%',
		      	active1:'background-position: 0 77.7777%',
		      	},
		      	{
		      	title:'个人',
		      	tolink:'Person',
		      	active0:'background-position: 0 88.888889%',
		      	active1:'background-position: 0 100%',
		      	},

		      ]
		    }
		 },
		created:function(){
			   var str = this.$route.path.substring(1);
			   if(str != ''){
			   		this.isSelect = str;
			   }else{
			   		this.isSelect = 'Home';
			   }
               
        },
		methods:{
			tabClick:function(title){
				this.isSelect = title;
			}
		}
	}
</script>
<style lang='scss'>
	.foot{
		  position: fixed; 
		  bottom: 0; 
		  left: 0; 
		  background-color: #fff; 
		  box-shadow: 0 2px 4px #000; 
		  width: 100%; 
		  z-index:999;
		  & > ul, & > ul > li { 
		   margin: 0; 
		   padding: 0; 
		  } 
		  ul { 
			   display: table; 
			   width: 100%; 
			   & > li { 
			    text-align: center; 
			    font-size: 16px; 
			    display: table-cell; 
			    padding: 8px 12px; 
			    cursor: pointer; 
			    &.router-link-active{ 
			         color: rgb(132, 95, 63);
			    } 
			    & > div > div { 
			     	font-size: 14px; 
			     	& > i{
			     		width:24px;
			     		height:24px;
			     		display: inline-block;
			     		background:url('../../static/image/img.png')no-repeat;
			     		background-size: 100%;
			     	}
			     }  
			   }
		  } 
	}


</style>
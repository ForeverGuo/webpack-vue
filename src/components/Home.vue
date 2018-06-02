<template>
	<div class="content">
	  	<div class="head">
	    	<img v-bind:src="headImgSrc"  />
	    	<div class='search'>
	    		<img v-bind:src="headSearchSrc" />
	    		<div>愿时光永驻她的芳华</div>
	    	</div>
	    	<div>
	    		<img v-bind:src="headEmailSrc" />
	    	</div>
	  	</div>
	  	<div>
   			<app-banner :listImg="listImg"></app-banner>
  		</div>
  		<div class='newList'>
  			<ul>
  				<li v-for='item in newList'>
  					<img v-bind:src="item.img" />
  				</li>
  			</ul>
  		</div>
  		<div>
  			<news-list></news-list>
  		</div>
  		<div>
  			<raise-list></raise-list>
  		</div>
  		<div style='margin-bottom:80px;'>
  			<daily-list></daily-list>
  		</div>
  	</div>
  	
</template>
 
<script>
import Banner from '@/components/Banner';
import News from '@/components/News';
import Raise from '@/components/Raise';
import Daily from '@/components/Daily';
export default {
  name: 'hello',
  data () {
    return {
      headImgSrc:"../../static/image/navi_title_v2.png",
      headSearchSrc:"../../static/image/home_search.png",
      headEmailSrc:"../../static/image/std_titlebar_home_message.png",
      listImg: [
  			{
                url: '../../static/image/img0.webp'
            }, {
                url: '../../static/image/img1.webp'
            }, {
                url: '../../static/image/img2.webp'
            }, {
                url: '../../static/image/img3.webp'
            }, {
                url: '../../static/image/img4.webp'
    		}
        ],
      newList:[
      		{
      			img:'../../static/image/new_1.webp'
      		},
      		{
      			img:'../../static/image/new_2.webp'
      		},
      		{
      			img:'../../static/image/new_3.webp'
      		},
      		{
      			img:'../../static/image/new_4.webp'
      		},
      		{
      			img:'../../static/image/new_5.webp'
      		},

      ],      

	
    }
  },
  components: {
        'app-banner': Banner,
        'news-list':News,
        'raise-list':Raise,
        'daily-list':Daily
    }
}
</script>
<style lang="scss">

	.content{
		& > .head{
			position:fixed;
			top:0;
			width:100%;
			height:50px;
			background:#fff;
			display:flex;
			align-items:center;
			z-index:999;
			h1{color:#fff;}
			img{width:78px;height:34px;margin:9px 0 9px 12px;}
			& > .search{
				height:30px;
				width:60%;
				display:flex;
				margin-left:5px;
				img{width:15px;height:15px;margin:7px 4px 0 0;}
				div{font-size:13px;color:rgb(204,204,204);line-height:30px;font-weight: 600;font-family: "Helvetica Neue", STHeiTi, sans-serif;}
			}
			& > div{
				display:flex;
				img{
					width:38px;
				}
			}
		}
		.swiper-container {
	        width: 100%;
	        height: 10rem;
	        margin-top:2.9rem;
	        .swiper-wrapper {
	            width: 100%;
	            height: 100%;
	        }
	        .swiper-slide {
	            background-position: center;
	            background-size: cover;
	            width: 100%;
	            height: 100%;
	            img {
	                width: 100%;
	                height: 100%;
	            }
	        }
	        .swiper-pagination-bullet {
	            width:0.833rem;
	            height: 0.833rem;
	            display: inline-block;
	            background: #7c5e53;
	        }
	    }
		& > .newList{
			ul {
				display: table; 
			   	width: 100%; 
			   	& > li {
			   		text-align: center; 
				    font-size: 16px; 
				    display: table-cell; 
				    cursor: pointer;
				    & > img{width:100%}
			   	}
			} 
		}
		.news{
			.news-title{
				display:flex;
				justify-content: space-between;
				padding:16px 0;
				background:#fff;
				.left{
					margin-left:20px;
				}
				.right{
				    width: 57px;
				    height: 16px;
				    margin-right: 16px;
				    background: url('../../static/image/right_arrow.png') no-repeat right;
				    background-size: contain;
				    line-height: 19px;
				    text-align: center;
				}
			}
		}
		.news-list{
			width:100%;
			height:146px;
			position:relative;
		 	& > :first-child{
				width:100%;
			}
			& > :nth-child(2){
				position:absolute;
				width:100%;
				height:100%;
				top:-14px;
				right:0;
			}
		}
		.news-content{
			width:100%;
			height:100%;
			display:flex;
			justify-content:space-around;
			margin-top:14px;
			& > img{
				width:50%;
				height:100%;
			}
		} 

	}



</style>
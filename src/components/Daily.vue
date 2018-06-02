<template>
    <div>
        <div class="news">
            <div class='news-title'>
                <div class='left'>每日新品</div>
                <div class='right'>更多</div>
            </div>
        </div>
        <div class="news-list">
            <img v-bind:src="newsImg_1"/> 
            <img v-bind:src="newsImg_2"/> 
        </div>
        <div class='news-content'>
            <img v-bind:src="newsImg_3"/> 
            <img v-bind:src="newsImg_4"/>    
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props: [],
        mounted() {},
        data(){
            return{
                newsImg_1:'../../static/image/new1_1.webp',
                newsImg_2:'../../static/image/new1_2.webp',
                newsImg_3:'../../static/image/new2_1.webp',
                newsImg_4:'../../static/image/new2_2.webp'
            }
        }
    }
</script>

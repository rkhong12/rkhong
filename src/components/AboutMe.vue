<template>
        <section class="about">          
          <div class="sec_inner">   
            <h2>퍼블리셔 홍려경 입니다.</h2>         
            <div class="profile_wrap">
              <div class="profile_img">
                <img src="@/assets/images/photo3.png" alt="user's image">              
              </div>
              <div class="profile_txt">
                <p>
                  <i class="fas fa-chalkboard-teacher"></i>
                  HTML, HTML5의 기본 구조를 이해하면서 웹 표준 및 웹 접근성을 고려한 퍼블리싱을 지향합니다.
                </p>             
                <p>
                  <i class="fas fa-laugh-beam"></i>
                  컴포넌트 단위의 유의미한 구조적인 퍼블리싱을 지향합니다.
                </p>
                <p>
                  <i class="fas fa-shopping-cart"></i>
                  아모레퍼시픽, 나이키, 바닐라코 등의 대기업 쇼핑몰 이커머스 작업과 금융권과 자사 솔루션 신규제작 작업 경험이 있습니다.
                </p>
                <p>
                  <i class="fas fa-piggy-bank"></i>
                  현재 VUE 기반의 모바일 쇼핑몰 신규 제작 작업을 하고 있습니다.
                </p>   
              </div>              
            </div>
            
            <div class="info_wrap">
              <div class="info_items">
                <p>경력</p>
                <dl>
                  <dt>2021. 09 ~ </dt>
                  <dd><em>블랙홀릭</em> R&D</dd>
                  <dt>2020. 12 ~  2021. 08 <span>9개월 </span></dt>
                  <dd><em>소리자바</em> 인공지능R&D</dd>
                  <dt>2016. 01 ~ 2020. 03 <span>4년 3개월</span></dt>
                  <dd><em>아이뱅크(디지털웍스)</em> 디지털개발사업부</dd>                 
                </dl>
              </div>
              <div class="info_items">
                <p>교육</p>
                <dl>
                  <dt>2019. 06 ~ 2019. 07 </dt>
                  <dd>
                    <em>프론트앤드 개발자 과정 </em>오라클자바교육학원
                    <span class="dis_b">React.js, Angular.js, Vue.js 기초적인 이론 수업</span>
                  </dd>
                  <dt>2015. 07 ~ 2015. 12 </dt>
                  <dd>
                    <em>UX/UI기반 웹퍼블리셔 </em>한국디지털기업협회                 
                  </dd>
                </dl>
              </div>
              
              
            </div>
          </div>
          
        </section>
</template>

<script>
    export default {
        name: 'AboutMe',
    }
</script>

<style lang="scss" scoped>  
  .sec_inner {text-align: center;}
  .profile_wrap {display: inline-flex; align-items: center;}
  .info_items {padding: 3%; background: #fff; border-radius: 10px; box-shadow: RGB(13, 13, 13, 0.15) 0px 1px 5px;}
  .info_items:not(:first-child) {margin-left: 5%;}
  .profile_txt {text-align: left;}
  .info_wrap {margin-top: 100px; display: flex; justify-content: center; align-content: flex-start;}
  .info_wrap p {font-weight: bold; font-size: 20px;}
  .info_wrap dl {margin-top: 10px;}
  .info_wrap dt {color: #a1a1a1; font-size: 14px;}
  .info_wrap dt:not(:first-child) {margin-top: 8px;}
  .info_wrap dd {color: #333; font-size:14px;}
  .info_wrap dd em {font-weight: bold; font-size: 16px;}
</style>
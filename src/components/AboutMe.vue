<template>
        <section class="about">          
          <div class="sec_inner">   
            <div class="tit">
              <h2 class="typo_txt"></h2>     
            </div>                
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
                  컴포넌트 단위의 유의미한 구조적인 코딩을 지향합니다.
                </p>
                <p>
                  <i class="fas fa-shopping-cart"></i>
                  아모레퍼시픽, 나이키, 바닐라코 등의 대기업 쇼핑몰 이커머스 작업과 금융권과 자사 솔루션 신규제작 작업 경험이 있습니다.
                </p>
                <p>
                  <i class="fas fa-piggy-bank"></i>
                  현재 VUE 기반의 모바일 쇼핑몰 신규 제작 작업을 하고 있습니다.
                </p>   
                <div class="btn_wrap">
                  <a href="https://jungle-skateboard-a25.notion.site/75e61e8ffc3d4b42bb2b21a29190d3d8" target="_blank" class="btn_txt type4"><span>경력기술서 보기 ></span></a>
                  <a href="https://velog.io/@rkhong" target="_blank" class="btn_txt type4"><span>블로그 보기 ></span></a>
                </div>
              </div>              
            </div>
            
            <div class="info_wrap">
              <div class="info_items">
                <p>CAREER</p>
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
                <p>EDUCATION</p>
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
                  <dt>2012. 03 ~ 2016. 02</dt>
                  <dd>
                    <em>안동대학교 </em>멀티미디어공학                 
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
        data: function () {
          return {
            typoTxt: '안녕하세요.  홍려경입니다 :)',
            index: 0,
          }
        },
        mounted: function () {
          this.typo();
        },
        methods: {
          typo: function() {
            setInterval(this.typing, 200)
          },
          sleep: function(delay) {
            let start = new Date().getTime(); 
            while (new Date().getTime() < start + delay); 
          },
          typing: function() {            
            let text = document.querySelector('.typo_txt');
            text.textContent += this.typoTxt[this.index++];
            if(this.index > this.typoTxt.length){
              text.textContent = ""
              this.index = 0;
              this.sleep(3000);
            }
          },
        }
    }
</script>

<style lang="scss" scoped>  
  .sec_inner {text-align: center;}
  .profile_wrap {margin-top: 50px; display: inline-flex; align-items: center; justify-content: center;}
  .profile_img {width: 25%;}
  .tit {text-align: center;}
  .typo_txt {display: inline; border-right: 0.2em solid #222; animation: cursor 0.3s ease infinite;}
  @keyframes cursor { 
    0% {border-right: 1px solid #fff} 
    50% {border-right: 1px solid #222} 
    100% {border-right: 1px solid #fff} 
  }
  .info_items {margin: 1% 0; padding: 3%; flex-basis: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; flex-direction: column; background: #fff; border-radius: 10px; box-shadow: RGB(13 13 13 / 15%) 0px 1px 5px;}
  .info_items p {font-size: 20px; font-weight: 600;}
  .profile_txt {text-align: left;}
  .profile_txt p {margin-top: 15px;}
  .fas {margin-right: 5px;}
  .info_wrap  {margin-top: 5%; padding: 0 10%; display: flex; flex-wrap: wrap; justify-content: space-between; }
  .info_wrap dl {margin-top: 10px;}
  .info_wrap dt {color: #a1a1a1; font-size: 14px;}
  .info_wrap dt span {color: #282828; font-weight: 500;}
  .info_wrap dt:not(:first-child) {margin-top: 8px;}
  .info_wrap dd {color: #333; font-size:14px;}
  .info_wrap dd em {font-weight: bold; font-size: 16px;}
  .btn_wrap {margin-top: 30px; display: flex; align-items: center; justify-content: flex-start;}
  .btn_txt {
    display:inline-block;position:relative;margin-right:5px;text-align:center;vertical-align:middle;font-size:13px;line-height:18px;letter-spacing:0.5px; color: #a1a1a1; font-weight: bold;
    -webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    -webkit-transition-duration:.4s;transition-duration:.4s;
  }
.btn_txt:after {background:#a1a1a1;}
.btn_txt + .btn_txt {margin-left: 20px;}
   @media (max-width: 640px) {
    .profile_wrap {margin-top: 0}
    .info_wrap  {margin-top: 10%;}
    .info_wrap .info_items {padding: 7% 2%;}
    .info_items:not(:first-child) {margin-top: 5%;}
    .profile_img {display: none;}
    .profile_txt {margin-top: 50px;}
    .profile_wrap > p {width: 100%;}
    .info_wrap dt,
    .info_wrap dd {font-size: 12px;}
    .info_wrap dd em {font-size: 14px;}
  }
  @media all and (min-width: 1280px) {
    .profile_txt p {font-size: 16px;}
    .info_wrap {flex-wrap: nowrap;}
    .info_wrap .info_items {margin: 0; flex-basis: 49%;}
    .btn_txt {font-size:18px;line-height:24px;}
    .btn_txt:hover {color:#222;}
    .btn_txt:after {
      content:'';display:block;position:absolute;top:100%;left:0;right:0;height:1px;background:#000;
      -webkit-transform:scaleX(0);transform:scaleX(0);
      -webkit-transition:-webkit-transform .4s cubic-bezier(.7,0,.3,1);
      transition:-webkit-transform .4s cubic-bezier(.7,0,.3,1);
      transition:transform .4s cubic-bezier(.7,0,.3,1);
      -webkit-transform-origin:right center;transform-origin:right center;
    }
    .btn_txt:hover:after {background:#222;}
    .btn_txt.type4:hover:after {-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left center;transform-origin:left center;}
  }
</style>
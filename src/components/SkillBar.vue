<template>
        <section class="skills" id="skiils">
          <div class="sec_inner">
            <h2>SKILLS</h2>
          <ul>
            <li>
              <p>HTML5</p>
              <div class="progress">
                <div class="progress_bar" >
                  <div class="progress_value progress_value1">95%</div>
                </div>
              </div>
            </li>
            <li>
              <p>CSS3</p>
              <div class="progress">
                <div class="progress_bar" >
                  <div class="progress_value progress_value2">90%</div>
                </div>
              </div>
            </li>
            <li>
              <p>jQuery</p>
              <div class="progress">
                <div class="progress_bar">
                  <div class="progress_value progress_value3">85%</div>
                </div>
              </div>
            </li>
            <li>
              <p>Javascript & Vue</p>
              <div class="progress">
                <div class="progress_bar">
                  <div class="progress_value progress_value4">70%</div>
                </div>
              </div>
            </li>
            <li>
              <p>SVN & Git</p>
              <div class="progress">
                <div class="progress_bar">
                  <div class="progress_value progress_value5">85%</div>
                </div>
              </div>
            </li>
          </ul>
          </div>
          
        </section>
</template>

<script>
    export default {
        name: 'SkillBar',
        mounted: function () {
           window.addEventListener('scroll', () => {
          const tile = document.getElementById('skiils');
          const tileTop = tile.offsetTop;
          const scrollT = window.scrollY;
          const inveiw = "in";

          if( scrollT >= tileTop - 280 ){
          tile.classList.add(inveiw);
          }

        })
        }
    }
</script>

<style lang="scss" scoped>
.skills {padding-top: 80px; padding-bottom: 100px; }
.skills ul li {display: flex; margin-top: 3%;}
.skills ul li p {padding-right: 3%; flex: 0 0 32%; text-align: right; font-weight: 600;;}
.skills ul li .progress {flex: 0 0 50%;}
.progress_bar {
	background: #EBF6FF;
	justify-content: flex-start;
	border-radius: 20px;
	align-items: center;
	position: relative;
	display: flex;
	height: 100%;
	width: 100%;
  }
  
  .progress_value {
	box-shadow: 0 10px 40px -10px #fff;
	border-radius: 20px;
	background: #222;
	height: 30px;
	width: 0;
	text-align: right;
	padding-right: 14px; 
	font-size:0;
  }
 .skills.in .progress_value1 {animation: load1 1s normal forwards; color:#fff;font-size: 13px;}
 .skills.in .progress_value2 {animation: load2 2s normal forwards; color:#fff;font-size: 13px;}
 .skills.in .progress_value3 {animation: load3 2s normal forwards; color:#fff; font-size: 13px;}
 .skills.in .progress_value4 {animation: load4 3s normal forwards; color:#fff; font-size: 13px;}
 .skills.in .progress_value5 {animation: load5 3s normal forwards; color:#fff; font-size: 13px;}
  
  @keyframes load1 {
	0% { width: 0; }
	100% { width: 95%; }
  }
  @keyframes load2 {
	0% { width: 0; }
	100% { width: 90%; }
  }
  @keyframes load3 {
	0% { width: 0; }
	100% { width: 85%; }
  }
  @keyframes load4 {
	0% { width: 0; }
	100% { width: 70%; }
  }
  @keyframes load5 {
	0% { width: 0; }
	100% { width: 85%; }
  }
</style>
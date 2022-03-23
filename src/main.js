import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/scss/_index.scss'; // _index.scss를 한번만 불러오면 자동으로 css로 컴파일 해줌


createApp(App).mount('#app')

export function debounce(func, delay=200){
    let timer = null
    return function(...args) {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        })
    }
}


import BackTop from '../components/common/BackTop.vue'
export const backTopMixin = {
    components: {
        BackTop,
    },
    data(){
        return {
            isBackTopShow: false,
        }
    },
    methods: {
        backClick(){
            this.$refs.myscroll.scrollTo()
        },
        listenBackTopShow(position){
            this.isBackTopShow = position.y < -400 ? true : false;
        },
    }
}
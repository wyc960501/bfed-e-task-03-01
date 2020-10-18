export default {
    props: {
        to: {
            type: String,
            required: true
        }
    },
    render (h) {
        return h('a',{
            domProps: {
                href: '#' + this.to
            }
        },[this.$slots.default])
    }
}
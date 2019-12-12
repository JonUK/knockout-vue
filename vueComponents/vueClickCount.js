window.vueClickCountComponent =  Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

// const VueClickCount = {
//     props: ['text'],
//     template: '<div>Hello {{ text }}</div>',
// };
//
// const VueClickCountConstructor = Vue.extend(VueClickCount);
// window.VueClickCountConstructor = VueClickCountConstructor;
// const vm = new vueClickCountContructor({
//     propsData: {
//         text: 'World'
//     }
// }).$mount('#mount');

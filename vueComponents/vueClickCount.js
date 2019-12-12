// Mixin is defined first and then the component defined after
// define a mixin object
var vueMixin = {
    mounted: function () {
        console.log('Vue component mounted')
    },

    updated: function () {
        console.log('updated');
    }
};



// // Mixin is defined first and then the component defined after
// var KnockoutMixin = {
//
//     updateKnockout() {
//         this.__koTrigger(!this.__koTrigger());
//     },
//
//     componentDidMount() {
//         this.__koTrigger = ko.observable(true);
//         this.__koModel = ko.computed(function () {
//             this.__koTrigger(); // subscribe to changes of this...
//
//             return {
//                 props: this.props,
//                 state: this.state
//             };
//         }, this);
//
//         ko.applyBindings(this.__koModel, this.getDOMNode());
//     },
//
//     componentWillUnmount() {
//         ko.cleanNode(this.getDOMNode());
//     },
//
//     componentDidUpdate() {
//         this.updateKnockout();
//     }
// };


// Component definition
window.vueClickCountComponent =  Vue.component('button-counter', {
    mixins: [vueMixin],
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

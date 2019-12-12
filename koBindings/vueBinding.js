const vueBinding = ko.bindingHandlers.vue = {
    render: function ( el, Component, props ) {
        // React.render(
        //     React.createElement(Component,props),
        //     el
        // );

        new Vue({
            render: createElement => {
                const heading = createElement('h2', null, 'Rendered in Vue');
                const component = createElement(Component);
                return createElement('div', { className: 'preview' }, [heading, component, 'Hello World']);
            }
        }).$mount(el); // .$destroy()

    },

    init: function ( el, valueAccessor, allBindingsAccessor, viewModel, bindingContext ) {
        var options = valueAccessor();
        var Component = ko.unwrap(options.component || options.$);
        var props = ko.toJS(options.props || viewModel);

        vueBinding.render(el, Component, props);

        return { controlsDescendantBindings: true };
    },

    update: function ( el, valueAccessor, allBindingsAccessor, viewModel, bindingContext ) {
        var options = valueAccessor();
        var Component = ko.unwrap(options.component || options.$);
        var props = ko.toJS(options.props || viewModel);

        vueBinding.render(el, Component, props);

        return { controlsDescendantBindings: true };
    }
};

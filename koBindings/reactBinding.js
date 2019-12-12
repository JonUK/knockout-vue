const reactBinding = ko.bindingHandlers.react = {
    render: function ( el, Component, props ) {
        React.render(
            React.createElement(Component,props),
            el
        );
    },

    init: function ( el, valueAccessor, allBindingsAccessor, viewModel, bindingContext ) {
        var options = valueAccessor();
        var Component = ko.unwrap(options.component || options.$);
        var props = ko.toJS(options.props || viewModel);

        reactBinding.render(el, Component, props);

        return { controlsDescendantBindings: true };
    },

    update: function ( el, valueAccessor, allBindingsAccessor, viewModel, bindingContext ) {
        var options = valueAccessor();
        var Component = ko.unwrap(options.component || options.$);
        var props = ko.toJS(options.props || viewModel);

        reactBinding.render(el, Component, props);

        return { controlsDescendantBindings: true };
    }
};

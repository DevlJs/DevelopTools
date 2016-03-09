export directiveUse() {
    Vue.directive('select', {
        twoWay: true,
        priority: 1000,

        params: ['options'],

        bind: function() {

            var self = this
            $(this.el)
                .select2({
                    multiple: true,
                    tags: true,
                    data: this.params.options
                })
                .on('change', function() {
                    self.set(_.pluck($(this).select2('data'), 'text'))
                })
        },
        update: function(value) {
            $(this.el).val(value).trigger('change')
        },
        unbind: function() {
            $(this.el).off().select2('destroy')
        }
    })
}
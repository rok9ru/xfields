(function (jsGrid, $) {


    var Xcheckbox = function (config) {
        jsGrid.Field.call(this, config);
    };

    Xcheckbox.prototype = new jsGrid.CheckboxField({

        filterValue: function () {
            return this.filterControl.get(0).indeterminate
                ? undefined
                : (this.filterControl.is(":checked") ? 1 : 0);
        },

        insertValue: function () {
            return +(this.insertControl.is(":checked"));
        },

        editValue: function () {
            return +(this.editControl.is(":checked"));
        },
        itemTemplate: function (value) {
            return this._createCheckbox().prop({
                checked: +value,
                disabled: true
            });
        },
        editTemplate: function (value) {
            if (!this.editing)
                return this.itemTemplate.apply(this, arguments);

            var $result = this.editControl = this._createCheckbox();
            $result.prop("checked", +value);
            return $result;
        }

    });

    jsGrid.fields.Xcheckbox = Xcheckbox;

}(jsGrid, jQuery));
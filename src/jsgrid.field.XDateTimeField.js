(function (jsGrid, $) {
    var XDateTimeField = function (config) {
        jsGrid.Field.call(this, config);
    };
    XDateTimeField.prototype = new jsGrid.Field({

        css: "date-field",            // redefine general property 'css'
        align: "center",              // redefine general property 'align'
        datePickerType: "datetime-local",
        sorter: function (date1, date2) {
            return new Date(date1) - new Date(date2);
        },

        filterTemplate: function () {
            if (!this.filtering)
                return "";


            var grid = this._grid,
                $result = this.filterControl = this._createPiker();

            if (this.autosearch) {
                $result.on("change", function (e) {
                    grid.search();
                });
            }
            return $result;
        },

        filterValue: function () {
            return this.filterControl.val();
        },

        itemTemplate: function (value) {
            value = value || '';
            var options = this.options || {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            return new Date(value.replace(' ', 'T')).toLocaleDateString(undefined, options);
        },

        insertTemplate: function () {
            return this._insertPicker = this._createPiker();
        },

        editTemplate: function (value) {
            return this._editPicker = this._createPiker().val(value);
        },

        insertValue: function () {
            return this._insertPicker.val();
        },

        editValue: function () {
            return this._editPicker.val();
        },
        _createPiker: function () {
            return $("<input class='date-picker' >").attr("type", this.datePickerType);
        }
    });


    jsGrid.fields.XDateTimeField = XDateTimeField;
}(jsGrid, jQuery));
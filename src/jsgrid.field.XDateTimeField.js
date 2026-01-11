(function (jsGrid, $) {
    var XDateTimeField = function (config) {
        jsGrid.Field.call(this, config);
    };
    XDateTimeField.prototype = new jsGrid.Field({

        css: "date-field",            // redefine general property 'css'
        align: "center",              // redefine general property 'align'
        options: {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            //   hour12: false
        },
        sorter: function (date1, date2) {
            return new Date(date1) - new Date(date2);
        },

        itemTemplate: function (value) {
            value = value || '';
            var options = this.options;
            return new Date(value.replace(' ', 'T')).toLocaleDateString('ru-ru', options);
        },

        insertTemplate: function () {
            return this._insertPicker = $("<input class='date-picker' type='datetime-local'>");
        },

        editTemplate: function (value) {
            return this._editPicker = $("<input class='date-picker' type='datetime-local'>").val(value);
        },

        insertValue: function () {
            return this._insertPicker.val();
        },

        editValue: function () {
            return this._editPicker.val();
        }
    });


    jsGrid.fields.XDateTimeField = XDateTimeField;
//jsgrid.field.XDateTimeField.js
}(jsGrid, jQuery));
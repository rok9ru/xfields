(function (jsGrid, $) {


    var XimgField = function (config) {
        jsGrid.TextField.call(this, config);
    };

    XimgField.prototype = new jsGrid.TextField({
        fm_callback: null,
        editButtonText: 'Open FM',

        itemTemplate: function (value) {
            var img = $('<img class="jsgrid-img" src="">');
            img.attr("src", value || '');
            img.css('max-height', '50px');
            img.css('max-width', '50px');

            return img;
        }
        , editTemplate: function (value) {
            if (!this.editing)
                return this.itemTemplate.apply(this, arguments);
            var fm = this.fm_callback;

            var editControl = this.editControl = $('<input type="text" value="' + (value || '') + '">');
            if (fm) {
                return $('<button class="jsgrid-imgField-button">' + this.editButtonText + '</button>').click(function () {
                    fm(editControl);
                });
            }
            return editControl;

        },
        insertTemplate: function () {
            if (!this.inserting)
                return "";
            var fm = this.fm_callback;

            var insertControl = this.insertControl = $('<input type="text">');
            if (typeof fm == 'function') {
                return $('<button class="jsgrid-button jsgrid-imgField-button">'+this.editButtonText+'</button>').click(function () {
                    fm(insertControl);
                });
            }
            return insertControl;
        }


    });

    jsGrid.fields.XimgField = XimgField;

}(jsGrid, jQuery));
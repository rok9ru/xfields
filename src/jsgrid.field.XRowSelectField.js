(function (jsGrid, $) {

    var XRowSelectField = function (config) {
        jsGrid.Field.call(this, config);
    };

    XRowSelectField.prototype = new jsGrid.Field({
        filtering: false,
        deleteItemByItem: false,
        selectedItems: [],
        buttonText: "",
        selectedItemsAction: function (selectedItems) {

        },
        unselectAll: function () {
            this.selectedItems = [];
            this._grid._container.find('[data-uid=\'' + this.uid + '\'] ').prop('checked', false);
        },
        headerTemplate: function () {
            if (!this.buttonText) {
                return '';
            }
            var that = this;
            return $("<button>").attr("type", "button").text(that.buttonText)
                .on("click", function () {
                    that.selectedItemsAction(that.selectedItems);
                    event.stopPropagation();
                });
        },
        itemTemplate: function (_, item) {
            var that = this;
            return $("<input data-uid='" + that.uid + "' type='checkbox'>")
                .prop("checked", $.inArray(item, that.selectedItems) > -1)
                .on("change", function () {
                    $(this).is(":checked") ? that.selectItem(item) : that.unselectItem(item);
                }).click(function (event) {
                    event.stopPropagation();
                });
        },
        editTemplate: function () {
            return '';
        },
        align: "center",

        selectItem: function (item) {
            this.selectedItems.push(item);
        },
        unselectItem: function (item) {
            this.selectedItems = $.grep(this.selectedItems, function (i) {
                return i !== item;
            });
        },
        uid: Date.now().toString(36) + Math.random().toString(36).substring(2)
    });

    jsGrid.fields.XRowSelectField = XRowSelectField;

}(jsGrid, jQuery));
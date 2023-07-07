(function (jsGrid, $) {


    var Xselect = function (config) {
        jsGrid.Field.call(this, config);
    };

    Xselect.prototype = new jsGrid.SelectField({
        pseudoElement: null,//pseudoElement that will be unsifted to start of select data in filters
        filterTemplate: function () {
            if (!this.filtering)
                return "";
            var data = this.items.slice(0);
            if (this.pseudoElement) {
                data.unshift(this.pseudoElement);
            } else {
                var d = {};
                d[this.textField] = '';
                d[this.valueField] = null;
                data.unshift(d);
            }
            var grid = this._grid,
                $result = this.filterControl = this._createSelect(data);

            if (this.autosearch) {
                $result.on("change", function (e) {
                    grid.search();
                });
            }

            return $result;
        },
        _createSelect: function (data) {
            var $result = $("<select>"),
                valueField = this.valueField,
                textField = this.textField,
                selectedIndex = this.selectedIndex;

            $.each((data || this.items), function (index, item) {
                var value = valueField ? item[valueField] : index,
                    text = textField ? item[textField] : item;

                var $option = $("<option>")
                    .attr("value", value)
                    .text(text)
                    .appendTo($result);

                $option.prop("selected", (selectedIndex === index));
            });

            $result.prop("disabled", !!this.readOnly);

            return $result;
        }

    });

    jsGrid.fields.Xselect = Xselect;

}(jsGrid, jQuery));
(function (jsGrid, $) {


    var Xtextarea = function (config) {
        jsGrid.Field.call(this, config);
    };

    Xtextarea.prototype = new jsGrid.TextAreaField({
        maxShowSymbols: 50,

        itemTemplate: function (value, item) {
            if(value.length < 50){
                return $("<div>").text(value);
            }
            var str = value.slice(0, this.maxShowSymbols);
            var div = $("<div>").text(str + ' ...').click(function () {
                div.text(value);
                return false;
            });

            return div;
        }

    });

    jsGrid.fields.Xtextarea = Xtextarea;

}(jsGrid, jQuery));
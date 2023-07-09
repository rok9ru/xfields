(function (jsGrid, $) {

    var Xjsoneditor = function (config) {
        jsGrid.TextAreaField.call(this, config);
    };

    Xjsoneditor.prototype = new jsGrid.TextAreaField({
        templates: [],
        closeText: 'Save',
        editText: "Editor",
        _doModal: function (formContent, options, resultControl) {
           /* options.onClose = function () {
                var json = editor.editor.get();
                if (!$.isEmptyObject(json)) {
                    resultControl.val(JSON.stringify(json));
                } else {
                    resultControl.val({});
                }
            }
            */
            return jsGrid.popup(formContent, options);
        },

        _createJsonEditor: function (json, mode) {
            json = json || {};
            if (typeof json !== 'object') {
                json = JSON.parse(json);
            }

            // var container = document.getElementById('jsoneditor');
            var container = $('<div id="jsoneditor" style="height: 500px;">');
            $('body').append(container);
            container = container[0];
            var options = {
                templates: this.templates,
                modes: ['code', 'text', 'tree'], // allowed modes
                onError: function (err) {
                    alert(err.toString());
                },
                mode: mode || 'view'
            };

            return new JSONEditor(container, options, json);
        },

        itemTemplate: function (value, item) {
            var f = this;

            return $("<button>Редактор</button>").click(function () {
                var editor = f._createJsonEditor(value);
                f._doModal(editor.container, {
                    onClose: function () {
                        $(editor.container).remove();
                        editor.destroy();
                    }
                });
                return false;
            });
        },
        insertTemplate: function () {
            if (!this.inserting)
                return "";

            var f = this;

            return this.insertControl = $("<textarea>").click(function () {
                var editor = f._createJsonEditor({}, 'tree');
                var ta = $(this);

                f._doModal(editor.container, {
                    closeText: f.closeText,
                    onClose: function () {

                        var json = editor.get();
                        if (!$.isEmptyObject(json)) {
                            ta.val(JSON.stringify(json));
                        } else {
                            ta.val({});
                        }
                        editor.destroy();

                    }
                });
                return false;
            });

        },
        editTemplate: function (value) {
            if (!this.editing)
                return this.itemTemplate.apply(this, arguments);


            var f = this;

            return this.editControl = $("<textarea>").val(value).click(function () {
                var ta = $(this);
                var editor = f._createJsonEditor(ta.val(), 'tree');


                f._doModal(editor.container, {
                    closeText: f.closeText,
                    onClose: function () {

                        var json = editor.get();
                        if (!$.isEmptyObject(json)) {
                            ta.val(JSON.stringify(json));
                        } else {
                            ta.val({});
                        }
                        editor.destroy();

                    }
                });
                return false;
            });
        }

    });

    jsGrid.fields.Xjsoneditor = Xjsoneditor;

}(jsGrid, jQuery));
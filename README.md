# jsgridfieldcollection

More custom fields for jsgrid! \
**Xcheckbox** - modified standard checkbox. Now, it's returning 1/0 not true/false, so it fixes many problems on backend
with variable types (especially the databases)

**XimgField** - new Img field with preview and optionally FileManager picker

**Xjsoneditor** - integrate JSONEditor in field (required dependency https://www.npmjs.com/package/jsoneditor).

**Xselect** - modified standard select, now it unsifted pseudoElement to start of select data in filters

**Xtextarea** - modified standard textarea, that works in new modes:

1. Cut symbols by "maxShowSymbols" (default 50), and shows all by click;
2. (IN DEV) Cut symbols by "maxShowSymbols" (default 50), show popup with all text
3. (IN DEV) Show textarea editor in popup

**XRowSelectField** - new Select rows field with checkboxes. Overwrite function *selectedItemsAction* to create custom
logic (by default field has no actions), if option *buttonText* is not set, button will be hidden

New **popup.basic** (simple, only jquery dependency) that used for fields Xjsoneditor and Xtextarea, can be accessed
globally by jsGrid.popup or jsGrid.popupBasic
> Note:\
> You can overwrite popup with your own popup, by overwriting *jsGrid.popup* function, or load default
*jsgrid.popup.basic.js*

# Examples

See example with all new fields: [index.html](example%2Findex.html)





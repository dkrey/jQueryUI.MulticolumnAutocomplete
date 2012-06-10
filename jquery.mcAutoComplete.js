/*
 * jQuery UI Multicolumn Autocomplete Widget Plugin 1.0
 * Copyright (c) 2012 Mark Harmon
 *
 * Depends:
 *   - jQuery UI Autocomplete widget
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
*/
$.widget('custom.mcautocomplete', $.ui.autocomplete, {
    _renderMenu: function(ul, items) {
        var self = this;
        if (this.options.menuHeader) {
            ul.append(this.options.menuHeader);
        }
        $.each(items, function(index, item) {
            self._renderItem(ul, item);
        });
    },
    _renderItem: function(ul, item) {
        if (this.options.renderItem) {
            this.options.renderItem(ul, item);
        }
        else {
            return $('<li></li>')
                .data('item.autocomplete', item)
                .append('Must define renderItem option.')
                .appendTo(ul);
        }
    }
});
/*
 * jQuery UI Multicolumn Autocomplete Widget Plugin 2.1
 * Copyright (c) 2012-2014 Mark Harmon
 *
 * Depends:
 *   - jQuery UI Autocomplete widget
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
*/
$.widget('custom.mcautocomplete', $.ui.autocomplete, {
    _create: function() {
      this._super();
      this.widget().menu( "option", "items", "> :not(.ui-widget-header)" );
    },
    _renderMenu: function(ul, items) {
        if (this.options.showHeader) {
            table=$('<div class="ui-widget-header" style="width:100%"></div>');
            $.each(this.options.columns, function(index, item) {
                table.append('<span style="padding:0 4px;float:left;width:' + item.width + ';">' + (item.name ? item.name : '&nbsp;') + '</span>');
            });
			table.append('<div style="clear: both;"></div>');
            ul.append(table);
        }
        this._super(ul, items);
    },
    _renderItem: function(ul, item) {
        if (this.options.columns) {
    		var t = '',
    			result = '';

    		$.each(this.options.columns, function(index, column) {
    			var val = item[column.valueField ? column.valueField : index];
    			t += '<span style="padding:0 4px;float:left;width:' + column.width + ';">' + (val ? val : '&nbsp;') + '</span>'
    		});

    		result = $('<li></li>')
    			.data('ui-autocomplete-item', item)
    			.append('<a class="mcacAnchor">' + t + '<div style="clear: both;"></div></a>')
    			.appendTo(ul);
    		return result;
        }
        else
            return this._super(ul, item);
    }
});

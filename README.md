jQuery UI Multicolumn Autocomplete
==================================

Description
-----------
A simple extension for the jQuery UI autocomplete control that adds support for multiple columns in the drop-down list.
This plugin adds two additional options to the existing autocomplete control, **menuHeader** and **renderItem**. These two options make it possible to display any number of columns in your autocomplete control.


How to use
----------
There is a demo.html file in the repository the shows how a 3 column autocomplete would be implemented.
As mentioned in the description above, there are only two options added to the autocomplete control.
- **menuHeader**: This is a string that contains the html for the header. Leave it empty if you don't want a header control.
- **renderItem**: A hook into the event handler for rendering the control's list items. The function returns a string containing html for an individual &lt;li> elelment.

Links
-----
[jQuery UI autocomplete Demos and Documentation can be found here](http://jqueryui.com/demos/autocomplete/)

[View a working example of this plugin at JS Fiddle](http://jsfiddle.net/alforno/g4stL/)
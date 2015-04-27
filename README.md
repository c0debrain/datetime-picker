#Datetime Picker

I noticed that there were no generic datetime pickers on Atmosphere so I figured I'd add one!

## Usage

In your html add a text input:

```
<input id="datetimepicker" type="text" >
```

Then, in your template rendered block add the following:

```
$('#datetimepicker').datetimepicker();
```

And that's it!

## Credits

This plugin comes from http://xdsoft.net/jqplugins/datetimepicker/

## Customizing

You can change the default active color by adding this block of code to your css file and changing the colors:

```
.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_default,
.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_current,
.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_time_box >div >div.xdsoft_current {
	background: #33aaff;
	box-shadow: #178fe5 0 1px 3px 0 inset;
	color: #fff;
	font-weight: 700;
}
```

You can change the hover color by adding this block of code and changing the colors:

```
.xdsoft_datetimepicker .xdsoft_calendar td:hover,
.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_time_box >div >div:hover {
	color: #fff !important;
	background: #ff8000 !important;
	box-shadow: none !important;
}
```

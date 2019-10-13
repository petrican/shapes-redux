# shapes-redux
Small Shapes app using redux

This React application is listing some colors and shapes and allows filtering them. The data is read from
`shapes.json` file found under the public folder. The items listed can be filtered by shape and color.
The selected filters reflect to the grid title.:
Details:
Filters:
!. All the filters should be selected by default.
#. Multiple filters can be selected, selected filter should change their color or
should have a border. See shapes.jpg for reference.
$. Deselecting the last filter, should default to all selected.
Grid Title:
!. The title should reflect change based on the selected filters, please see
examples below:
a. When all the colors and shapes are selected: “All items:”
b. When all the colors and a multiple shapes are selected: “Multiple
items:”
c. When all the shapes and multiple colors are selected: “Multiple items:”
d. When all the shapes and a single color is selected: “All red items:”
e. When all the colors and single shape is selected: “All round items:”
f. When multiple the shapes and a single color is selected: “Multiple red
items:”
g. When multiple the colors and single shape is selected: “Multiple round
items:”
h: When a single color and single shape is selected: “Round red items:”

Notes:
– The grid items ares painted with css only
– The application is responsive
– The listing of the items and filtering is done using redux

### Setup


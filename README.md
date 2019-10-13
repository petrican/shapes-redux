### shapes-redux
## Small Shapes app using redux

This React application is listing some colors and shapes and allows filtering them. <br />
The data is read from `shapes.json` file found under the public folder. <br />
The items listed can be filtered by shape and color. The selected filters reflect to the grid title.:
<br />
Details:


Filters: <br />
- All the filters are selected by default. <br />
- Multiple filters can be selected, selected filter changes their color or
have a border.<br />
- Deselecting the last filter, defaults to all selected.
<br />
Grid Title: <br />
- The title reflect changes based on the selected filters, please see
examples below: <br />
a) When all the colors and shapes are selected: “All items:” <br />
b) When all the colors and a multiple shapes are selected: “Multiple
items:” <br />
c) When all the shapes and multiple colors are selected: “Multiple items:” <br />
d) When all the shapes and a single color is selected: “All red items:” <br />
e) When all the colors and single shape is selected: “All round items:” <br />
f) When multiple the shapes and a single color is selected: “Multiple red
items:” <br />
g) When multiple the colors and single shape is selected: “Multiple round
items:” <br />
h) When a single color and single shape is selected: “Round red items:” <br />
 <br />
## Notes: <br />
– The grid items ares painted with css only <br />
– The application is responsive <br />
– The listing of the items and filtering is done using redux <br />

### Setup <br />

 <br />
 
 You need to have NodeJs installed first on your system. Please download this and follow the installation steps from [Node JS Download Page](https://nodejs.org/en/download/)
 

Less fundamentals practice
---

Start web server with
**npm run serve**

Start watching the less files with
**grunt watch**

All tasks directly in the AppStylesheets/Test.less.


1. Specifying styles

 a) parent selector
    Inside p specify the following styles for p.danger

color: red;
background: #ffaaaa;
padding-top: 20px;
padding-bottom: 20px;

 b) nesting selectors
    Inside p.danger specify the following styles for the b element

color: darkred;

 c) combining parent selectors
    When you have two adjacent p.danger, apply the style to the second one so that they are visually merged

margin-top: -20px;


2. Mixins and importing

 a) create a mixin file, e.g. utilities.less with a center-block mixin (a mixin not as a function)

display: block;
margin-left: auto;
margin-right: auto;

 What will be the css generated for such a mixin?

 b) Import mixins/utilities.less to test.less
    - where in file can you import another less?
    - is there a output size penalty for unneccessary imports?
    - can the imported file contain another imports?

 c) Add center-block to the p and set p.danger width to 50%;

 d) convert center-block to a parameterless mixin with parentheses
    What will be the difference in the generated css?

 e) in test.less expose center-block as a style to .center-block class


3. Creating namespaces for mixins
   Wrap the utilities.less in utilities namespace and correctly reference it in test.less


4. Variables and functions
   - what a variable can hold: font size? string? list of font typefaces?
   - where can a variable be used: in import statement? in selector class name? in url e.g. to a font or image? How the 
syntax differs?

 a) in test.less add three variables danger-color (red), danger-background (#ffaaaa) and danger-b (darkred), reference 
them
 

 b) using functions replace the values for:
    - danger-background with danger-color lightened by 40%
    - danger-b with danger-color darkened by 20%
    - how do you can ensure when you calculate a relative font size (e.g. base*1.4) that you get an integral number

 c) overriding default values for a variable and preserving the calculation method for the rest
    - how can you override a variable value
    - what happens with the variables based on this overriden value (e.g. darkened) - what is the base for their 
calculations? When a variable is evaluated?
    - create a variables.less file and put variables here, reference this file in test.less
    - inside test.less override the default value of danger-color to "gold" in the way that all other variables remain 
relative to this new value


5. Parametric mixins
   - how do you specify multiple parameters for a mixin, how do you separate them, how do you reference parameters 
withing mixin
 
   a) create a file mixins/gradients.less with the gradients namespace and within it the vertical mixin, code below:


   b) specify default values for start-percent and end-percent (0% and 100%, respectively)

   c) import this file into test.less and reference vertical in p.danger. Use positional parameters: for the first: 
@danger-background and for the second @danger-background darkened by 10%

   d) specifying named parameters: specify @end-percent as a named parameter, set to 50%.



.vertical(@start-color; @end-color; @start-percent; @end-percent) {
        background-image: -webkit-linear-gradient(top, @start-color @start-percent, @end-color @end-percent); // Safari 
5.1-6, Chrome 10+
        background-image: -o-linear-gradient(top, @start-color @start-percent, @end-color @end-percent); // Opera 12
        background-image: linear-gradient(to bottom, @start-color @start-percent, @end-color @end-percent); // Standard, 
IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+
        background-repeat: repeat-x;
        filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', 
GradientType=0)",argb(@start-color),argb(@end-color))); // IE9 and down
    }
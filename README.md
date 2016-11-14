### Gulp

* "Automate and enhance workflow"
* It's a task runner. Takes tasks and runs them
* It can source files to give to a task to be run
* Puts results in a destination file
* Like Grunt (entirely through configuration objects, gulp entirely through code)
* Also like Maven, npm scripts, make 

### Some Code

* `npm install --global gulp-cli`
* `npm init -y`
* `npm install --save-dev gulp`
* `touch gulpfile.js` edit file and main.scss
* package.json `"build": "gulp"` under scripts
* package.json `"dev": "gulp watch"` under scripts
* `npm run build`
* `gulp`
* `npm install gulp-sass --save-dev`
* [gulp-sass docs](https://www.npmjs.com/package/gulp-sass)
* [gulp docs](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### cssnano
* [gulp-cssnano docs](https://www.npmjs.com/package/gulp-cssnano)
* `npm install gulp-cssnano --save-dev`
* `var cssnano = require('gulp-cssnano');`

### uglify
<!--uglify does not support es6-->
* [gulp babel](https://www.npmjs.com/package/gulp-babel)
* `const babel = require('gulp-babel');`
* `npm install --save-dev gulp-babel babel-preset-es2015`

* `npm install --save-dev gulp-uglify`
*  `var uglify = require('gulp-uglify');`

### Testing Code 

* ` npm install --save-dev gulp-mocha`

### Using the css

* `npm install browser-sync gulp --save-dev`



var path = require('path');
var chalk = require('chalk');
var util = require('util');

var Generator = require('yeoman-generator');
var yosay = require('yosay');
var path = require('path');

module.exports = class extends Generator {
	initializing() {
    this.props = {};
  }	
  
  prompting() {
  	var questions = [
  		{
        type: 'input',
        name: 'name',
        message: 'package name',
        default: 'vue-project',
      },
      {
        type: 'input',
        name: 'version',
        message: 'version',
        default: '1.0.0',
      },
      {
        type: 'input',
        name: 'description',
        message: 'description',
        default: 'a vue project ...',
      },
      {
        type: 'input',
        name: 'author',
        message: 'author',
        store: true, // 记住用户的选择
        default: 'drank',
      },	
  	];

  	return this.prompt(questions).then(function(answers) {
      for (var item in answers) {
        // 把answers里的内容绑定到外层的this，便于后面的调用
        answers.hasOwnProperty(item) && (this.props[item] = answers[item]);
      }
    }.bind(this));	
  }

  writing() {
  	const files = [
  		'public', 
      'src', 
      'tests', 
      '.browserslistrc', 
      '.eslintrc.js', 
      '.gitignore',
      'babel.config.js',
      'package-lock.json',
      'package.json',
      'postcss.config.js',
      'README.md',
      'vue.config.js'
  	];

  	for (var i = 0; i < files.length; i++) {
  		var f = files[i];

      if (f == '.gitignore') {
        var file = this.templatePath('.npmignore');

        if (file) {
          this.fs.copy(this.templatePath('.npmignore'), this.destinationPath('.gitignore'));
        } else {
          this.fs.copy(this.templatePath(f), this.destinationPath(f));  
        }
        continue;
      }
      
  		this.fs.copy(this.templatePath(f), this.destinationPath(f));
  	}

  	 // copyTpl 可以渲染变量
    // console.log(this.props); 
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {
      name: this.props.name,
      version: this.props.version,
      description: this.props.description,
      author: this.props.author,
    });
  }

  /**
  install() {
  	this.installDependencies({
      npm: { force: true },
      yarn: false
    });
  }
  **/
  
  end() {
 		this.log(yosay('Your app has been created successfully!')); 	
  }
}
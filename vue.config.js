const path = require('path');
module.exports = {

	chainWebpack:(config)=>{
	    config.resolve.alias
	      .set('@', path.join(__dirname,'src'))
	      .set('components', path.join(__dirname,'src/components'))
	      .set('mixins', path.join(__dirname,'src/mixins'))
	      .set('store', path.join(__dirname,'src/store'))
	      .set('assets', path.join(__dirname,'src/assets'))
  	}

}

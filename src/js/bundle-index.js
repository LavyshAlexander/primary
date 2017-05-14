requirejs.config({
	paths: {
		"libs": './libs.min',
		"value": 'modules/index/value',
		"dom": 'modules/index/dom',
		"app" : "modules/index/app/app",
		"init": 'modules/index/init'

	}
});

require(['value', 'dom', 'app', 'init'],function(value, dom, app, init){
	init.initJs();
});

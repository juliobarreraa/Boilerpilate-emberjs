window.App = window.App || {};
url = typeof window.App.baseUrlDeveloper === "undefined" ? "" : window.App.baseUrlDeveloper;

require.config({
	// Configuramos la url base partiendo de las
	// librerias del proyecto
	baseUrl: (typeof url == "undefined" ? "js/vendor" : url + "js/vendor"),
	paths: {
		app: "../app",
		jquery: "jquery.min",
		cs: "cs",
		emberjs: "ember",
		handlebars: "handlebars",
		helper: "helper",
		appglobal: "../app/app"
	},
	shim: {
		jquery: {
			exports: "jQuery"
		},
		appglobal: ["cs!helper"],
	}
});


requirejs(["cs!appglobal"]);
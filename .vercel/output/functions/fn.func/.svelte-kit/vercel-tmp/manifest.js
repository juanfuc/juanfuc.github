export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","assets/imgs/2.jpg","favicon2.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CPWj49DD.js","app":"_app/immutable/entry/app.Mb6H8OYo.js","imports":["_app/immutable/entry/start.CPWj49DD.js","_app/immutable/chunks/entry.Cir131Sm.js","_app/immutable/chunks/scheduler.DsjCYe6-.js","_app/immutable/entry/app.Mb6H8OYo.js","_app/immutable/chunks/scheduler.DsjCYe6-.js","_app/immutable/chunks/index.BXruS39i.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

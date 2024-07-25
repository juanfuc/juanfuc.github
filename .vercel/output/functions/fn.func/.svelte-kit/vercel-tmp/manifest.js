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
		client: {"start":"_app/immutable/entry/start.BV2L7UZL.js","app":"_app/immutable/entry/app.BFt1CXad.js","imports":["_app/immutable/entry/start.BV2L7UZL.js","_app/immutable/chunks/entry.RX4OB0Lq.js","_app/immutable/chunks/scheduler.DsjCYe6-.js","_app/immutable/entry/app.BFt1CXad.js","_app/immutable/chunks/scheduler.DsjCYe6-.js","_app/immutable/chunks/index.BXruS39i.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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

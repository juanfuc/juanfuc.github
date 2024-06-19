export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","assets/imgs/2.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DHtEAWpj.js","app":"_app/immutable/entry/app.TnDYABX-.js","imports":["_app/immutable/entry/start.DHtEAWpj.js","_app/immutable/chunks/entry.DXxfwTVm.js","_app/immutable/chunks/scheduler.BaiVm2Fr.js","_app/immutable/entry/app.TnDYABX-.js","_app/immutable/chunks/scheduler.BaiVm2Fr.js","_app/immutable/chunks/index.DWRkMoV3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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

const cmdCallback0 = (settings, err) => E.Scheduler.rawSpawn(err ? settings.onError(err) : settings.onSuccess());
const cmdCallback1 = (settings, err, result1) => E.Scheduler.rawSpawn(err ? settings.onError(err) : settings.onSuccess(result1));
const cmdCallback2 = (settings, err, result1, result2) => E.Scheduler.rawSpawn(err ? settings.onError(err) : A2(settings.onSuccess, result1, result2));
// Cmd Helpers
const cmdHelper = f => {
	return E.Scheduler.nativeBinding(callback => {
		f(callback);
	});
};
const buildOpts = (args, names) => {
	const options = {};
	for (let i = 0; i < names.length; ++i) {
		options[names[i]] = args[i];
	}
	return options;
};
const flatten = arr => arr.reduce(function(a, b) {
	return a.concat(b);
}, []);
const buildArgs = (args, names, callback) => {
	var newArgs = [];
	newArgs.push(args.slice(names.length, args.length));
	newArgs.push(buildOpts(args, names));
	newArgs.push(callback);
	return flatten(newArgs);
};
const unwrap = def => (offset, args) => {
	offset += 1; // + 1 for counting starting with 1
	return args.map((arg, index) => def[index + offset] ? arg[def[index + offset]] : arg);
};
const unwrapNop = (offset, args) => args;
const postProcess = def => args => args.map((arg, index) => (def[index] || id)(arg));
const postProcessNop = id;
const append = (arr, item) => (arr[arr.length] = item, arr);
const cmdCall1_1 = (f, postProcess) => (settings, p1) => {
	postProcess = postProcess || postProcessNop;
	return cmdHelper(callback => {
		f(p1, (err, result1) => cmdCallback1.apply(null, [settings, err].concat(postProcess([result1]))));
		callback(E.Scheduler.succeed(E.Maybe.Nothing));
	});
};
const cmdCall3_1 = (f, unwrapper, postProcess) => (settings, p1, p2, p3) => {
	unwrapper = unwrapper || unwrapNop;
	postProcess = postProcess || postProcessNop;
	return cmdHelper(callback => {
		f.apply(null, append(unwrapper(0, [p1, p2, p3]), (err, result1) => cmdCallback1.apply(null, [settings, err].concat(postProcess([result1])))));
		callback(E.Scheduler.succeed(E.Maybe.Nothing));
	});
};
const cmdCall1_0 = (f, unwrapper) => (settings, p1) => {
	unwrapper = unwrapper || unwrapNop;
	return cmdHelper(callback => {
		f.apply(null, append(unwrapper(0, [p1]), err => cmdCallback0(settings, err)));
		callback(E.Scheduler.succeed(E.Maybe.Nothing));
	});
};
const cmdCall2_0 = (f, unwrapper) => (settings, p1, p2) => {
	unwrapper = unwrapper || unwrapNop;
	return cmdHelper(callback => {
		f.apply(null, append(unwrapper(0, [p1, p2]), err => cmdCallback0(settings, err)));
		callback(E.Scheduler.succeed(E.Maybe.Nothing));
	});
};
const cmdCall3_0 = (f, unwrapper) => (settings, p1, p2, p3) => {
	unwrapper = unwrapper || unwrapNop;
	return cmdHelper(callback => {
		f.apply(null, append(unwrapper(0, [p1, p2, p3]), err => cmdCallback0(settings, err)));
		callback(E.Scheduler.succeed(E.Maybe.Nothing));
	});
};
const cmdCall5_1 = (f, unwrapper, postProcess) => (settings, p1, p2, p3, p4, p5) => {
	unwrapper = unwrapper || unwrapNop;
	postProcess = postProcess || postProcessNop;
	return cmdHelper(callback => {
		f.apply(null, append(unwrapper(0, [p1, p2, p3, p4, p5]), (err, result1) => cmdCallback1.apply(null, [settings, err].concat(postProcess([result1])))));
		callback(E.Scheduler.succeed(E.Maybe.Nothing));
	});
};
const cmdCall4_1 = (f, unwrapper, postProcess) => (settings, p1, p2, p3, p4) => {
	unwrapper = unwrapper || unwrapNop;
	postProcess = postProcess || postProcessNop;
	return cmdHelper(callback => {
		f.apply(null, append(unwrapper(0, [p1, p2, p3, p4]), (err, result1) => cmdCallback1.apply(null, [settings, err].concat(postProcess([result1])))));
		callback(E.Scheduler.succeed(E.Maybe.Nothing));
	});
};
const cmdCall5_0_opts = (f, unwrap, names) => (settings, p1, p2, p3, p4, p5) => {
	const args = [p1, p2, p3, p4, p5];
	return cmdHelper(callback => {
		f.apply(null, unwrap(names.length, buildArgs(args, names, err => cmdCallback0(settings, err))));
		callback(E.Scheduler.succeed(E.Maybe.Nothing));
	});
};

module.exports = {
	unwrap,
	cmdCall1_0,
	cmdCall2_0,
	cmdCall3_0,
	cmdCall3_1,
	cmdCall4_1,
	cmdCall5_1,
	cmdCall5_0_opts
};

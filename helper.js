// E must be passed from the elm native module since required modules won't live in the same scope as elm
///
// It must have at least the following:
//
// const E = {
// 	Scheduler: {
// 		nativeBinding: _elm_lang$core$Native_Scheduler.nativeBinding,
// 		succeed:  _elm_lang$core$Native_Scheduler.succeed,
// 		rawSpawn: _elm_lang$core$Native_Scheduler.rawSpawn
// 	}
// };

module.exports = E => {
	const id = x => x;
	const callBack0 = (settings, err) => E.Scheduler.rawSpawn(err ? settings.onError(err) : settings.onSuccess());
	const callBack1 = (settings, err, result1) => E.Scheduler.rawSpawn(err ? settings.onError(err) : settings.onSuccess(result1));
	const callBack2 = (settings, err, result1, result2) => E.Scheduler.rawSpawn(err ? settings.onError(err) : E.A2(settings.onSuccess, result1, result2));
	const callHelper = f => {
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
	const call1_0 = (f, unwrapper) => (settings, p1) => {
		unwrapper = unwrapper || unwrapNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1]), err => callBack0(settings, err)));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call1_1 = (f, unwrapper, postProcess) => (settings, p1) => {
		unwrapper = unwrapper || unwrapNop;
		postProcess = postProcess || postProcessNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1]), (err, result1) => callBack1(settings, err, postProcess(result1))));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call2_0 = (f, unwrapper) => (settings, p1, p2) => {
		unwrapper = unwrapper || unwrapNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2]), err => callBack0(settings, err)));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call2_1 = (f, unwrapper, postProcess) => (settings, p1, p2) => {
		unwrapper = unwrapper || unwrapNop;
		postProcess = postProcess || postProcessNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2]), (err, result1) => callBack1(settings, err, postProcess(result1))));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call3_0 = (f, unwrapper) => (settings, p1, p2, p3) => {
		unwrapper = unwrapper || unwrapNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2, p3]), err => callBack0(settings, err)));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call3_1 = (f, unwrapper, postProcess) => (settings, p1, p2, p3) => {
		unwrapper = unwrapper || unwrapNop;
		postProcess = postProcess || postProcessNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2, p3]), (err, result1) => callBack1(settings, err, postProcess(result1))));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call3_2 = (f, unwrapper, postProcess1, postProcess2) => (settings, p1, p2, p3) => {
		unwrapper = unwrapper || unwrapNop;
		postProcess1 = postProcess1 || postProcessNop;
		postProcess2 = postProcess2 || postProcessNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2, p3]), (err, result1, result2) => callBack2(settings, err, postProcess1(result1), postProcess2(result2))));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call4_0 = (f, unwrapper) => (settings, p1, p2, p3, p4) => {
		unwrapper = unwrapper || unwrapNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2, p3, p4]), err => callBack0(settings, err)));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call4_1 = (f, unwrapper, postProcess) => (settings, p1, p2, p3, p4) => {
		unwrapper = unwrapper || unwrapNop;
		postProcess = postProcess || postProcessNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2, p3, p4]), (err, result1) => callBack1(settings, err, postProcess(result1))));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call4_2 = (f, unwrapper, postProcess1, postProcess2) => (settings, p1, p2, p3, p4) => {
		unwrapper = unwrapper || unwrapNop;
		postProcess1 = postProcess1 || postProcessNop;
		postProcess2 = postProcess2 || postProcessNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2, p3, p4]), (err, result1, result2) => callBack2(settings, err, postProcess1(result1), postProcess2(result2))));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call5_0_opts = (f, unwrap, names) => (settings, p1, p2, p3, p4, p5) => {
		const args = [p1, p2, p3, p4, p5];
		return callHelper(callback => {
			f.apply(null, unwrap(names.length, buildArgs(args, names, err => callBack0(settings, err))));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call5_1 = (f, unwrapper, postProcess) => (settings, p1, p2, p3, p4, p5) => {
		unwrapper = unwrapper || unwrapNop;
		postProcess = postProcess || postProcessNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2, p3, p4, p5]), (err, result1) => callBack1(settings, err, postProcess(result1))));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call6_1 = (f, unwrapper, postProcess) => (settings, p1, p2, p3, p4, p5, p6) => {
		unwrapper = unwrapper || unwrapNop;
		postProcess = postProcess || postProcessNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2, p3, p4, p5, p6]), (err, result1) => callBack1(settings, err, postProcess(result1))));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call7_1 = (f, unwrapper, postProcess) => (settings, p1, p2, p3, p4, p5, p6, p7) => {
		unwrapper = unwrapper || unwrapNop;
		postProcess = postProcess || postProcessNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2, p3, p4, p5, p6, p7]), (err, result1) => callBack1(settings, err, postProcess(result1))));
			callback(E.Scheduler.succeed(null));
		});
	};
	const call7_2 = (f, unwrapper, postProcess1, postProcess2) => (settings, p1, p2, p3, p4, p5, p6, p7) => {
		unwrapper = unwrapper || unwrapNop;
		postProcess1 = postProcess1 || postProcessNop;
		postProcess2 = postProcess2 || postProcessNop;
		return callHelper(callback => {
			f.apply(null, append(unwrapper(0, [p1, p2, p3, p4, p5, p6, p7]), (err, result1, result2) => callBack2(settings, err, postProcess1(result1), postProcess2(result2))));
			callback(E.Scheduler.succeed(null));
		});
	};

	return {
		unwrap,
		call1_0,
		call1_1,
		call2_0,
		call2_1,
		call3_0,
		call3_1,
		call3_2,
		call4_0,
		call4_1,
		call4_2,
		call5_1,
		call5_0_opts,
		call6_1,
		call7_1,
		call7_2
	};
};

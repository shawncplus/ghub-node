var ghapi   = require('github').GitHubApi;
var github  = new ghapi();
var sprintf = require('sprintf').sprintf;
var sys     = require('sys'),
	puts    = sys.puts;

exports.commands = {
	issues : function (user, repo, arguments)
	{
		var state = false;
		arguments.some(function (arg) {
			// Tried passing a issue #
			if (!state && !isNaN(parseInt(arg, 10))) {
				puts("Issue details are not currently supported.");
				process.exit(0);
			}

			var states = {open:0, closed:0};
			if (arg in states) {
				if (!state) {
					state = arg;
				} else {
					puts ("Issue state of [" + state + "] already specified, ignoring [" + arg + "]");
					return true;
				}
			}
		});

		state = state || 'open';
		github.getIssueApi().getList(user, repo, state, function (throwaway, issues) {
			if (!issues || !issues.length) {
				puts("No " + state + " issues.");
				process.exit(0);
			}

			puts("Issues");
			puts(Array(80).join("="));
			issues.reverse().forEach(function (issue) {
				puts(sprintf("%-5s %s", (''+issue.number), issue.title));
			});
		});
	}
};



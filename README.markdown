Overview
===
Stupid port of my git-ghub command to node.js. Current only supports listing open and closed issues due to limitations of the 'github' library for node.js

Requirements
===
NodeJS

* optimist
* github
* sprintf

Installing
===
Symlink git-ghub in ~/bin/

    cd ~/bin/;ln -s <repo dir>/git-ghub

Usage
=====
Inside a git repo

    git ghub issues [open|closed]

That's it.

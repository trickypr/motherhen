# "New Mozilla Application" Template

If you want to use Mozilla's build system to create a new application, with compiled code and/or tests, you should start here.  This is a template for the absolute minimum code you need for starting a new application source tree in mozilla-central.

As such, you should expect to do a few string replacements.  Run create-application.py to create and configure your new project.

This project is very much a work in progress.  **DO NOT USE YET!!**

## Building

```bash
#!/bin/bash
# First, create a folder to house your application for development:
mkdir newapp-cleandir
cd newapp-cleandir

# Then clone the firefox source code, either via `git clone` or `hg clone`:
git clone --depth 1 https://github.com/mozilla/gecko-dev mozilla-central
# or
# hg clone https://hg.mozilla.org/mozilla-central/

# Clone this repository:
git clone https://github.com/ajvincent/motherhen gh-newapp

# Keep track of the location of `mozilla-central`:
echo $PWD/mozilla-central > gh-newapp/.moz-central

# Now, we need to add our app to the gecko source code:
pushd mozilla-central
# On linux add -r to each of the following commands
ln -s ../gh-newapp/source newapp
ln -s ../gh-newapp/newapp-sym.mozconfig .mozconfig
popd

# Apply custom patches:
cd gh-newapp
./patches.sh import
cd ..

# Configure and build your application:
cd mozilla-central
./mach configure
./mach build

#Then run it:
./mach run

# Generate a tarball or installer in your objdir's dist subdirectory
./mach package
```

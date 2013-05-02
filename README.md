kss-node-template
=================

This is a **template** for [kss-node](https://github.com/hughsk/kss-node) styleguide.
"kss-node" is a NodeJS implementation of [Knyle Style Sheets](https://github.com/kneath/kss) (KSS).
kss-node enables us to generate a beatiful styleguide for CSS, of course that suports LESS, SASS and Stylus.

You can see the example styleguide from the left navi.


Demo
----
**[Example Styleguide](http://htanjo.github.io/kss-node-template/)**

### Features
* For keeping compatible with your any CSS, optimize the document's style code.
* Make the side navi interactive. That also shows the child sections in the showing page.
* Improve the style of markdown content for readability.


Download
--------
**[kss-node-template](https://github.com/htanjo/kss-node-template/archive/master.zip)** [zip] or

```
git clone git://github.com/htanjo/kss-node-template.git
```

**Note:** This package contains only template files.
You have to install kss-node at first.


How to apply this template
--------------------------
1. Install kss-node. Type `npm install kss` or `npm install -g kss` for global CLI.
2. Download [kss-node-template](https://github.com/htanjo/kss-node-template/archive/master.zip) and copy the "template" folder into your working directory.
3. Run `kss-node` command with `--template` option, like below.

```
kss-node <sourcedir> --template path/to/template
```


License
-------
This template is under the [MIT License](https://github.com/htanjo/kss-node-template/blob/master/LICENSE).

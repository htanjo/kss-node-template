kss-node-template
=================

This is a **template** for [kss-node](https://github.com/kss-node/kss-node) styleguide.
"kss-node" is a NodeJS implementation of [Knyle Style Sheets](https://github.com/kneath/kss) (KSS).
kss-node enables us to generate a beatiful styleguide for CSS, of course that suports LESS, SASS and Stylus.

You can see the example styleguide from the left navi.
That is thanks to [Twitter Bootstrap](http://twitter.github.io/bootstrap/).


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


kss-node quickstart
===================

I introduce about kss-node briefly.

If you want to learn kss-node, please refer [kss-node project page](https://github.com/kss-node/kss-node).
And also the original [KSS specification](https://github.com/kneath/kss/blob/master/SPEC.md) may be helpful for writing your documentation.


Installation
------------
As kss-node is provided as a npm package, you can install by just typing `npm install kss`.
If you want to use the command line interface, install it globally.

```
npm install -g kss
```


Format
------
kss-node is almost compatible with KSS documentation.
But kss-node can depend on only comment in source code because it has `Markup:` directive for showing the sample markup.

Here is a basic format for kss-node documentation.

```css
/*
Buttons

A majority of buttons in the site are built from the same base class.

:hovered    - Highlight the button when hovered.
:disabled   - Make the button change appearance to reflect it being disabled.
.primary    - Indicate that the button is the primary feature of this form.

Markup:
<a href="#" class="button {{modifier_class}}">Link Button</a>
<button class="button {{modifier_class}}">Button Element</button>

Styleguide 1.1
*/
.button {
  ...
}
.button:hover {
  ...
}
.button:disabled {
  ...
}
.button.primary {
  ...
}
```

kss-node also supports CSS preprocessors such as LESS, SASS and Stylus.
You can use the `//` comment section for writing your document.

```less
// Buttons
//
// A majority of buttons in the site are built from the same base class.
//
// :hovered    - Highlight the button when hovered.
// :disabled   - Make the button change appearance to reflect it being disabled.
// .primary    - Indicate that the button is the primary feature of this form.
//
// Markup:
// <a href="#" class="button {{modifier_class}}">Link Button</a>
// <button class="button {{modifier_class}}">Button Element</button>
//
// Styleguide 1.1
.button {
  ...
  &:hover {
    ...
  }
  &:disabled {
    ...
  }
  .primary {
    ...
  }
}
```

As you see in the above samples, kss-node comment has some blocks.
From the top,

1. Element's title
2. Element's description
3. List of modifier classes or pseudo-classes
4. HTML markup
5. Reference to the element's position in the styleguide

And each description supports the Markdown writing.


More example code
-----------------
This document is also created by using kss-node.
You can see the source code in the [demo directory](https://github.com/htanjo/kss-node-template/tree/master/demo/src).


<a href="https://github.com/htanjo/kss-node-template"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>

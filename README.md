# Homepage

A neat and lean browser homepage with a search bar, links with shortcuts, and a list of bookmarks.

## Configuring shortcuts

Shortcuts can be triggered with **any individual** key (e.g: A,S,D,F,...), and are disabled when using the search bar.

There are two kinds of shortcuts: Those which take one key to trigger and those that take two.

The first kind can be enabled on any element by giving a value to the `data-action-key` attribute,
which makes it so the `click` event of the element is triggered when pressing said key.

The second kind requires setting the attribute `data-action-group` to an ancestor of the element you want to trigger,
and `data-action-group-key` to the element itself (again, both of this attributes must be a single key).
This makes it so when a `data-action-group` key is pressed all `data-action-key`s are disabled and only the
corresponding `data-action-group-key`s are enabled.

## Importing bookmarks

Obviously, a webpage can't actually read your bookmarks, so you need to export them to a `bookmarks.html` file inside this directory.

On Firefox at least, this can be done every time the browser is closed by changing some `about:config` parameters.
See [this page](https://support.mozilla.org/en-US/questions/928809#question-reply) for more info.

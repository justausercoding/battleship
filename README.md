# Project name
**✏️ TODO**:
- Update this README file
- Delete everything from here:

✂︎ - - - - - - - - - -


# Web template for webpack

## Steps

1. HTML: Create structure of website
2. CSS: (Use reset and add fonts) write CSS
3. JavaScript: write JS code

<br>

## Standards

### General
- nest as little as necessary
- use comments to organize the code


### CSS
- styling guide: https://github.com/airbnb/css
- DRY
- do not nest to deep (only logical sections)
- use multiple stylesheets (if necessary)
- use a CSS reset
- naming: 
    first-level: first letter upper case

### JS
- styling guide: https://github.com/airbnb/javascript

<br>

## Important

### package.json

The following was changed to prevent accidental publish:
- deleted: "main": "index.js"
- added: "private": true

<br>

## Deploy to Github Pages
(https://gist.github.com/cobyism/4730490)

1. Remove the `dist` directory from the project’s `.gitignore` file.

2. Make sure git knows about your subtree (the subfolder with your site).

    ```sh
    git add dist && git commit -m "Initial dist subtree commit"
    ```
3. Use subtree push to send it to the `gh-pages` branch on GitHub. (see 'package.json' for script)






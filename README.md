## To repro

- In root folder, `npm install && npm run bootstrap`
- In `packages/starter-a`, run `npm start`.

# Output
    ➜  starter-a npm start

    > @issue/starter-a@0.0.0 start /Users/xxx/git/gatsby-issue/packages/starter-a
    > npm run develop


    > @issue/starter-a@0.0.0 develop /Users/xxx/git/gatsby-issue/packages/starter-a
    > gatsby develop

    success open and validate gatsby-configs - 0.026s
    success load plugins - 0.082s
    success onPreInit - 0.003s
    info One or more of your plugins have changed since the last time you ran Gatsby. As
    a precaution, we're deleting your site's cache to ensure there's no stale data.
    success initialize cache - 0.021s
    success copy gatsby files - 0.072s
    success onPreBootstrap - 0.030s
    success createSchemaCustomization - 0.005s
    success source and transform nodes - 0.020s
    success building schema - 0.139s
    success createPages - 0.002s
    success createPagesStatefully - 0.047s
    success onPreExtractQueries - 0.002s
    success update schema - 0.024s
    success extract queries from components - 0.075s
    success write out requires - 0.004s
    success write out redirect data - 0.002s
    success onPostBootstrap - 0.002s
    ⠀
    info bootstrap finished - 3.847s
    ⠀
    success run queries - 0.026s - 1/1 39.08/s

    ERROR #98124  WEBPACK

    Generating SSR bundle failed

    Can't resolve '@emotion/core' in '/Users/xxx/git/gatsby-issue/packages/starter-a/.cache'

    If you're trying to use a package make sure that '@emotion/core' is installed. If you're trying to use a local file make sure that the path is correct.

    File: .cache/develop-static-entry.js


    ERROR #98124  WEBPACK

    Generating SSR bundle failed

    Can't resolve '@emotion/core' in '/Users/xxx/git/gatsby-issue/packages/starter-a/.cache'

    If you're trying to use a package make sure that '@emotion/core' is installed. If you're trying to use a local file make sure that the path is correct.

    File: .cache/default-html.js

    npm ERR! code ELIFECYCLE
    npm ERR! errno 1
    npm ERR! @issue/starter-a@0.0.0 develop: `gatsby develop`
    npm ERR! Exit status 1
    npm ERR! 
    npm ERR! Failed at the @issue/starter-a@0.0.0 develop script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     /Users/xxx/.npm/_logs/2020-05-20T23_51_44_341Z-debug.log
    npm ERR! code ELIFECYCLE
    npm ERR! errno 1
    npm ERR! @issue/starter-a@0.0.0 start: `npm run develop`
    npm ERR! Exit status 1
    npm ERR! 
    npm ERR! Failed at the @issue/starter-a@0.0.0 start script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     /Users/xxx/.npm/_logs/2020-05-20T23_51_44_371Z-debug.log

## Workaround
Currently, I'm installing these plugins into the starter, but it doesn't seem like I should need to?
We manually linked things :B

/**
 title is a string that will be set as a document title
 WrappedComponent is what our decorator will receive when
 put directly above a component class as seen in the example above
 */
import React from "react";
import {connect} from "react-redux";
import {SetTitleAC} from "../redux/titleReducer";

/** SetTitle redux wrapper */
let mapStateToProps = (state) =>
{
    return {
        /** Page title */
        title: state.document.title,
        /** Authorized user */
        user: state.profile.user
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        /** Set document title */
        setTitle: (title) => { dispatch( SetTitleAC(title) ) }
    }
}

/** SetTitle decorator */
export const setTitle = (getTitle) => (WrappedComponent) => {

    class SetTitleDecorator extends React.Component {

        constructor(props) {
            super(props);
            document.title = props.title
        }

        updateTitle = (props) => {
            const title = getTitle(props)
            if(title) {
                document.title = title
            }
        }

        componentDidMount() {
            this.updateTitle(this.props)
        }

        //componentWillReceiveProps(props) {
        //    this.updateTitle(props)
        //}

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(SetTitleDecorator)

}

/*
D:\practice\react\craco-tailwind-2>git push -u origin master
Enumerating objects: 34, done.
Counting objects: 100% (34/34), done.
Delta compression using up to 8 threads
Compressing objects: 100% (32/32), done.
Writing objects: 100% (34/34), 218.76 KiB | 8.75 MiB/s, done.
Total 34 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), done.
To https://github.com/officefish/craco-frontend.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

D:\practice\react\craco-tailwind-2>yarn
yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check.
Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check.
 Excluding it from installation.
Compiled successfully!
Compiled successfully!

You can now view craco-tailwind-2 in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.141:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

^CЗавершить выполнение пакетного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>yarn build:css
yarn run v1.22.5
$ postcss ./src/tailwind.css -o src/styles.css
"postcss" не является внутренней или внешней
командой, исполняемой программой или пакетным файлом.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this comm
and.

D:\practice\react\craco-tailwind-2>yarn build:css
yarn run v1.22.5
$ postcss ./src/tailwind.css -o src/styles.css
"postcss" не является внутренней или внешней
командой, исполняемой программой или пакетным файлом.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this comm
and.

D:\practice\react\craco-tailwind-2>yarn
yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check.
Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check.
 Excluding it from installation.
[3/4] Linking dependencies...
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@test
ing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has
unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >=
Compiled successfully!

You can now view craco-tailwind-2 in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.141:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

Завершить выполнение пакетного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>yarn build:css
yarn run v1.22.5
$ postcss ./src/tailwind.css -o src/styles.css
"postcss" не является внутренней или внешней
командой, исполняемой программой или пакетным файлом.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this comm
and.

D:\practice\react\craco-tailwind-2>yarn build:css
yarn run v1.22.5
Compiled successfully!

Failed to compile.

./src/styles/tailwind.css (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4
-1!./node_modules/postcss-loader/src??postcss!./src/styles/tailwind.css)
Error: PostCSS plugin autoprefixer requires PostCSS 8.
Migration guide for end-users:
https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users
^CЗавершить выполнение пакетного файла [Y(да)/N(нет)]?
Завершить выполнение пакетного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>npm cache clean --force
npm WARN using --force I sure hope you know what you are doing.

D:\practice\react\craco-tailwind-2>
D:\practice\react\craco-tailwind-2>yarn
yarn install v1.22.5
[1/4] Resolving packages...
Couldn't find any versions for "postcss" that matches "postcss@^7"
Compiled successfully!

You can now view craco-tailwind-2 in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.141:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

Завершить выполнение пакетного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>yarn add -D tailwind-styled-components
yarn add v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
warning Pattern ["postcss@postcss@^7"] is trying to unpack in the same destinati
on "C:\\Users\\RIK\\AppData\\Local\\Yarn\\Cache\\v6\\npm-postcss-7.0.36-056f8cff
a939662a8f5905950c07d5285644dfcb-integrity\\node_modules\\postcss" as pattern ["
postcss@^7.0.11","postcss@^7.0.18","postcss@^7.0.7"]. This could result in non-d
eterministic behavior, skipping.
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check.
Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check.
 Excluding it from installation.
[3/4] Linking dependencies...
warning " > @testing-library/user-event@13.2.1" has unmet peer dependency "@test
ing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has
unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >=
3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >=
 3.7.0-beta".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 23 new dependencies.
info Direct dependencies
└─ tailwind-styled-components@2.0.3
info All dependencies
├─ bl@4.1.0
├─ chardet@0.7.0
├─ cli-spinners@2.6.0
├─ cli-width@3.0.0
├─ clone@1.0.4
├─ clsx@1.1.1
├─ colors@1.4.0
├─ defaults@1.0.3
├─ external-editor@3.1.0
├─ figures@3.2.0
├─ inquirer@8.1.2
├─ is-interactive@1.0.0
├─ mute-stream@0.0.8
├─ ora@5.4.1
├─ os-tmpdir@1.0.2
├─ restore-cursor@3.1.0
├─ run-async@2.4.1
├─ rxjs@7.3.0
├─ tailwind-styled-components@2.0.3
├─ tailwindcss-classnames@2.2.3
Compiled with warnings.

src\App.js
  Line 1:8:  'logo' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

^CЗавершить выполнение пакетного файла [Y(да)/N(нет)]? Завершить выполнение паке
тного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>yarn add -D styled-components
yarn add v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check.
Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check.
 Excluding it from installation.
[3/4] Linking dependencies...
warning " > @testing-library/user-event@13.2.1" has unmet peer dependency "@test
ing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has
unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >=
3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >=
 3.7.0-beta".
warning " > styled-components@5.3.1" has unmet peer dependency "react-is@>= 16.8
.0".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 12 new dependencies.
info Direct dependencies
└─ styled-components@5.3.1
info All dependencies
├─ @emotion/is-prop-valid@0.8.8
├─ @emotion/memoize@0.7.4
├─ @emotion/stylis@0.8.5
├─ @emotion/unitless@0.7.5
├─ babel-plugin-styled-components@1.13.2
├─ babel-plugin-syntax-jsx@6.18.0
├─ camelize@1.0.0
├─ css-color-keywords@1.0.0
├─ css-to-react-native@3.0.0
Compiled with warnings.

src\App.js
  Line 1:8:   'logo' is defined but never used                    no-unused-vars

  Line 94:7:  'StyledButton2' is assigned a value but never used  no-unused-vars

  Line 99:7:  'StyledButton3' is assigned a value but never used  no-unused-vars


Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

^CЗавершить выполнение пакетного файла [Y(да)/N(нет)]? Завершить выполнение паке
тного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>git add -A
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in tailwind.config.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in yarn.lock.
The file will have its original line endings in your working directory

D:\practice\react\craco-tailwind-2>git commit -m "setup tailwind using theme"
[master f3ba752] setup tailwind using theme
 6 files changed, 434 insertions(+), 53 deletions(-)
 rewrite src/App.js (88%)
 create mode 100644 src/styles/theme.css

D:\practice\react\craco-tailwind-2>git push -u origin master
Enumerating objects: 18, done.
Counting objects: 100% (18/18), done.
Delta compression using up to 8 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 8.54 KiB | 672.00 KiB/s, done.
Total 10 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/officefish/craco-frontend.git
   d4f80b5..f3ba752  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

D:\practice\react\craco-tailwind-2>yarn
yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check.
Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check.
 Excluding it from installation.
[3/4] Linking dependencies...
warning " > @testing-library/user-event@13.2.1" has unmet peer dependency "@test
ing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has
unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >=
3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >=
 3.7.0-beta".
warning " > styled-components@5.3.1" has unmet peer dependency "react-is@>= 16.8
Failed to compile.

./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js
Error: [BABEL] D:\practice\react\craco-tailwind-2\node_modules\@pmmmwh\react-ref
resh-webpack-plugin\client\ReactRefreshEntry.js: .default is not a valid Plugin
property
    at Array.forEach (<anonymous>)
    at Generator.next (<anonymous>)
    at Generator.next (<anonymous>)



Note that the development build is not optimized.
To create a production build, use yarn build.

^CЗавершить выполнение пакетного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>yarn build:css
yarn run v1.22.5
$ postcss ./src/tailwind.css -o src/styles.css
"postcss" не является внутренней или внешней
командой, исполняемой программой или пакетным файлом.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this comm
and.

D:\practice\react\craco-tailwind-2>yarn build:css
yarn run v1.22.5
$ postcss ./src/tailwind.css -o src/styles.css
"postcss" не является внутренней или внешней
командой, исполняемой программой или пакетным файлом.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this comm
and.

D:\practice\react\craco-tailwind-2>yarn
yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check.
Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check.
 Excluding it from installation.
[3/4] Linking dependencies...
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@test
ing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has
unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >=
Compiled successfully!

You can now view craco-tailwind-2 in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.141:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

Завершить выполнение пакетного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>yarn build:css
yarn run v1.22.5
$ postcss ./src/tailwind.css -o src/styles.css
"postcss" не является внутренней или внешней
командой, исполняемой программой или пакетным файлом.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this comm
and.

D:\practice\react\craco-tailwind-2>yarn build:css
yarn run v1.22.5
Compiled successfully!

Failed to compile.

./src/styles/tailwind.css (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4
-1!./node_modules/postcss-loader/src??postcss!./src/styles/tailwind.css)
Error: PostCSS plugin autoprefixer requires PostCSS 8.
Migration guide for end-users:
https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users
^CЗавершить выполнение пакетного файла [Y(да)/N(нет)]?
Завершить выполнение пакетного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>npm cache clean --force
npm WARN using --force I sure hope you know what you are doing.

D:\practice\react\craco-tailwind-2>
D:\practice\react\craco-tailwind-2>yarn
yarn install v1.22.5
[1/4] Resolving packages...
Couldn't find any versions for "postcss" that matches "postcss@^7"
Compiled successfully!

You can now view craco-tailwind-2 in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.141:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

Завершить выполнение пакетного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>yarn add -D tailwind-styled-components
yarn add v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
warning Pattern ["postcss@postcss@^7"] is trying to unpack in the same destinati
on "C:\\Users\\RIK\\AppData\\Local\\Yarn\\Cache\\v6\\npm-postcss-7.0.36-056f8cff
a939662a8f5905950c07d5285644dfcb-integrity\\node_modules\\postcss" as pattern ["
postcss@^7.0.11","postcss@^7.0.18","postcss@^7.0.7"]. This could result in non-d
eterministic behavior, skipping.
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check.
Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check.
 Excluding it from installation.
[3/4] Linking dependencies...
warning " > @testing-library/user-event@13.2.1" has unmet peer dependency "@test
ing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has
unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >=
3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >=
 3.7.0-beta".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 23 new dependencies.
info Direct dependencies
└─ tailwind-styled-components@2.0.3
info All dependencies
├─ bl@4.1.0
├─ chardet@0.7.0
├─ cli-spinners@2.6.0
├─ cli-width@3.0.0
├─ clone@1.0.4
├─ clsx@1.1.1
├─ colors@1.4.0
├─ defaults@1.0.3
├─ external-editor@3.1.0
├─ figures@3.2.0
├─ inquirer@8.1.2
├─ is-interactive@1.0.0
├─ mute-stream@0.0.8
├─ ora@5.4.1
├─ os-tmpdir@1.0.2
├─ restore-cursor@3.1.0
├─ run-async@2.4.1
├─ rxjs@7.3.0
├─ tailwind-styled-components@2.0.3
├─ tailwindcss-classnames@2.2.3
Compiled with warnings.

src\App.js
  Line 1:8:  'logo' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

^CЗавершить выполнение пакетного файла [Y(да)/N(нет)]? Завершить выполнение паке
тного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>yarn add -D styled-components
yarn add v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check.
Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check.
 Excluding it from installation.
[3/4] Linking dependencies...
warning " > @testing-library/user-event@13.2.1" has unmet peer dependency "@test
ing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has
unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >=
3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >=
 3.7.0-beta".
warning " > styled-components@5.3.1" has unmet peer dependency "react-is@>= 16.8
.0".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 12 new dependencies.
info Direct dependencies
└─ styled-components@5.3.1
info All dependencies
├─ @emotion/is-prop-valid@0.8.8
├─ @emotion/memoize@0.7.4
├─ @emotion/stylis@0.8.5
├─ @emotion/unitless@0.7.5
├─ babel-plugin-styled-components@1.13.2
├─ babel-plugin-syntax-jsx@6.18.0
├─ camelize@1.0.0
├─ css-color-keywords@1.0.0
├─ css-to-react-native@3.0.0
Compiled with warnings.

src\App.js
  Line 1:8:   'logo' is defined but never used                    no-unused-vars

  Line 94:7:  'StyledButton2' is assigned a value but never used  no-unused-vars

  Line 99:7:  'StyledButton3' is assigned a value but never used  no-unused-vars


Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

^CЗавершить выполнение пакетного файла [Y(да)/N(нет)]? Завершить выполнение паке
тного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>git add -A
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in tailwind.config.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in yarn.lock.
The file will have its original line endings in your working directory

D:\practice\react\craco-tailwind-2>git commit -m "setup tailwind using theme"
[master f3ba752] setup tailwind using theme
 6 files changed, 434 insertions(+), 53 deletions(-)
 rewrite src/App.js (88%)
 create mode 100644 src/styles/theme.css

D:\practice\react\craco-tailwind-2>git push -u origin master
Enumerating objects: 18, done.
Counting objects: 100% (18/18), done.
Delta compression using up to 8 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 8.54 KiB | 672.00 KiB/s, done.
Total 10 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/officefish/craco-frontend.git
   d4f80b5..f3ba752  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

D:\practice\react\craco-tailwind-2>yarn
yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check.
Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check.
 Excluding it from installation.
[3/4] Linking dependencies...
warning " > @testing-library/user-event@13.2.1" has unmet peer dependency "@test
ing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has
unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >=
3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >=
 3.7.0-beta".
warning " > styled-components@5.3.1" has unmet peer dependency "react-is@>= 16.8
Failed to compile.

./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js
Error: [BABEL] D:\practice\react\craco-tailwind-2\node_modules\@pmmmwh\react-ref
resh-webpack-plugin\client\ReactRefreshEntry.js: .default is not a valid Plugin
property
    at Array.forEach (<anonymous>)
    at Generator.next (<anonymous>)
    at Generator.next (<anonymous>)
^CЗавершить выполнение пакетного файла [Y(да)/N(нет)]? y

D:\practice\react\craco-tailwind-2>yarn
yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check.
Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check.
 Excluding it from installation.
[3/4] Linking dependencies...
warning " > @testing-library/user-event@13.2.1" has unmet peer dependency "@test
ing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has
unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >=
3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >=
 3.7.0-beta".
warning " > styled-components@5.3.1" has unmet peer dependency "react-is@>= 16.8
Failed to compile.

./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js
Error: [BABEL] D:\practice\react\craco-tailwind-2\node_modules\@pmmmwh\react-ref
resh-webpack-plugin\client\ReactRefreshEntry.js: The decorators plugin requires
a 'decoratorsBeforeExport' option, whose value must be a boolean. If you want to
 use the legacy decorators semantics, you can set the 'legacy: true' option. (Wh
ile processing: "base$1")
    at Generator.next (<anonymous>)
    at Generator.next (<anonymous>)


 */
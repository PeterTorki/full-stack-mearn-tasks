.angular:

- Contains Angular CLI configuration files and cache data to speed up builds.
- Can be deleted if needed; Angular CLI will recreate it.

---

.vscode:

- Contains Visual Studio Code workspace settings.
- Can include settings for formatting, linting, and extensions specific to the project.

---

node_modules:

- 3rd party libraries, dependencies, and packages.

---

package.json:

- Standard configuration file containing:

- name
- version
- scripts to run commands
- dependencies: all libraries the Angular project needs
- devDependencies: libraries needed only during development

---

.editorconfig:
Team environment config file to unify editor settings for everyone.

- Developers usually don’t modify this file.
- Only the team lead is responsible for editing it.

---

angular.json:
Core configuration for Angular CLI projects. Contains project settings like build options, file paths, environment configs, and Angular-specific configurations for building and serving your project.

- version: Version of the Angular workspace config format.
- newProjectRoot: `"projects"` means new projects are created inside the `projects` folder by default.
- projects: Contains all projects in the workspace.

- first-angular (project name):

  - projectType: `"application"` means it’s an app (not a library).

  - root: Project’s base folder (`""` means workspace root).

  - sourceRoot: Folder with source files (`src`).

  - prefix: Prefix for generated selectors (e.g., `app`).

  - architect: Defines build, serve, and test configurations.

    - build:

      - builder: Tool to build the app.
      - options:

        - browser: Main entry file (`src/main.ts`).
        - tsConfig: TypeScript config file (`tsconfig.app.json`).
        - assets: Static files to include (e.g., `public` folder).
        - styles: Global stylesheets (`src/styles.css`).

      - configurations:

        - production: Optimized production build settings.
        - development: Development build settings with source maps.

      - defaultConfiguration: Default build mode (`production`).

    - serve:

      - builder: Tool to serve the app locally.
      - configurations: Links serve modes to build configurations (`development`, `production`).
      - defaultConfiguration: Default serve mode (`development`).

    - test:
      - builder: Tool to run tests (Karma).
      - options: Test-specific settings like polyfills and assets.

---

tsconfig.app.json:

- Controls compiler options like target JavaScript version, module system, and Angular-specific settings.
- Specifies which files and folders to include or exclude in the app build (usually the src folder).
- Helps Angular CLI know how to transpile your TypeScript code into JavaScript for the app.
- "outDir": "./out-tsc/app" means compiled files go to `out-tsc/app`.

tsconfig.json:

- The base TypeScript configuration file for the entire Angular workspace or project.
- Helps maintain consistent TypeScript compilation rules across the project.
- Specifies compiler options like target JavaScript version, module system, and strictness settings.

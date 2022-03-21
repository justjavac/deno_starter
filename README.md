# deno_starter

Quickly start a Deno module.

## 🧐 What's inside?

A quick look at the files and directories you'll see in a Deno project.

    .
    ├─ .github
    │   └─ workflows
    │       └─ ci.yml
    ├─ .gitattributes
    ├─ .gitignore
    ├─ CHANGELOG.md
    ├─ LICENSE
    ├─ mod_test.ts
    ├─ mod.ts
    └─ README.md

1. **`.github\workflows\ci.yml`**: GitHub Actions.

2. **`.gitattributes`**: This file is a simple text file that gives `attributes`
   to pathnames.

3. **`.gitignore`**: This file tells git which files it should not track / not
   maintain a version history for.

4. **`CHANGELOG.md`**: This file contains a curated, chronologically ordered
   list of notable changes for each version of a project. The format is based on
   [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
   adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

5. **`LICENSE`**: Deno is licensed under the MIT license.

6. **`mod.ts`**: Deno's default entry point. The filename mod.ts follows Rust’s
   convention, is shorter than index.ts, and doesn’t come with any preconceived
   notions about how it might work. Deno does not treat "index.js" or "index.ts"
   in a special way. By using these filenames, it suggests that they can be left
   out of the module specifier when they cannot. This is confusing.

7. **`mod_test.ts`**: Each module should come with its test as a sibling with
   the name `modulename_test.ts`. For example the module `foo.ts` should come
   with its sibling `foo_test.ts`.

8. **`README.md`**: A text file containing useful reference information about
   your project.

## License

[deno_starter](https://github.com/justjavac/deno_starter) is released under the
MIT License. See the bundled [LICENSE](./LICENSE) file for details.

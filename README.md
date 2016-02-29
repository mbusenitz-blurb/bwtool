# bwtool
BookWright Tool   

#### objective 
generate, build and run xcode or visual studio projects from BookWright.pro

#### dependencies 
requires nodejs and npm

#### install
```
git clone https://github.com/mbusenitz-blurb/bwtool.git
npm install -g bwtool/
```

#### configure qmake path
required only once on install    
`bwt -q ~/Qt5.5.1/5.5/clang_64/bin/qmake`

#### usage
`bwt` must be run from directory containing `BookWright.pro`
```
  Usage: bwt [options]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -t, --test          build and run test
    -r, --release       build release
    -o, --open          open IDE
    -q, --qmake [path]  configure qmake path
```
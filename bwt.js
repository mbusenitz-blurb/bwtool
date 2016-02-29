#!/usr/bin/env node

var program = require( 'commander' )
  , prep = require( './prep' )
  , generate = require( './generate' )
  , compile = require( './compile' )
  , post = require( './post' )
  , configure = require( './configure' );

program
  .version( '0.0.0' )
  .option( '-d, --debug', 'build debug (default)' )
  .option( '-t, --test', 'build and run test' )
  .option( '-r, --release', 'build release' )
  .option( '-o, --open', 'open IDE' )
  .option( '-q, --qmake [path]', 'configure qmake path' )
  .parse( process.argv );

configure( program )
.then( prep )
.then( generate )
.then( compile )
.then( post )
.catch( function(error) {
  console.log( error ); 
});


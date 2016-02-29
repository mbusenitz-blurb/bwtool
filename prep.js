var assert = require( 'assert' )
  , fs = require( 'fs.extra' )
  , spawn = require( './spawn' )
  , path = require( 'path' );

module.exports = function(options) {
    
  assert( options.hasOwnProperty( 'buildDir' ) ); 

  return new Promise( function( resolve ) {
    fs.mkdirp( options.buildDir, function(err) {
      process.chdir( options.buildDir );
      resolve(options); 
    });
  });
}
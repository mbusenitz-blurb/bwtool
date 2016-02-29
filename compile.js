var spawn = require( './spawn' )
  , assert = require( 'assert' ); 

module.exports = function(options) {
    
  assert( options.hasOwnProperty( 'projectName' ) );

  return new Promise( function( resolve, reject ) {
    
    var child;

    if (options.win) {
        child = spawn( 'msbuild', [options.projectName, '/m' ] );
    }
    else {
        child = spawn( 'xcodebuild', [ '-project', options.projectName ] );
    }
    
    child.then( function() {
        resolve( options ); 
    });
  } );
}

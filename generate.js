var assert = require( 'assert' )
  , spawn = require( './spawn' );

module.exports = function(options) {
    
  assert( options.hasOwnProperty( 'win' ) );
  assert( options.hasOwnProperty( 'projectPath' ) ); 
  assert( options.hasOwnProperty( 'qMakePath' ) ); 

  return new Promise( function( resolve, reject ) {

    var args = [ options.projectPath, 'CONFIG+=allow_warnings', '-spec' ];
        
    if (options.win) {
        args = args.concat( [ 'win32-msvc2013', '-tp', 'vc' ] );
    }
    else {
        args.push( 'macx-xcode' );
    }

    if (options.release) {
        args.push( 'CONFIG+=release' );
    }
    else {
        args.push( 'CONFIG+=debug' );
        if (options.test) {
            args.push( 'CONFIG+=testmake' );
        }
    }

    spawn( options.qMakePath, args )
    .then( function() {
      resolve(options); 
    }); 
  });
}
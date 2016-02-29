var util = require( 'util' )
  , cp = require( 'child_process' ); 

module.exports = function( cmd, args ) {
  return new Promise( function( resolve, reject ) {
    console.log( cmd, util.inspect( args ) );   

    cp.spawn( 
      cmd
    , (typeof(args) === 'undefined' ? [] : args)
    , { stdio: 'inherit' } )
    .on( 'exit', function(code) {
      if (code) {
        reject();
      }
      else {
        resolve();
      }
    })
    .on( 'error', function(error) {
      console.log( error ); 
    });
  });
};

var spawn = require( './spawn' )
  , cp = require( 'child_process' );

module.exports = function(options) {
  if (options.open) {
      if (options.win) {
        return new Promise( function(reslove, reject) {
          cp.exec( 'start ' + options.projectName ); 
          resolve(); 
        });
      }
      else {
        return spawn( '/Applications/Xcode.app/Contents/MacOS/Xcode', [ options.projectName] );
      }
  }
  else if (options.test) {
    if (options.win) {
      return spawn( 'debug\\TestBookWright.exe' ); 
    }
    else {
      return spawn( 'Debug/TestBookWright.app/Contents/MacOS/TestBookWright' );
    }  
  }
};
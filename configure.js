var fs = require( 'fs' )
  , path = require( 'path' )
  , os = require( 'os' )
  , pathConfig = path.join( __dirname, './config.json' );

module.exports = function(options) {  
  return new Promise(function(resolve) {

    options.projectPath = process.cwd();
    options.buildDir = path.join( options.projectPath, "tmp" );
    options.win = os.platform().match( 'win32' ) ? true : false;    
    options.projectName = options.test ? 'TestBookWright' : 'BookWright';
    options.projectName += options.win ? '.vcxproj' : '.xcodeproj';

    if (options.qmake) {
      options.qMakePath = options.qmake;
      resolve( options );
    
      fs.writeFile( pathConfig, JSON.stringify( { 'qMakePath': options.qMakePath } ) );
    }
    else {
      fs.readFile( pathConfig, function(err, data) {
        if (err) throwErr();

        var json = JSON.parse( data.toString() );

        console.log( json );
        options.qMakePath = json.qMakePath;
        
        if (!options.hasOwnProperty('qMakePath')) {
          throwErr();
        }
        resolve( options );
      
        function throwErr() {
          throw "qmake path is undefined";
        }

      }); 
    }
  });
};


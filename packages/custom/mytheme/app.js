'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Mytheme = new Module('mytheme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Mytheme.register(function(app, auth, database) {

  app.set('views',__dirname+'/server/views');

  //We enable routing. By default the Package Object is passed to the routes
  Mytheme.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Mytheme.menus.add({
    title: 'mytheme example page',
    link: 'mytheme example page',
    roles: ['authenticated'],
    menu: 'main'
  });


  Mytheme.aggregateAsset('css','mytheme.css')

  // // Custom Styles
 // Mytheme.aggregateAsset('css', 'packages/custom/mytheme/public/assets/lib/general/css/sytle.css');
//    Mytheme.aggregateAsset('css', 'packages/custom/mytheme/public/assets/lib/general/css/style-responsive.css');


  
  // // Core CSS 
  // Mytheme.aggregateAsset('css', '../lib/general/bs3/css/bootstrap.css');
  // Mytheme.aggregateAsset('css', '../lib/general/css/bootstrap-reset.css');
  // Mytheme.aggregateAsset('css', '../lib/general/font-awesome/css/font-awesome.css');
  
  // // JS 
  // //Mytheme.aggregateAsset('css', 'js/jquery.js');

  // Mytheme.aggregateAsset('js','../lib/jquery.js');
  // Mytheme.aggregateAsset('js', '../lib/bs3/js/bootstrap.min.js');

  //console.log(Mytheme);
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Mytheme.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Mytheme.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Mytheme.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Mytheme;
});

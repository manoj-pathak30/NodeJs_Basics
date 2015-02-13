/**
 * Created with JetBrains WebStorm.
 * User: manojp
 * Date: 1/27/15
 * Time: 2:53 PM
 * To change this template use File | Settings | File Templates.
 */

var PREFIX ="===>";

var anotherFun = function(){

}

exports.log = function(msg){
    console.log(PREFIX+" "+msg)
};

exports.debug=function(msg){
    console.log(PREFIX+" [debug] "+msg);
};


/**
 * Created with JetBrains WebStorm.
 * User: manojp
 * Date: 1/27/15
 * Time: 2:51 PM
 * To change this template use File | Settings | File Templates.
 */

var logger = require("./logger");
var factory = require("./decorator");

var decorator = factory();

logger.log("Log Message");
logger.debug("Debug Message");

decorator.decorate("Debug Message");
console.log("Hello World");
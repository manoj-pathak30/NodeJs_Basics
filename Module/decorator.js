module.exports=function(){

var PREFIX = "#################";

this.decorate= function(msg){
	console.log(PREFIX);
	console.log(msg);
	console.log(PREFIX);
	}
	return this;
}
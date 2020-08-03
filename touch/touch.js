const VERSION = "0.0.1";
const fs = require('fs');

module.exports = async function(args){
	var MakeFile = true;
	if(args.includes('--help') || args.includes('--version')){
		MakeFile = false;
	}
	for(let argIndex in args){
		let arg = args[argIndex];
		if(arg === '--help') {
			console.log('This is a cut down version of the touch command.\nAs of right now, it can only create empty files.');
			process.exit();
		}
		if(arg === '--version'){
			console.log(VERSION);
			process.exit();
		}
		if(MakeFile){
			await fs.writeFileSync(arg,'');
		}
	}
}
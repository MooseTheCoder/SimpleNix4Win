const VERSION = "0.0.1";
const fs = require('fs');
const AllowedArgs = {
	// Show Ends
	'-E':{func:'ShowEnds'},
	'--show-ends':{func:'ShowEnds'},
	// Number lines
	'-n':{func:'NumberLines'},
	'--number':{func:'NumberLines'}
};
const CommandDesc = {
	'SimpleNix4Win - Cat':'A cut down version of of the unix cat command, built for windows',
	'-E, --show-ends':'\n\tdisplay $ at end of each line',
	'-n, --number':'\n\tnumber all output lines',
}
const StringSplitRegex = /\r\n|\r|\n/;
const ArgFunctions = {
	'ShowEnds':async (str)=>{
		return new Promise(async resolve => {
			str = str.split(StringSplitRegex);
			let l = str.length;
			while(l--){
				str[l] = str[l]+'$';
			}
			str = str.join('\r\n');
			resolve(str);
		});
	},
	'NumberLines':async (str)=>{
		return new Promise(async resolve => {
			str = str.split(StringSplitRegex);
			let l = str.length;
			while(l--){
				str[l] = (l + 1)+':'+str[l];
			}
			str = str.join('\r\n');
			resolve(str);
		})
	}
}
module.exports = async function(UserArgs){
	// Check the the passed args with allowed args
	let FileContents = '';
	let Ammendments = [];
	for(let argIndex in UserArgs){
		let arg = UserArgs[argIndex];
		if(arg === "--help"){
			for(var HelpIndex in CommandDesc){
				console.log(HelpIndex+' '+CommandDesc[HelpIndex]);
			}
			process.exit();
		}
		if(arg === "--version"){
			console.log(VERSION);
			process.exit();
		}
		if(AllowedArgs[arg]){
			// This is a valid argument
			if(!Ammendments.includes(ArgFunctions[AllowedArgs[arg].func])){
				// Only add it to ammendments list once.
				Ammendments.push(ArgFunctions[AllowedArgs[arg].func]);
			}
		}else{
			// This is not an arg, is it a file?
			let isFile = await fs.existsSync(arg);
			// TODO : Fail on permissions
			if(isFile){
				// Yes
				FileContents+=await fs.readFileSync(arg).toString();
			}else{
				// No
				console.log('File "'+arg+'" not found.');
				process.exit(1);
			}
		}
	}
	// Run all ammendments
	for(let AmmendmentIndex in Ammendments){
		var Ammendment = Ammendments[AmmendmentIndex];
		FileContents = await Ammendment(FileContents);
	}
	console.log(FileContents);
}
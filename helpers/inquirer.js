const inquirer = require("inquirer");
const colors = require('colors/safe');

const inquirerMenu = async () =>{
	const questions = [
		{
			type:"list",
			name:"opt",
			message:"What do you want to do?",
			choices:[
				{value:1,name:`${colors.yellow("1.")} Search city`},
				{value:2,name:`${colors.yellow("2.")} History`},
				{value:0,name:`${colors.yellow("3.")} Exit`}
			]
		}
	]
	console.clear();
	console.log(colors.green("======================"))
	console.log(colors.green("   Select an option   "))
	console.log(colors.green("======================\n"))

	const {opt} = await inquirer.prompt(questions)
	return opt
}

const pausa = async () => {
	
	const questions = [
		{
			type:"input",
			name:"enter",
			message:`Press ${colors.green("ENTER")} to continue`
		}
	]

	console.log("\n")

	await inquirer.prompt(questions)	
}

const readInput = async (message) => {

	const questions = [
		{
			type:"input",
			name:"desc",
			message,
			validate(value){
				if (value.length===0) {
					return "Please tell me the city's name"
				}else return true
			}
		}
	]

	const {desc} = await inquirer.prompt(questions)
	
	return desc
}

const selectCity = async (arr) => {

	const choices = [];
		const cancel = {
			value:0,
			name:`${colors.yellow("0.")} Cancel`
		}
		choices.push(cancel)
	
	arr.forEach((city,i)=>{
		const value = city.id
		const name = city.name
		const num = colors.yellow(`${i+1}.`)

		choices.push({
			value,
			name:`${num} ${name}`
		})

	})
	
	const questions = [
		{
			type:"list",
			name:"id",
			message:"What city?",
			choices
		}
	]
	
	const {id} = await inquirer.prompt(questions)
	
	return id
}

module.exports = {
	inquirerMenu,
	pausa,
	readInput,
	selectCity
}
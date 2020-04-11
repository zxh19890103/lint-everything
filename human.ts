import { Earth } from "./modules/Earth"

class Human {
	name = "Singhi"
	age = 32

	say(words: string) {
		console.log(words)
	}
}

const hu = new Human()

hu.say("i am " + hu.name)

const earth = new Earth()

export { earth, hu }

const User = require("../models/user-model");
const Hospital = require("../models/hospital-model"); 

const home = async (req, res) => {
	try {
		res.status(200).send("Welcome to home page");
	} catch (error) {
		res.status(500).json("internal server error");
	}
};

const register = async (req, res) => {
	try {
		console.log(req.body);
		const { email, password } = req.body;

		const userExist = await User.findOne({ email });

		if (userExist) {
			return res.status(400).json({ msg: "email already exists" });
		}
		const userCreated = await User.create({ email, password });
		res.status(200).json({ msg: userCreated });
	} catch (error) {
		res.status(500).json("internal server error");
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const userExist = await User.findOne({ email });
		console.log(userExist);

		if (!userExist) {
			return res.status(400).json({ message: "Invalid Credentials" });
		}

		if (password === userExist.password) {
			res.status(200).json({ msg: "Login Success" });
		} else {
			res.status(401).json({ message: "Invalid email or password" });
		}
	} catch (error) {
		res.status(500).json("internal server error");
	}
};

const hospitalReg = async (req, res) => {
	try {
		const {hospitalName, address, phoneNumber, doctorsCount, doctors } = req.body;
		const hospitalExist = await Hospital.findOne({ hospitalName });
		console.log(hospitalExist);

		if (!hospitalExist) {
			const hospitalCreated = await Hospital.create({hospitalName, address, phoneNumber, doctorsCount, doctors});
			res.status(200).json({ msg: hospitalCreated });
		}	
		else{
			return res.status(400).json({ message: "Hospital already registered" });
		}
		
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json("internal server error");
	}
};

const hospitalDetails = async (req, res) => {
	try {
		const {hospitalName}  = req.body;
		const hospitalExist = await Hospital.findOne({ hospitalName });

		if (hospitalExist) {
			res.status(200).json({hosp: hospitalExist});
		}	
		else{
			return res.status(400).json({ message: "Hospital not exist" });
		}
		
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json("internal server error");
	}
};

module.exports = { home, register, login, hospitalReg, hospitalDetails };

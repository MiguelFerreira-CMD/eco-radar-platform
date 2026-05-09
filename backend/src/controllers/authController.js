const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const register = async (req, res) => {

    try {

        const { name, password } = req.body;
        const email = req.body.email.toLowerCase().trim();

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "Email já cadastrado"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: "Usuário criado com sucesso"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};

const login = async (req, res) => {

    try {

        const { password } = req.body;
        const email = req.body.email.toLowerCase().trim();

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Usuário não encontrado"
            });
        }

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({
                message: "Senha inválida"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};


module.exports = {
    register,
    login
};
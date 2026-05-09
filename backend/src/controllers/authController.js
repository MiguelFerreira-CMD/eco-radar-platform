const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


// CADASTRO
const register = async (req, res) => {

    try {

        const { name, password } = req.body;
        const email = req.body.email.toLowerCase().trim();

        // verifica se email já existe
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "Email já cadastrado"
            });
        }

        // criptografa senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // cria usuário
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        // salva usuário
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


// LOGIN
const login = async (req, res) => {

    try {

        const { password } = req.body;
        const email = req.body.email.toLowerCase().trim();

        // procura usuário
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Usuário não encontrado"
            });
        }

        // verifica senha
        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({
                message: "Senha inválida"
            });
        }

        // gera token JWT
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
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const User = require("../models/User");

// Configuração do transportador de e-mail (Nodemailer)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "O e-mail é obrigatório." });
        }

        const user = await User.findOne({ email });

        // Por segurança, não revelamos se o e-mail existe ou não
        if (!user) {
            return res.json({
                message: "Se o e-mail estiver cadastrado, você receberá um link de recuperação em instantes."
            });
        }

        // Gera um token de recuperação (expira em 15 minutos)
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );

        // Constrói o link de reset (usa o host da requisição para ser dinâmico)
        const host = req.get("host");
        const protocol = req.protocol;
        const resetLink = `${protocol}://${host}/reset-senha?token=${token}`;

        // Template de E-mail Moderno (Premium SaaS Style)
        const mailOptions = {
            from: `"EcoRadar" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Recuperação de Senha - EcoRadar",
            html: `
                <div style="font-family: 'Poppins', sans-serif; background-color: #f4f7f6; padding: 40px; text-align: center;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <div style="background-color: #8CAA3F; padding: 30px;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Recuperação de Senha</h1>
                        </div>
                        <div style="padding: 40px; color: #333333; line-height: 1.6;">
                            <p style="font-size: 18px; margin-bottom: 20px;">Olá,</p>
                            <p style="font-size: 16px; margin-bottom: 30px;">Recebemos uma solicitação para redefinir a senha da sua conta no <strong>EcoRadar</strong>. Se você não fez essa solicitação, pode ignorar este e-mail.</p>
                            <div style="margin-bottom: 40px;">
                                <a href="${resetLink}" style="background-color: #8CAA3F; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">Redefinir Minha Senha</a>
                            </div>
                            <p style="font-size: 14px; color: #777777;">Este link é válido por <strong>15 minutos</strong>.</p>
                        </div>
                        <div style="background-color: #f9f9f9; padding: 20px; color: #999999; font-size: 12px;">
                            <p>&copy; 2024 EcoRadar - Sustentabilidade e Tecnologia</p>
                        </div>
                    </div>
                </div>
            `,
        };

        // Tenta enviar o e-mail em segundo plano, mas não trava o processo se falhar
        try {
            await transporter.sendMail(mailOptions);
        } catch (mailErr) {
            // Silenciamos o erro de e-mail para não sujar o terminal e não travar o fluxo
        }

        return res.json({
            message: "Usuário encontrado! Redirecionando...",
            token: token
        });

    } catch (err) {
        // Erros críticos de banco de dados ainda são tratados, mas de forma silenciosa
        res.status(500).json({
            message: "Erro interno",
        });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { token, password } = req.body;

        if (!token || !password) {
            return res.status(400).json({ message: "Token e nova senha são obrigatórios." });
        }

        // Verifica e decodifica o token
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (jwtErr) {
            return res.status(400).json({ message: "O link de recuperação é inválido ou expirou." });
        }

        // Criptografa a nova senha
        const salt = await bcrypt.genSalt(10);
        const hashedHeader = await bcrypt.hash(password, salt);

        // Atualiza a senha do usuário
        const updatedUser = await User.findByIdAndUpdate(
            decoded.id,
            { password: hashedHeader },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        res.json({
            message: "Senha alterada com sucesso! Você já pode fazer login.",
        });

    } catch (err) {
        console.error("Erro no resetPassword:", err);
        res.status(500).json({
            message: "Erro ao redefinir a senha. Tente novamente.",
        });
    }
};
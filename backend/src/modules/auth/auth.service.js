// FILE: src/modules/auth/auth.service.js

import 'dotenv/config';
import bcrypt from 'bcrypt';

// import { userRepo } from '../users/user.repo.js';
import { sanitizeUser } from '../user/user.sanitizer.js';
// import { generateAccessToken } from './auth.tokens.js';
import { AppError } from '../../core/app-error.js';
import { userRepository } from '../user/user.repository.js';

const SALT_ROUNDS = 10;

export const AuthService = {

    // getUserFromToken(payload) {
    //     const { iat, exp, ...user } = payload;
    //     return user;
    // },

    async register(data) {
        const existingUser = await userRepository.findByEmail(data.email);
        
        if (existingUser) {
            throw new AppError('Email already registered', 409);
        }

        const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

        const newUser = await userRepository.create({
            ...data,
            password: hashedPassword,
            isVerified: true
        });

        return sanitizeUser(newUser);
    },

    // async login({ email, password }) {
    //     const user = await userRepo.findByEmail(email);
    //     if (!user) {
    //         throw new AppError('User not found', 404);
    //     }

    //     const isValidPassword = await bcrypt.compare(
    //         password,
    //         user.password
    //     );

    //     if (!isValidPassword) {
    //         throw new AppError('Invalid credentials', 401);
    //     }

    //     const token = generateAccessToken({
    //         id: user._id,
    //         name: user.name,
    //         role: user.role,
    //         email: user.email,
    //     });

    //     return { accessToken: token };
    // },
};

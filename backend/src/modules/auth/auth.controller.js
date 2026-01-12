import { sendResponse } from '../../core/send-response.js';
import { AuthService } from './auth.service.js';

export const authController = {
    // getProfile(req, res, next) {
    //     try {
    //         const user = AuthService.getUserDetails(req.user);

    //         sendResponse({
    //             res,
    //             statusCode: 200,
    //             success: true,
    //             message: 'User profile fetched successfully',
    //             data: user,
    //         });
    //     } catch (error) {
    //         next(error);
    //     }
    // },

    async registerUser(req, res, next) {
        try {
            const user = await AuthService.register(req.body);

            sendResponse({
                res,
                statusCode: 201,
                success: true,
                message: 'Sign up successful',
                data: user,
            });
        } catch (error) {
            next(error);
        }
    },

    async signIn(req, res, next) {
        try {
            const data = await AuthService.login(req.body);

            sendResponse({
                res,
                statusCode: 200,
                success: true,
                message: 'Sign in successful',
                data,
            });
        } catch (error) {
            next(error);
        }
    },
};

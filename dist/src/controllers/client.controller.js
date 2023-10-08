import * as clientService from '../services/client.service.js';
import { handleError } from '../middlewares/error/middleware.js';
export const enternewPassword = async (req, res, next) => {
    try {
        const data = await clientService.enternewPassword(req.body.email, req.body.password);
        res.status(200).json({ status: 'success', message: 'Account Password Changed', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const resetPassword = async (req, res, next) => {
    try {
        const data = await clientService.resetPassword(req.body.email);
        res.status(200).json({ status: 'success', message: 'Account Password Updated', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const verifyAccount = async (req, res, next) => {
    try {
        const data = await clientService.verifyAccount(req.body.email);
        res.status(200).json({ status: 'success', message: 'Account successfully verified', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const sendverificationEmail = async (req, res, next) => {
    clientService.sendverificationEmail(req.body.email);
    next();
};
export const login = async (req, res, next) => {
    try {
        const { accessToken, refreshToken, data } = await clientService.login(req.body.email, req.body.password);
        res.status(200).json({ status: 'success', accessToken: accessToken, refreshToken: refreshToken, data });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        if (error.message === 'Incorrect Password')
            handleError(error, res, next);
        else if (error.message === 'Account does not exist')
            handleError(error, res, next);
        else
            handleError(error, res, next);
    }
};
export const signup = async (req, res, next) => {
    try {
        const data = await clientService.signup(req.body);
        res.status(200).json({ status: 'success', message: 'Client Account created', data });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        if (error.message === 'email already in database')
            handleError(error, res, next);
        else if (error.message === 'account could not be created')
            handleError(error, res, next);
        else
            handleError(error, res, next);
    }
};
export const renewToken = async (req, res, next) => {
    try {
        const { accessToken, refreshToken, data } = await clientService.renewTokens(req.body.user);
        res.status(200).json({ status: 'success', accessToken: accessToken, refreshToken: refreshToken, data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const about = async (req, res, next) => {
    try {
        const data = await clientService.aboutClient(req.params.id);
        res.status(200).json({ status: 'success', message: 'Client Account found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
//# sourceMappingURL=client.controller.js.map
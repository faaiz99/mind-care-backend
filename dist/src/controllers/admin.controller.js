import * as adminService from '../services/admin.service.js';
import { handleError } from '../middlewares/error/middleware.js';
export const index = async (req, res) => {
    res.status(200).json({ status: "success", message: "Admin Home" });
};
export const login = async (req, res, next) => {
    try {
        const { accessToken, refreshToken, data } = await adminService.login(req.body.email, req.body.password);
        res.status(200).json({ status: "success", accessToken: accessToken, refreshToken: refreshToken, data });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        if (error.message == 'Account does not exist')
            res.status(404).json({ status: "fail", message: 'Account does not exist' });
        else
            handleError(error, res, next);
    }
};
export const signup = async (req, res, next) => {
    try {
        const data = await adminService.signup(req.body);
        res.status(201).json({ status: 'success', message: "Admin Account created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const renewToken = async (req, res, next) => {
    try {
        const { accessToken, refreshToken, data } = await adminService.renewTokens(req.body.user);
        res.status(200).json({ status: "success", accessToken: accessToken, refreshToken: refreshToken, data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const about = async (req, res, next) => {
    try {
        const data = await adminService.aboutAdmin(req.params.id);
        res.status(200).json({ status: 'success', message: "Admin Account found", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
//# sourceMappingURL=admin.controller.js.map
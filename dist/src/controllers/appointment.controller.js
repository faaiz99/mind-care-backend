import * as appointmentService from '../services/appointment.service.js';
import { handleError } from '../middlewares/error/middleware.js';
// Request Handlers for Appointments
export const createAppointment = async (req, res, next) => {
    try {
        const data = await appointmentService.createAppointment(req.body);
        res.status(201).json({ status: 'success', message: 'Appointment created', data });
    }
    catch (error) {
        handleError(error, res, next); // Conflict when appointment cannot be created
    }
};
export const getAppointment = async (req, res, next) => {
    try {
        const data = await appointmentService.getAppointment(req.params.id);
        if (data) {
            res.status(200).json({ status: 'success', message: 'Appointment found', data });
        }
        else {
            res.status(404).json({ status: 'fail', message: 'Appointment not found', data });
        }
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateAppointment = async (req, res, next) => {
    try {
        const data = await appointmentService.updateAppointment(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Appointment updated', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateAppointmentStatus = async (req, res, next) => {
    try {
        const data = await appointmentService.updateAppointmentStatus(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Appintment Status Updated', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteAppointment = async (req, res, next) => {
    try {
        const data = await appointmentService.deleteAppointment(req.params.id);
        res.status(200).json({ status: 'success', message: 'Appointment Deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getAppointmentsClient = async (req, res, next) => {
    try {
        const data = await appointmentService.getAppointmentsClient(req.params.id);
        res.status(200).json({ status: 'success', message: 'Appointments found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getAppointmentsTherapist = async (req, res, next) => {
    try {
        const data = await appointmentService.getAppointmentsTherapist(req.params.id);
        res.status(200).json({ status: 'success', message: 'Appointments found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
// Request Handlers for Session Notes and Therapist Reviews
export const addSessionNotes = async (req, res, next) => {
    try {
        const data = await appointmentService.addSessionNotes(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Session Notes Added', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const addTherapistReview = async (req, res, next) => {
    try {
        const data = await appointmentService.addTherapistReview(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Therapist Review Added', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getTherapistReview = async (req, res, next) => {
    try {
        const data = await appointmentService.getTherapistReview(req.params.id);
        res.status(200).json({ status: 'success', message: 'Therapist Reviews Found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getTherapists = async (req, res, next) => {
    try {
        const data = await appointmentService.getTherapists();
        res.status(200).json({ status: 'success', message: "Therapists retrieved successfully", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getTherapistById = async (req, res, next) => {
    try {
        const data = await appointmentService.getTherapistById(req.params.id);
        if (data) {
            res.status(200).json({ status: 'success', message: "Therapist found", data });
        }
        else {
            res.status(404).json({ status: 'fail', message: "Therapist not found" });
        }
    }
    catch (error) {
        handleError(error, res, next);
    }
};
//# sourceMappingURL=appointment.controller.js.map
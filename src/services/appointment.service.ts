import { Appointment } from "../models/appointment/model.js";
import { Therapist } from "../models/therapist/model.js";
import { IAppointment, ITherapistReview } from "../types/IAppointment.js";

export const addSessionNotes = async (sessionNotes: string, id: string) => {
  const filter = { _id: id };
  const response = await Appointment.findOneAndUpdate(
    filter,
    { feedback: sessionNotes },
    {
      returnOriginal: false,
    },
  );
  if (!response) throw new Error("Session Notes Could not be Added");
  return response;
};

export const addTherapistReview = async (
  therapistReview: ITherapistReview,
  id: string,
) => {
  const filter = { _id: id };
  const response = await Appointment.findOneAndUpdate(filter, therapistReview, {
    returnOriginal: false,
  });
  if (!response) throw new Error("Therapist Review Could not be Added");
  return response;
};

export const getTherapistReview = async (id: string) => {
  const response = await Appointment.find({ therapistId: id });
  if (!response) throw new Error("Therapist Review Could not be Found");
  return response;
};

export const updateAppointmentStatus = async (
  appointment: IAppointment,
  id: string,
) => {
  const filter = { _id: id };
  const response = await Appointment.findOneAndUpdate(filter, appointment, {
    returnOriginal: false,
  });
  if (!response) throw new Error("Appointment could not be updated");
  return response;
};

export const updateAppointment = async (
  appointment: IAppointment,
  id: string,
) => {
  const filter = { _id: id };
  const response = await Appointment.findOneAndUpdate(filter, appointment, {
    returnOriginal: false,
  });
  if (!response) throw new Error("Appointment could not be updated");
  return response;
};

export const deleteAppointment = async (id: string) => {
  const response = await Appointment.deleteOne({ _id: id });
  if (!response) throw new Error("Appointment could not be deleted");
  return response;
};

export const createAppointment = async (appointment: IAppointment) => {
  const response = await Appointment.create(appointment);
  if (!response) throw new Error("Appointment could not be created");
  return response;
};

export const getAppointmentsTherapist = async (id: string) => {
  const response = await Appointment.find({ therapistId: id }).populate({
    path: "clientId",
    model: "client",
  });
  if (!response) throw new Error("Appointments not found");
  return response;
};

export const getAppointmentsClient = async (id: string) => {
  const response = await Appointment.find({ clientId: id })
    .populate({
      path: "clientId",
      model: "client",
    })
    .populate({
      path: "therapistId",
      model: "therapist",
    });
  if (!response) throw new Error("Appointments not found");
  return response;
};

export const getAppointment = async (id: string) => {
  const response = await Appointment.find({ _id: id });
  if (!response) throw new Error("Appointment not found");
  return response;
};

export const getTherapists = async () => {
  const response = await Therapist.find({});
  if (!response) throw new Error("Therapists not found");
  return response;
};
export const getTherapistById = async (id: string) => {
  const response = await Therapist.find({ _id: id });
  if (!response) throw new Error("Therapist not found");
  return response;
};

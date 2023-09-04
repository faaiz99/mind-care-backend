import e from "express";
import { Appointment } from "../models/appointment/appointment.model.ts";
import { Therapist } from '../models/therapist/therapist.model.ts'


export const updateAppointment = async ()=>{
    const response = await Appointment.findByIdAndUpdate()
    if(!response)
        throw new Error('Appointment could not be updated')
    return response
}

export const deleteAppointment = async (id:string)=>{
    const response = await Appointment.deleteOne({_id:id})
    if(!response)
        throw new Error('Appointment could not be deleted')
    return response

}

export const createAppointment = async ()=>{
    const response = await Appointment.create()
    if(!response)
        throw new Error('Appointment could not be created')
    return response
}

export const getAppointments = async ()=>{
    const response = Appointment.find({})
    if(!response)
        throw new Error('Appointments not found')
    return response
}

export const getAppointment = async (id:string)=>{
    const response = Appointment.find({_id:id})
    if(!response)
        throw new Error('Appointment not found')
    return response
}

export const getTherapists = async () => {
    const response = await Therapist.find({})
    if(!response)
        throw new Error('Therapists not found')
    return response
}
export const getTherapistById = async (id:string) => {
    const response =  await Therapist.find({ _id:id })
    if(!response)
        throw new Error('Therapist not found')
    return response
}

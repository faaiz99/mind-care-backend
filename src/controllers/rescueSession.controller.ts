import { Request, Response, NextFunction, RequestHandler } from 'express'
import * as rescueSessionService from '../services/rescueSession.service.ts'
import { handleError } from '../middlewares/error.middlewar.ts'

export const createLowMood: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.createLowMood(req.body, req.params.id)
    res.status(200).json({ status: "success", message: "Low Mood Rescue Session Created", data })
  } catch (error) {
    handleError(error, res, next);
  }
}

export const updateLowMood: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.updateLowMood(req.body, req.params.id)
    res.status(200).json({ status: "success", message: "Low Mood Rescue Session Updated", data })
  } catch (error) {
    handleError(error, res, next);
  }
}

export const createOvercomingDistraction: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.createOverComingDistraction(req.body, req.params.id);
    res.status(201).json({ status: "success", message: "Overcoming Distraction Rescue Session Created", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const updateOvercomingDistraction: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.updateOverComingDistraction(req.body, req.params.id);
    res.status(200).json({ status: "success", message: "Overcoming Distraction Rescue Session Updated", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const createRegainingMotivation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.createRegainingMotivation(req.body, req.params.id);
    res.status(201).json({ status: "success", message: "Regaining Motivation Rescue Session Created", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const updateRegainingMotivation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.updateRegainingMotivation(req.body, req.params.id);
    res.status(200).json({ status: "success", message: "Regaining Motivation Rescue Session Updated", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const createCriticism: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.createCriticism(req.body, req.params.id);
    res.status(201).json({ status: "success", message: "Criticism Rescue Session Created", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const updateCriticism: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.updateCriticism(req.body, req.params.id);
    res.status(200).json({ status: "success", message: "Criticism Rescue Session Updated", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const createRelationship: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.createRelationship(req.body, req.params.id);
    res.status(201).json({ status: "success", message: "Relationship Rescue Session Created", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const updateRelationship: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.updateRelationship(req.body, req.params.id);
    res.status(200).json({ status: "success", message: "Relationship Rescue Session Updated", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const createEnvy: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.createEnvy(req.body, req.params.id);
    res.status(201).json({ status: "success", message: "Envy Rescue Session Created", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const updateEnvy: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.updateEnvy(req.body, req.params.id);
    res.status(200).json({ status: "success", message: "Envy Rescue Session Updated", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const createSleep: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.createSleep(req.body, req.params.id);
    res.status(201).json({ status: "success", message: "Sleep Rescue Session Created", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const updateSleep: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.updateSleep(req.body, req.params.id);
    res.status(200).json({ status: "success", message: "Sleep Rescue Session Updated", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const createAngerAndFrustration: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.createAngerAndFrustration(req.body, req.params.id);
    res.status(201).json({ status: "success", message: "Anger And Frustration Rescue Session Created", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

export const updateAngerAndFrustration: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await rescueSessionService.updateAngerAndFrustration(req.body, req.params.id);
    res.status(200).json({ status: "success", message: "Anger And Frustration Rescue Session Updated", data });
  } catch (error) {
    handleError(error, res, next);
  }
}

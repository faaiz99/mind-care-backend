import { Request, Response, RequestHandler, NextFunction } from "express";
import * as journalService from "../services/journal.service.js";
import { handleError } from "../middlewares/error/middleware.js";
import { handleResponse } from "../middlewares/response/middleware.js";

export const getGratitudeJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getGratitudeJournal(req.params.id);
    handleResponse(res, 200, data)
  } catch (error) {
    handleError(error, res, next);
  }
};
export const createGratitudeJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createGratitudeJournal(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteGratitudeJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteGratitudeJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getProblemSolvingJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getProblemSolvingJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createProblemSolvingJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createProblemSolvingJournal(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteProblemSolvingJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteProblemSolvingJournal(
      req.params.id,
    );
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getGoalSettingJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getGoalSettingJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createGoalSettingJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createGoalSettingJournal(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteGoalSettingJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteGoalSettingJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getSelfAffirmationJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getSelfAffirmationJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createSelfAffirmationJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createSelfAffirmationJournal(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteSelfAffirmationJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteSelfAffirmationJournal(
      req.params.id,
    );
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getReflectionJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getReflectionJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createReflectionJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createReflectionJournal(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteReflectionJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteReflectionJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getOpenJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getOpenJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createOpenJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createOpenJournal(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteOpenJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteOpenJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getChallengingNegativeThoughtsAboutYourselfJournal: RequestHandler =
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data =
        await journalService.getChallengingNegativeThoughtsAboutYourselfJournal(
          req.params.id,
        );

      handleResponse(res, 200, data)

    } catch (error) {
      handleError(error, res, next);
    }
  };
export const createChallengingNegativeThoughtsAboutYourselfJournal: RequestHandler =
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data =
        await journalService.createChallengingNegativeThoughtsAboutYourselfJournal(
          req.body,
        );
      handleResponse(res, 200, data)

    } catch (error) {
      handleError(error, res, next);
    }
  };
export const deleteChallengingNegativeThoughtsAboutYourselfJournal: RequestHandler =
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data =
        await journalService.deleteChallengingNegativeThoughtsAboutYourselfJournal(
          req.params.id,
        );
      handleResponse(res, 200, data)

    } catch (error) {
      handleError(error, res, next);
    }
  };
export const getBuildingASelfCarePlan: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getBuildingASelfCarePlan(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createBuildingASelfCarePlan: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createBuildingASelfCarePlan(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteBuildingASelfCarePlan: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteBuildingASelfCarePlan(
      req.params.id,
    );
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getAnxietyThoughtReccordJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getAnxietyThoughtReccordJournal(
      req.params.id,
    );
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createAnxietyThoughtReccordJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createAnxietyThoughtReccordJournal(
      req.body,
    );
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteAnxietyThoughtReccordJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteAnxietyThoughtReccordJournal(
      req.params.id,
    );
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
// Sleep Journal has own types & Models //

export const getCalmingtheMind: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getCalmingtheMind(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createCalmingtheMind: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createCalmingtheMind(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteCalmingtheMind: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteCalmingTheMind(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getDreamJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getDreamJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createDreamJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createDreamJournal(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteDreamJournal: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteDreamJournal(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getFindingPeaceFulSpace: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getFindingPeaceFulSpace(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createFindingPeaceFulSpace: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createFindingPeaceFulSpace(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteFindingPeaceFulSpace: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteFindingPeaceFulSpace(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getLookingForwardToTomorrow: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getLookingForwardToTomorrow(
      req.params.id,
    );
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createLookingForwardToTomorrow: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createLookingForwardToTomorrow(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deleteLookingForwardToTomorrow: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deleteLookingForwardToTomorrow(
      req.params.id,
    );
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const getPlanningDayAhead: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getPlanningDayAhead(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const createPlanningDayAhead: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.createPlanningDayAhead(req.body);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};
export const deletePlanningDayAhead: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.deletePlanningDayAhead(req.params.id);
    handleResponse(res, 200, data)
  } catch (error) {
    handleError(error, res, next);
  }
};
// Get all Journals //
export const getJournals: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await journalService.getJournals(req.params.id);
    handleResponse(res, 200, data)
  } catch (error) {
    handleError(error, res, next);
  }
};

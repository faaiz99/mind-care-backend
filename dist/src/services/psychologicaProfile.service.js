import { psychologicalProfile } from '../models/psychologicalProfile/model.js';
import { beckDepression } from '../models/psychologicalProfile/depression/model.js';
import { beckAnxiety } from '../models/psychologicalProfile/anxiety/model.js';
export const buildPsychologicalProfile = async (id, psychProfile) => {
    const filter = { clientId: id };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const response = await psychologicalProfile.findOneAndUpdate(filter, {
        $push: { profile: psychProfile }
    }, options)
        .populate({
        path: 'anxietyTest',
        model: 'beckAnxiety'
    })
        .populate({
        path: 'depressionTest',
        model: 'beckDepression'
    });
    if (!response)
        throw new Error('Psychological Profile Could not be Built');
    return response;
};
export const setTestScore = async (id, psychProfile) => {
    console.log(psychProfile);
    const filter = { clientId: id };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const response = await psychologicalProfile.findOneAndUpdate(filter, psychProfile, options);
    if (!response)
        throw new Error('Psychprofile Score Could not be Set');
    return response;
};
export const getPsychologicalProfile = async (id) => {
    const filter = { clientId: id };
    const response = await psychologicalProfile.findOne(filter)
        .populate({
        path: 'anxietyTest',
        model: 'beckAnxiety'
    })
        .populate({
        path: 'depressionTest',
        model: 'beckDepression'
    });
    if (!response)
        throw new Error('Psychological Profile not Found');
    return response;
};
export const saveDepressionTest = async (id, beckDepressionTest) => {
    const response = await beckDepression.create({
        ...beckDepressionTest
    });
    if (!response)
        throw new Error('Depression Test Could not be Saved');
    return response;
};
export const saveAnxietyTest = async (id, beckAnxietyTest) => {
    const response = await beckAnxiety.create({
        ...beckAnxietyTest
    });
    if (!response)
        throw new Error('Anxiety Test Could not be Saved');
    return response;
};
export const getDepressionTest = async (id) => {
    const response = await beckDepression.findOne({
        clientId: id
    });
    if (!response)
        throw new Error('Depression Test Could not be Found');
    return response;
};
export const getAnxietyTest = async (id) => {
    const response = await beckAnxiety.findOne({
        clientId: id
    });
    if (!response)
        throw new Error('Anxiety Test Could not be Found');
    return response;
};
//# sourceMappingURL=psychologicaProfile.service.js.map
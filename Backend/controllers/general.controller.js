import { GeneralMaster } from '../models/general.model.js';

// Create a new GeneralMaster
export const createGeneralMaster = async (req, res) => {
    try {
        console.log(req.body);
        if(req.body.generalMstId === "" ) req.body.generalMstId = null;  
        
        const generalMaster = new GeneralMaster(req.body);
        const savedGeneralMaster = await generalMaster.save();
        res.status(201).json(savedGeneralMaster);
    } catch (error) {
        console.log(error.message);
        
        res.status(500).json({ message: 'Error creating GeneralMaster', error });
    }
};

// Get all GeneralMasters
export const getAllGeneralMasters = async (req, res) => {
    try {
        const generalMasters = await GeneralMaster.find();
        res.status(200).json(generalMasters);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching GeneralMasters', error });
    }
};

// Get a single GeneralMaster by ID
export const getGeneralMasterById = async (req, res) => {
    try {
        const { id } = req.params;
        const generalMaster = await GeneralMaster.findById(id);
        if (!generalMaster) {
            return res.status(404).json({ message: 'GeneralMaster not found' });
        }
        res.status(200).json(generalMaster);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching GeneralMaster', error });
    }
};

// Update a GeneralMaster by ID
export const updateGeneralMaster = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedGeneralMaster = await GeneralMaster.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedGeneralMaster) {
            return res.status(404).json({ message: 'GeneralMaster not found' });
        }
        res.status(200).json(updatedGeneralMaster);
    } catch (error) {
        res.status(500).json({ message: 'Error updating GeneralMaster', error });
    }
};

// Delete a GeneralMaster by ID
export const deleteGeneralMaster = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedGeneralMaster = await GeneralMaster.findByIdAndDelete(id);
        if (!deletedGeneralMaster) {
            return res.status(404).json({ message: 'GeneralMaster not found' });
        }
        res.status(200).json({ message: 'GeneralMaster deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting GeneralMaster', error });
    }
};

// Get all GeneralDtls by GeneralMstId
export const getGeneralDtlsByGeneralMstId = async (req, res) => {
    try {
        const { generalMstId } = req.params;
        const generalDtls = await GeneralMaster.find({ generalMstId });
        if (generalDtls.length === 0) {
            return res.status(404).json({ message: 'No GeneralDtls found for the given GeneralMstId' });
        }
        res.status(200).json(generalDtls);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching GeneralDtls by GeneralMstId', error });
    }
};
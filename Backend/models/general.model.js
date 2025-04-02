import mongoose from 'mongoose';

const generalSchema = new mongoose.Schema(
    {
        generalName: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        secondLanguageName: {
            type: String,
            trim: true,
        },

        generalMstId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'GeneralMaster',
            required: false, // Make it optional
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const GeneralMaster = mongoose.model('GeneralMaster', generalSchema);

export { GeneralMaster };
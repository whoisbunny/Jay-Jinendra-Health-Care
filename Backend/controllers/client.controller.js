import Client from "../models/client.model.js"; // Import the Client model

// Create a new client
export const createClient = async (req, res) => {
    try {
        const client = new Client(req.body);
        await client.save();
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all clients with advanced filtering, sorting, and pagination
export const getClients = async (req, res) => {
    try {
        const { page = 1, limit = 10, sort, search, isActive } = req.query;

        // Build query object
        const query = {};
        if (search) {
            query.$text = { $search: search };
        }
        if (isActive) {
            query.isActive = isActive === "true";
        }

        // Build sort object
        const sortOptions = {};
        if (sort) {
            const [key, order] = sort.split(":");
            sortOptions[key] = order === "desc" ? -1 : 1;
        }

        // Fetch clients with pagination and sorting
        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
            sort: sortOptions,
        };

        const clients = await Client.paginate(query, options);
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single client by ID
export const getClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a client by ID
export const updateClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a client by ID
export const deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Soft delete a client by ID
export const softDeleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true, runValidators: true }
        );
        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }
        res
            .status(200)
            .json({ message: "Client soft deleted successfully", client });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Restore a soft-deleted client by ID
export const restoreClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(
            req.params.id,
            { isActive: true },
            { new: true, runValidators: true }
        );
        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.status(200).json({ message: "Client restored successfully", client });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

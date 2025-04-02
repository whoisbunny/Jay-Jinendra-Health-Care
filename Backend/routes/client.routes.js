import express from "express";
import * as clientController from "../controllers/client.controller.js";

const router = express.Router();

// Create a new client
router.post("/", clientController.createClient);

// Get all clients with advanced filtering, sorting, and pagination
router.get("/", clientController.getClients);

// Get a single client by ID
router.get("/:id", clientController.getClientById);

// Update a client by ID
router.put("/:id", clientController.updateClient);

// Delete a client by ID
router.delete("/:id", clientController.deleteClient);

// Soft delete a client by ID
router.patch("/:id/soft-delete", clientController.softDeleteClient);

// Restore a soft-deleted client by ID
router.patch("/:id/restore", clientController.restoreClient);

export default router;
// FILE: src/modules/users/user.repo.js
import { User } from './user.model.js';

export const userRepository = {
    // Create a new user
    create: async (userData) => {
        const user = await User.create(userData);
        return user;
    },

    // Find a user by ID
    findById: async (id) => {
        return User.findById(id);
    },

    // Find a user by email
    findByVerifiedEmail: async (email) => {
        return User.findOne({
            email,
            isVerified: true
        });
    },

    // Update a user by ID
    updateById: async (id, updateData) => {
        return User.findByIdAndUpdate(id, updateData, { new: true });
    },

    // Delete a user by ID
    deleteById: async (id) => {
        return User.findByIdAndDelete(id);
    },

    // Check if a user exists by email
    existsByEmail: async (email) => {
        return User.exists({ email });
    },

    // Optional: list all users
    findAll: async (filter = {}) => {
        return User.find(filter);
    }
};

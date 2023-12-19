/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unused-labels */
/* eslint-disable react-refresh/only-export-components */
import { create } from 'zustand';
import { devtools, persist } from "zustand/middleware"
import Data from '../Data';

const JobListingStore = (set) => ({
    jobsList: Data,
    selectedTags: [],
    addTag: (tag) => {
        set((state) => {
            console.log('Before:', state.selectedTags);

            // Updating selectedTags using functional update
            const updatedSelectedTags = [...new Set([...state.selectedTags, tag])];

            console.log('After:', updatedSelectedTags);

            // Filtering the array of objects based on tags
            const filteredJobs = state.jobsList.filter(obj =>
                // Check if selectedTags is empty
                updatedSelectedTags.length === 0 ||
                obj.tags.some(tag => updatedSelectedTags.includes(tag))
            );

            console.log('Filtered Jobs:', filteredJobs);

            // Updating jobsList using functional update
            return {
                selectedTags: updatedSelectedTags,
                jobsList: filteredJobs,
            };
        });
    },


    // Remove Tag Functionality
    removeTag: (tag) => {
        set((state) => {
            console.log('Before:', state.selectedTags);
            const updatedSelectedTags = state.selectedTags.filter(existingTag => existingTag !== tag);
            if (updatedSelectedTags.length === 0) {
                console.log('After:', updatedSelectedTags.length === 0);
                return {
                    selectedTags: updatedSelectedTags,
                    jobsList: Data,
                };

            } else {

                const filteredJobs = state.jobsList.filter(obj =>
                    // Check if selectedTags is empty
                    updatedSelectedTags.length === 0 ||
                    obj.tags.some(tag => updatedSelectedTags.includes(tag))
                );
                console.log('Filtered Jobs:', filteredJobs);
                return {
                    selectedTags: updatedSelectedTags,
                    jobsList: filteredJobs,
                };
            }

        });
    },

    // Clear All Filters Functionality
    clearAllFilters: () => {
        set((state) => ({
            selectedTags: [],
            jobsList: Data,
        }));
    },
});

const useJobListingStore = create(
    devtools(
        persist(JobListingStore, {
            name: "JobListing"
        })
    )
)

export default useJobListingStore
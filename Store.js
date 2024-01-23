import { atomWithStorage } from "jotai/utils";
import { v4 } from "uuid";

export const taskAtom = atomWithStorage('tasks', [
    {
        title : 'Create new react app',
        id: v4(),
        dueDate: '2024-01-24',
        description: 'Need to create new react app for an interview',
        status: 'Pending',
        priority: 'Urgent'
    }

])


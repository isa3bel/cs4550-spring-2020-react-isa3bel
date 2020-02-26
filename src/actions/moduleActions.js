export const DELETE_MODULE = "DELETE_MODULE"
export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const CREATE_MODULE = "CREATE_MODULE"
export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
})

export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"
export const findModulesForCourse = (actualModules) => ({
          type: FIND_MODULES_FOR_COURSE,
          modules: actualModules
});

export const UPDATE_MODULE = "UPDATE_MODULE"
export const updateModule = (actualModules) => ({
          type: UPDATE_MODULE,
          modules: actualModules
});


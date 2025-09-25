import Ajv from "ajv";
import addFormats from "ajv-formats";
import { userSchema } from '../modules/user/user.validation.js';
import { courseSchema } from '../modules/course/course.validation.js';
import { departmentSchema } from '../modules/department/department.validation.js';
import { authValidation } from "../modules/auth/auth.validation.js";


const ajv = new Ajv({ allErrors: true, removeAdditional: true });
addFormats(ajv);


const validators = {
  user: ajv.compile(userSchema),
  course: ajv.compile(courseSchema),
  department: ajv.compile(departmentSchema),
  auth: ajv.compile(authValidation),
};

export const validate =
  (schemaName) => {
    return (req, res, next) => {
      const validateFn = validators[schemaName];
      if (!validateFn) {
        return res.status(500).json({ error: `Schema '${schemaName}' not found` });
      }

      const valid = validateFn(req.body);

      if (!valid) {
        return res.status(400).json({
          error: "Validation failed",
          details: validateFn.errors,
        });
      }

      next();
    };
  }

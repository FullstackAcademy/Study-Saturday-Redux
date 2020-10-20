const router = require('express').Router();
const { Student, Test } = require('../db/models');

// GET /api/students
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: { all: true }
    });
    res.json(students);
  } catch (error) {
    next(error);
  }
});

// GET /api/students/:id
router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) res.json(student);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

// POST /api/students
// --- Cycle 0: add code below ---

// --- Cycle 0: add code above ---

// PUT /api/students/:id
router.put('/:id', async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    const [rowsAffected, affectedRows] = await Student.update(
      { firstName, lastName, email },
      {
        where: {
          id: req.params.id
        },
        returning: true
      }
    );
    const updatedStudent = affectedRows[0];
    res.json(updatedStudent);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/students/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const studentDeleted = await Student.destroy({
      where: {
        id: req.params.id
      }
    });
    if (studentDeleted) res.sendStatus(204);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

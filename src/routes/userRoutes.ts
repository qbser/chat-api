import { Router } from 'express';
import { getUsers } from '@controllers/userController';

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Получить всех пользователей
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Успешный ответ
 *         content:
 *           application/json:
 *             example:
 *               - { id: 1, name: "John" }
 */
router.get('/', getUsers);

export default router;
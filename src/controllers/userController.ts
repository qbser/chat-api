import { Request, Response } from 'express';
import { UserService } from '@services/userService';

const userService = new UserService();

export const getUsers = (req: Request, res: Response) => {
    try {
        const users = userService.getUsers(); // Вызов сервиса
        res.json(users); // Отправка ответа
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' }); // Обработка ошибок
    }
};
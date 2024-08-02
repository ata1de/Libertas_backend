/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Identificador único do cliente
 *         name:
 *           type: string
 *           description: Nome do cliente
 *         email:
 *           type: string
 *           format: email
 *           description: Endereço de e-mail do cliente
 *         demand:
 *           type: string
 *           description: Demanda ou necessidade do cliente
 *         phone:
 *           type: string
 *           description: Número de telefone do cliente
 *         company:
 *           type: string
 *           description: Nome da empresa do cliente
 *       required:
 *         - id
 *         - name
 *         - email
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a new client
 *     tags: [Client]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               company:
 *                 type: string
 *               demand:
 *                 type: string
 *     responses:
 *       200:
 *         description: Client created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 company:
 *                   type: string
 *                 demand:
 *                   type: string
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Retrieve a list of all clients
 *     tags: [Client]
 *     responses:
 *       200:
 *         description: A list of clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   company:
 *                     type: string
 *                   demand:
 *                     type: string
 *       400:
 *         description: Bad request
 */
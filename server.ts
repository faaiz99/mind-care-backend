import { httpServer } from './app.ts'
const { PORT } = process.env;

// Export Server for Unit Tests
// export const server = httpServer.listen(PORT, () => {
// 	console.log(`Mind Care Backend on  http://localhost:${PORT}/api/v1`)
// });


httpServer.listen(PORT, () => {
	console.log(`Mind Care Backend on  http://localhost:${PORT}/api/v1`)
});


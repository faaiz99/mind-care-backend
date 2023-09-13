import { httpServer } from './app.ts'
const { PORT } = process.env;

httpServer.listen(PORT, () => {
	console.log(`Mind Care Backend on  http://localhost:${PORT}/api/v1`)
});


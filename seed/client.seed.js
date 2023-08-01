import mongoose from 'mongoose';
import { Client } from '../src/models/client/client.model.js'
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URI = 'mongodb://localhost:27017/mind-care'

mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Successfully connected to database");
	})
	.catch((error) => {
		console.log("database connection failed. exiting now...");
		console.error(error);
		process.exit(1);
	});
var clients =
	[
		new Client({
			"firstName": "Santos",
			"lastName": "Grady",
			"email": "Santos.Grady@hotmail.com",
			"dateofBirth": "1964-09-30T12:54:45.210Z",
			"gender": "female",
			"password": "nvFj0wjfcwATyxz",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/770.jpg",
			"createdAt": "2023-02-13T01:25:41.573Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Marta",
			"lastName": "Durgan",
			"email": "Marta9@hotmail.com",
			"dateofBirth": "1961-07-05T23:32:51.680Z",
			"gender": "male",
			"password": "MVFdD1UNCp6c866",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/827.jpg",
			"createdAt": "2023-01-28T12:10:12.823Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Lydia",
			"lastName": "Kris",
			"email": "Lydia.Kris@hotmail.com",
			"dateofBirth": "1962-07-08T23:55:09.469Z",
			"gender": "male",
			"password": "vA5DENgHMFASUb_",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/180.jpg",
			"createdAt": "2022-07-14T00:25:27.388Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Sydnee",
			"lastName": "Treutel",
			"email": "Sydnee.Treutel75@yahoo.com",
			"dateofBirth": "1969-11-16T18:11:17.559Z",
			"gender": "male",
			"password": "lLg7yTIIkXlbNjJ",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
			"createdAt": "2023-04-25T00:07:38.708Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Keely",
			"lastName": "Koelpin-Jacobson",
			"email": "Keely.Koelpin-Jacobson33@gmail.com",
			"dateofBirth": "1980-11-08T22:37:51.885Z",
			"gender": "male",
			"password": "amMmx6MafjJBrvd",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg",
			"createdAt": "2023-04-17T04:59:37.082Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Elody",
			"lastName": "Toy",
			"email": "Elody60@yahoo.com",
			"dateofBirth": "1989-01-10T07:33:15.379Z",
			"gender": "female",
			"password": "vd1rwZQuNilQNJn",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1112.jpg",
			"createdAt": "2023-02-12T20:48:00.300Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Jeff",
			"lastName": "Davis",
			"email": "Jeff.Davis27@gmail.com",
			"dateofBirth": "1999-01-24T22:22:57.584Z",
			"gender": "male",
			"password": "AJuruNZweZjMTCF",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1182.jpg",
			"createdAt": "2022-12-26T04:06:14.790Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Jerrell",
			"lastName": "Pagac",
			"email": "Jerrell71@yahoo.com",
			"dateofBirth": "1997-12-22T00:14:29.708Z",
			"gender": "female",
			"password": "j_WuToUP3EJjz4U",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/410.jpg",
			"createdAt": "2022-07-23T09:58:28.355Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Alberta",
			"lastName": "Jacobi",
			"email": "Alberta_Jacobi56@yahoo.com",
			"dateofBirth": "1982-09-13T04:30:44.511Z",
			"gender": "male",
			"password": "sVjxXuLu4XiA_XB",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1193.jpg",
			"createdAt": "2022-11-14T08:43:01.110Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "April",
			"lastName": "Nikolaus",
			"email": "April_Nikolaus89@hotmail.com",
			"dateofBirth": "2000-12-23T20:42:55.253Z",
			"gender": "male",
			"password": "vrk3aLJzbPfOyUp",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/47.jpg",
			"createdAt": "2022-08-15T02:22:14.045Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Patricia",
			"lastName": "Goodwin",
			"email": "Patricia.Goodwin@yahoo.com",
			"dateofBirth": "1999-12-02T09:02:21.064Z",
			"gender": "female",
			"password": "szrBMqQXwmmv7o3",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/858.jpg",
			"createdAt": "2022-08-12T23:40:44.556Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Elyse",
			"lastName": "Goyette",
			"email": "Elyse_Goyette16@yahoo.com",
			"dateofBirth": "1991-12-13T00:58:08.592Z",
			"gender": "male",
			"password": "0_y1SNDn5uJ15ub",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/579.jpg",
			"createdAt": "2022-05-31T17:24:27.923Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Taya",
			"lastName": "Reichel",
			"email": "Taya62@yahoo.com",
			"dateofBirth": "1981-03-07T06:35:53.321Z",
			"gender": "female",
			"password": "oqj_aHSQLxOZEOe",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/525.jpg",
			"createdAt": "2022-10-01T23:32:13.824Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Jace",
			"lastName": "Pfeffer",
			"email": "Jace55@gmail.com",
			"dateofBirth": "2003-06-26T07:28:08.340Z",
			"gender": "female",
			"password": "buP_XO8MLpERRXR",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/542.jpg",
			"createdAt": "2022-12-29T08:52:23.009Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "London",
			"lastName": "Nienow",
			"email": "London.Nienow@yahoo.com",
			"dateofBirth": "1973-10-18T06:42:24.692Z",
			"gender": "male",
			"password": "YtoT8GJBG7SaMtX",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/787.jpg",
			"createdAt": "2022-07-08T16:11:15.978Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Lucienne",
			"lastName": "Schmidt",
			"email": "Lucienne_Schmidt@hotmail.com",
			"dateofBirth": "1971-09-03T12:36:00.163Z",
			"gender": "male",
			"password": "6XT726QCOzXkLWn",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/829.jpg",
			"createdAt": "2022-10-26T10:42:14.735Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Savion",
			"lastName": "Weimann",
			"email": "Savion.Weimann38@gmail.com",
			"dateofBirth": "1986-01-18T18:00:38.502Z",
			"gender": "male",
			"password": "O0cgOLNLTRh1nSW",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/467.jpg",
			"createdAt": "2022-10-07T11:17:52.012Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Reginald",
			"lastName": "Keeling",
			"email": "Reginald_Keeling@gmail.com",
			"dateofBirth": "1963-12-07T00:51:44.465Z",
			"gender": "male",
			"password": "M1vjzqUyqFjzDTG",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/904.jpg",
			"createdAt": "2023-04-26T14:49:33.905Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Toni",
			"lastName": "Trantow",
			"email": "Toni.Trantow40@yahoo.com",
			"dateofBirth": "2005-11-13T11:44:36.268Z",
			"gender": "male",
			"password": "QvmbJs7rh8HNp1C",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1230.jpg",
			"createdAt": "2023-03-04T21:46:27.460Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Kimberly",
			"lastName": "O'Keefe",
			"email": "Kimberly.OKeefe50@hotmail.com",
			"dateofBirth": "1975-11-30T02:12:54.818Z",
			"gender": "male",
			"password": "Mtf_FxF_uRoL8Ie",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/144.jpg",
			"createdAt": "2022-10-18T17:01:35.233Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Chaz",
			"lastName": "Gulgowski",
			"email": "Chaz12@yahoo.com",
			"dateofBirth": "1992-01-09T12:59:38.653Z",
			"gender": "male",
			"password": "lq_TjOK5LLv29eq",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/724.jpg",
			"createdAt": "2023-02-14T16:50:27.956Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Kariane",
			"lastName": "Pouros",
			"email": "Kariane94@hotmail.com",
			"dateofBirth": "1948-09-15T19:38:26.350Z",
			"gender": "male",
			"password": "Q3T5uN9gF7M6VYc",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/839.jpg",
			"createdAt": "2022-08-29T03:59:42.269Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Brett",
			"lastName": "Waelchi-Lindgren",
			"email": "Brett48@yahoo.com",
			"dateofBirth": "1967-12-21T07:30:54.771Z",
			"gender": "female",
			"password": "7aZMlhpQJC9Dqms",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/833.jpg",
			"createdAt": "2023-03-04T09:21:47.358Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Antonette",
			"lastName": "Bayer",
			"email": "Antonette.Bayer14@hotmail.com",
			"dateofBirth": "2004-05-26T20:46:48.260Z",
			"gender": "female",
			"password": "addkY60_uddgvSd",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/917.jpg",
			"createdAt": "2022-07-01T00:09:50.003Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Maggie",
			"lastName": "Gerhold",
			"email": "Maggie.Gerhold54@yahoo.com",
			"dateofBirth": "1977-07-17T08:52:07.621Z",
			"gender": "female",
			"password": "kyDATUyR78F5huc",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/172.jpg",
			"createdAt": "2022-11-28T03:08:01.074Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Holden",
			"lastName": "Tremblay",
			"email": "Holden.Tremblay@hotmail.com",
			"dateofBirth": "1983-08-28T22:33:10.582Z",
			"gender": "female",
			"password": "KTuAye1ydyajJ10",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/541.jpg",
			"createdAt": "2023-05-10T20:31:36.899Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Joyce",
			"lastName": "Pollich",
			"email": "Joyce59@hotmail.com",
			"dateofBirth": "1998-08-03T03:54:08.455Z",
			"gender": "female",
			"password": "jwVfHDVF89WtA24",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/342.jpg",
			"createdAt": "2023-03-02T05:05:02.989Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Alaina",
			"lastName": "Bednar",
			"email": "Alaina_Bednar19@gmail.com",
			"dateofBirth": "1997-02-02T07:52:34.918Z",
			"gender": "female",
			"password": "yGKsDu7Uvu6aSk3",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/53.jpg",
			"createdAt": "2022-09-24T08:13:55.694Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Jennifer",
			"lastName": "Hessel",
			"email": "Jennifer_Hessel20@gmail.com",
			"dateofBirth": "1998-02-24T11:33:46.718Z",
			"gender": "male",
			"password": "EAT8gXZD8AGRe8R",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/295.jpg",
			"createdAt": "2022-06-18T21:39:06.216Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Berniece",
			"lastName": "Hagenes",
			"email": "Berniece68@gmail.com",
			"dateofBirth": "1964-12-28T08:40:06.186Z",
			"gender": "female",
			"password": "Q7hDLDImkgwbYrz",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/841.jpg",
			"createdAt": "2022-08-10T07:05:37.992Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Kole",
			"lastName": "Quigley",
			"email": "Kole_Quigley64@gmail.com",
			"dateofBirth": "1954-07-16T00:11:15.594Z",
			"gender": "female",
			"password": "9Cqy9zLRsxP_7oH",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/757.jpg",
			"createdAt": "2023-02-15T06:27:21.483Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Odell",
			"lastName": "Wintheiser",
			"email": "Odell.Wintheiser70@yahoo.com",
			"dateofBirth": "1971-09-09T02:54:42.394Z",
			"gender": "male",
			"password": "Q4T0Ff2Ikf9So6Y",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1153.jpg",
			"createdAt": "2022-08-24T12:08:08.021Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Roscoe",
			"lastName": "Howe",
			"email": "Roscoe_Howe@yahoo.com",
			"dateofBirth": "1979-09-21T23:21:02.156Z",
			"gender": "female",
			"password": "buYuC7fPga2XHJB",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1147.jpg",
			"createdAt": "2022-10-19T15:12:19.594Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Emmanuel",
			"lastName": "Kreiger-Ziemann",
			"email": "Emmanuel_Kreiger-Ziemann@hotmail.com",
			"dateofBirth": "1952-03-14T02:40:40.911Z",
			"gender": "male",
			"password": "vP90qEq6Ai6ge1N",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
			"createdAt": "2023-03-02T22:31:16.854Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Catharine",
			"lastName": "Kunde",
			"email": "Catharine83@hotmail.com",
			"dateofBirth": "1999-03-11T08:25:59.771Z",
			"gender": "female",
			"password": "6Xl1vrKwOSjlGiG",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg",
			"createdAt": "2022-06-29T22:54:45.909Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Elise",
			"lastName": "Bednar",
			"email": "Elise96@yahoo.com",
			"dateofBirth": "1948-01-05T05:26:07.786Z",
			"gender": "male",
			"password": "UuYjd4zcEq56C6c",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/966.jpg",
			"createdAt": "2023-04-15T17:01:52.981Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Christ",
			"lastName": "Watsica",
			"email": "Christ.Watsica56@yahoo.com",
			"dateofBirth": "1965-12-28T20:41:52.790Z",
			"gender": "male",
			"password": "Mjsd4WbM9gdpOaU",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1086.jpg",
			"createdAt": "2022-10-11T04:32:26.719Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Emmalee",
			"lastName": "Runolfsson",
			"email": "Emmalee24@gmail.com",
			"dateofBirth": "1951-08-20T13:37:42.655Z",
			"gender": "male",
			"password": "STCpF9CCqgejp9Y",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1078.jpg",
			"createdAt": "2023-04-05T08:38:38.128Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Creola",
			"lastName": "Adams",
			"email": "Creola81@gmail.com",
			"dateofBirth": "1944-02-13T18:33:20.597Z",
			"gender": "female",
			"password": "b2lnZkv81Ay3VBg",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/980.jpg",
			"createdAt": "2023-02-08T19:54:36.216Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Mark",
			"lastName": "Roob",
			"email": "Mark85@gmail.com",
			"dateofBirth": "1951-12-25T22:39:18.367Z",
			"gender": "male",
			"password": "x4yMHr5jNBnoLLG",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1093.jpg",
			"createdAt": "2023-03-30T02:20:26.173Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Conor",
			"lastName": "Gibson",
			"email": "Conor97@hotmail.com",
			"dateofBirth": "2003-11-23T10:34:48.732Z",
			"gender": "male",
			"password": "YQtBpA5wp89GTCA",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/405.jpg",
			"createdAt": "2022-08-23T02:15:03.293Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Audreanne",
			"lastName": "Goldner",
			"email": "Audreanne62@hotmail.com",
			"dateofBirth": "2003-09-25T09:22:40.675Z",
			"gender": "female",
			"password": "ruaJKpHgibr4EPC",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/218.jpg",
			"createdAt": "2022-08-13T00:09:53.077Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Kylie",
			"lastName": "Runolfsdottir",
			"email": "Kylie.Runolfsdottir@yahoo.com",
			"dateofBirth": "1967-12-31T18:58:50.192Z",
			"gender": "male",
			"password": "WV1M62P_N1CC2a1",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/502.jpg",
			"createdAt": "2022-05-29T17:39:19.489Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Zakary",
			"lastName": "O'Kon",
			"email": "Zakary.OKon38@yahoo.com",
			"dateofBirth": "2002-04-15T09:54:35.099Z",
			"gender": "female",
			"password": "l2lfWcOTTWiczv8",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/29.jpg",
			"createdAt": "2023-05-16T11:31:37.395Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Grant",
			"lastName": "Beier",
			"email": "Grant29@yahoo.com",
			"dateofBirth": "2005-11-01T04:27:32.727Z",
			"gender": "male",
			"password": "yvKmxX13QNFWwiu",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/109.jpg",
			"createdAt": "2023-05-15T23:27:43.072Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Anjali",
			"lastName": "Yundt",
			"email": "Anjali_Yundt@yahoo.com",
			"dateofBirth": "1944-02-27T18:16:09.892Z",
			"gender": "female",
			"password": "xQcQ4mEHV0ImdlO",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1021.jpg",
			"createdAt": "2022-07-03T18:34:22.276Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Kristoffer",
			"lastName": "Carter",
			"email": "Kristoffer_Carter25@gmail.com",
			"dateofBirth": "2001-11-16T14:16:22.489Z",
			"gender": "female",
			"password": "o2nWUVWxBZoa6fk",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/969.jpg",
			"createdAt": "2023-03-26T13:42:44.524Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Katherine",
			"lastName": "Kassulke",
			"email": "Katherine.Kassulke99@gmail.com",
			"dateofBirth": "1983-08-26T20:32:15.792Z",
			"gender": "female",
			"password": "5id35ov6aa0LYGV",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/693.jpg",
			"createdAt": "2022-06-10T12:06:01.243Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Emmy",
			"lastName": "Padberg",
			"email": "Emmy_Padberg9@hotmail.com",
			"dateofBirth": "1950-09-08T15:30:00.470Z",
			"gender": "male",
			"password": "wGH3zHGVOdJOy64",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/928.jpg",
			"createdAt": "2023-04-17T21:54:45.349Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Mathilde",
			"lastName": "Powlowski",
			"email": "Mathilde.Powlowski91@gmail.com",
			"dateofBirth": "1995-04-05T17:09:21.027Z",
			"gender": "male",
			"password": "5kSbu9IiBxnoeFU",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/693.jpg",
			"createdAt": "2022-12-15T03:21:34.968Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Camylle",
			"lastName": "Russel",
			"email": "Camylle_Russel@gmail.com",
			"dateofBirth": "2001-01-08T01:35:56.453Z",
			"gender": "male",
			"password": "yHnSF8Sy_AUN98b",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/241.jpg",
			"createdAt": "2023-01-28T07:01:39.763Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Leon",
			"lastName": "Schmeler",
			"email": "Leon.Schmeler@yahoo.com",
			"dateofBirth": "1964-10-22T02:55:47.318Z",
			"gender": "male",
			"password": "B60WAZPKI4xXZFl",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1082.jpg",
			"createdAt": "2022-10-20T07:02:55.913Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Eduardo",
			"lastName": "Carroll",
			"email": "Eduardo_Carroll@yahoo.com",
			"dateofBirth": "1993-08-04T11:52:00.784Z",
			"gender": "female",
			"password": "M8C35NzC82txrbI",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/783.jpg",
			"createdAt": "2023-04-15T20:55:08.245Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Zion",
			"lastName": "O'Keefe",
			"email": "Zion.OKeefe@gmail.com",
			"dateofBirth": "2003-03-11T03:54:43.510Z",
			"gender": "female",
			"password": "Wf5NS6G_7ZiTZc5",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/864.jpg",
			"createdAt": "2022-10-19T18:12:49.918Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Whitney",
			"lastName": "Dicki",
			"email": "Whitney2@yahoo.com",
			"dateofBirth": "1992-10-25T03:13:29.665Z",
			"gender": "female",
			"password": "6iwP37LfVFPgdmr",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/348.jpg",
			"createdAt": "2022-07-29T07:58:29.606Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Mackenzie",
			"lastName": "Roob",
			"email": "Mackenzie.Roob@gmail.com",
			"dateofBirth": "1950-10-06T10:45:45.758Z",
			"gender": "female",
			"password": "FexcAAOvxoa3dgu",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/325.jpg",
			"createdAt": "2022-07-15T05:05:12.595Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Price",
			"lastName": "Bailey",
			"email": "Price.Bailey42@hotmail.com",
			"dateofBirth": "1993-02-21T20:59:51.699Z",
			"gender": "female",
			"password": "Wjpj_UKTsiCYncb",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/91.jpg",
			"createdAt": "2022-07-06T12:25:15.100Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Conrad",
			"lastName": "Kozey",
			"email": "Conrad_Kozey@hotmail.com",
			"dateofBirth": "1943-12-21T20:52:27.054Z",
			"gender": "female",
			"password": "un6vWukAHlz_LJm",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/216.jpg",
			"createdAt": "2022-10-05T21:10:45.733Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Estel",
			"lastName": "Will",
			"email": "Estel12@yahoo.com",
			"dateofBirth": "1966-09-22T06:07:42.271Z",
			"gender": "female",
			"password": "Rv8gS_gpsNyiurg",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/136.jpg",
			"createdAt": "2023-05-07T17:36:50.704Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Cary",
			"lastName": "Quitzon",
			"email": "Cary5@hotmail.com",
			"dateofBirth": "1993-12-10T14:21:11.827Z",
			"gender": "male",
			"password": "dOlwoecT3xSYZal",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/0.jpg",
			"createdAt": "2022-12-12T22:59:58.977Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Wayne",
			"lastName": "Dibbert",
			"email": "Wayne.Dibbert2@gmail.com",
			"dateofBirth": "1984-10-09T06:04:44.891Z",
			"gender": "male",
			"password": "2mL0jOpeqtG9QYU",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
			"createdAt": "2023-01-05T01:39:13.207Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Annabel",
			"lastName": "Leuschke",
			"email": "Annabel_Leuschke@yahoo.com",
			"dateofBirth": "1948-10-11T02:44:24.729Z",
			"gender": "female",
			"password": "6QzP9qEjTdr7eqZ",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/739.jpg",
			"createdAt": "2022-12-16T15:34:26.532Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Bridgette",
			"lastName": "Bechtelar-Hansen",
			"email": "Bridgette_Bechtelar-Hansen10@gmail.com",
			"dateofBirth": "1948-04-11T18:36:46.521Z",
			"gender": "male",
			"password": "LKGIudvxOLbgDCQ",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
			"createdAt": "2023-01-12T17:49:43.749Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Mackenzie",
			"lastName": "Kub",
			"email": "Mackenzie.Kub@hotmail.com",
			"dateofBirth": "1969-04-07T15:18:21.422Z",
			"gender": "male",
			"password": "mOPMDxYaxkTy4QE",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/751.jpg",
			"createdAt": "2022-12-10T20:02:13.598Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Lenny",
			"lastName": "McDermott",
			"email": "Lenny_McDermott14@yahoo.com",
			"dateofBirth": "2002-07-30T12:46:35.754Z",
			"gender": "male",
			"password": "yEGx_nERXq7hbLA",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
			"createdAt": "2022-11-15T03:46:57.806Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Gaetano",
			"lastName": "Feest",
			"email": "Gaetano.Feest@gmail.com",
			"dateofBirth": "1996-02-09T14:53:19.065Z",
			"gender": "male",
			"password": "NZ84rC8V1BsHVgZ",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/0.jpg",
			"createdAt": "2022-12-10T12:07:34.914Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Nico",
			"lastName": "Sauer",
			"email": "Nico.Sauer23@yahoo.com",
			"dateofBirth": "1977-10-12T14:38:35.354Z",
			"gender": "male",
			"password": "U1zFM_9YMQJQ82M",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1221.jpg",
			"createdAt": "2022-12-08T01:25:28.887Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Cloyd",
			"lastName": "Kris",
			"email": "Cloyd.Kris10@gmail.com",
			"dateofBirth": "1954-07-15T11:50:59.425Z",
			"gender": "female",
			"password": "N2kxVyJoI1sVbZU",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/577.jpg",
			"createdAt": "2022-12-08T21:32:33.839Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Lucile",
			"lastName": "O'Connell",
			"email": "Lucile.OConnell@gmail.com",
			"dateofBirth": "1956-01-14T12:01:09.074Z",
			"gender": "male",
			"password": "UTJYGNOu4OsM5dg",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/722.jpg",
			"createdAt": "2023-03-02T11:24:50.119Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Mona",
			"lastName": "Okuneva",
			"email": "Mona_Okuneva@hotmail.com",
			"dateofBirth": "1959-05-05T02:13:23.253Z",
			"gender": "female",
			"password": "zJ0rh7gACbx3aUd",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/332.jpg",
			"createdAt": "2023-03-15T12:58:41.391Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Ramon",
			"lastName": "Kiehn",
			"email": "Ramon.Kiehn@gmail.com",
			"dateofBirth": "1995-10-29T05:35:03.294Z",
			"gender": "female",
			"password": "Rsq4Nov6oWbcpft",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/74.jpg",
			"createdAt": "2022-06-26T22:06:27.298Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Danny",
			"lastName": "Dare",
			"email": "Danny2@hotmail.com",
			"dateofBirth": "1985-01-31T06:18:53.840Z",
			"gender": "female",
			"password": "v2XUM5ijzNZxVs9",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/694.jpg",
			"createdAt": "2023-05-02T07:03:54.812Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Earl",
			"lastName": "Kris",
			"email": "Earl_Kris@gmail.com",
			"dateofBirth": "1985-11-07T10:05:19.141Z",
			"gender": "female",
			"password": "yOBwe9xytLHN1zP",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/33.jpg",
			"createdAt": "2022-12-18T23:03:49.209Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Wilhelm",
			"lastName": "Thompson",
			"email": "Wilhelm.Thompson@hotmail.com",
			"dateofBirth": "1958-05-05T04:55:23.529Z",
			"gender": "female",
			"password": "B7ibPDs4OH3arWX",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/784.jpg",
			"createdAt": "2022-06-26T15:05:42.895Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Charlotte",
			"lastName": "Rutherford",
			"email": "Charlotte.Rutherford@hotmail.com",
			"dateofBirth": "1957-05-18T10:54:41.856Z",
			"gender": "male",
			"password": "iOatTa7LWoxWLzC",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1191.jpg",
			"createdAt": "2023-02-07T08:40:57.695Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Lavada",
			"lastName": "Quigley",
			"email": "Lavada94@yahoo.com",
			"dateofBirth": "1961-10-18T14:06:49.362Z",
			"gender": "male",
			"password": "awQ89I4h7awBowU",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/790.jpg",
			"createdAt": "2022-07-10T13:35:37.622Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Mckenzie",
			"lastName": "Hickle-Pfeffer",
			"email": "Mckenzie.Hickle-Pfeffer@hotmail.com",
			"dateofBirth": "2004-02-01T06:41:35.852Z",
			"gender": "male",
			"password": "1x2iR7ekFFBBAcC",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/203.jpg",
			"createdAt": "2022-10-20T09:28:07.547Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Winfield",
			"lastName": "Wisoky",
			"email": "Winfield61@hotmail.com",
			"dateofBirth": "1981-09-20T15:05:27.535Z",
			"gender": "female",
			"password": "0jdsgCC_D3brZch",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1001.jpg",
			"createdAt": "2022-05-26T06:16:18.507Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Gail",
			"lastName": "Heaney",
			"email": "Gail73@gmail.com",
			"dateofBirth": "1968-02-27T18:16:07.818Z",
			"gender": "female",
			"password": "_hmB2r1Uy6zOGEo",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/165.jpg",
			"createdAt": "2022-07-07T08:36:33.275Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Josie",
			"lastName": "Donnelly",
			"email": "Josie.Donnelly@gmail.com",
			"dateofBirth": "2000-10-05T01:48:47.081Z",
			"gender": "female",
			"password": "LEYFU0ZXZrQMazh",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1074.jpg",
			"createdAt": "2023-03-01T20:42:24.268Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Danyka",
			"lastName": "Beier",
			"email": "Danyka.Beier15@hotmail.com",
			"dateofBirth": "1985-04-24T05:24:33.282Z",
			"gender": "female",
			"password": "gqpZfZ9ig4FKOFB",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/883.jpg",
			"createdAt": "2022-07-20T04:56:45.813Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Zander",
			"lastName": "Okuneva",
			"email": "Zander.Okuneva@yahoo.com",
			"dateofBirth": "2001-06-03T02:32:55.600Z",
			"gender": "male",
			"password": "iI30bvVOwfPAdnF",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/44.jpg",
			"createdAt": "2022-10-05T15:57:08.181Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Fay",
			"lastName": "Zemlak",
			"email": "Fay.Zemlak36@gmail.com",
			"dateofBirth": "1952-02-04T06:47:23.234Z",
			"gender": "male",
			"password": "yPWWiQD7lNn5woS",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/929.jpg",
			"createdAt": "2022-09-03T14:53:13.258Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Cade",
			"lastName": "Wuckert",
			"email": "Cade_Wuckert80@gmail.com",
			"dateofBirth": "1966-06-19T06:33:58.244Z",
			"gender": "male",
			"password": "lxDMe5VkBFUCRgt",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/679.jpg",
			"createdAt": "2023-02-04T11:35:21.165Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Adelia",
			"lastName": "Cummings",
			"email": "Adelia38@yahoo.com",
			"dateofBirth": "1973-12-27T15:12:53.483Z",
			"gender": "female",
			"password": "BazxO9eCTmYXlLg",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/594.jpg",
			"createdAt": "2023-03-28T13:28:47.646Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Minnie",
			"lastName": "Stokes",
			"email": "Minnie_Stokes89@gmail.com",
			"dateofBirth": "1993-12-10T19:43:08.538Z",
			"gender": "female",
			"password": "W9uxJYfSkstZOGk",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/868.jpg",
			"createdAt": "2022-10-06T10:13:38.600Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Isabella",
			"lastName": "Schmidt",
			"email": "Isabella_Schmidt@hotmail.com",
			"dateofBirth": "1976-07-30T21:29:39.703Z",
			"gender": "female",
			"password": "q4MLfPXSeyFo7sN",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/721.jpg",
			"createdAt": "2022-12-02T08:02:22.063Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Julien",
			"lastName": "Schuppe",
			"email": "Julien.Schuppe98@hotmail.com",
			"dateofBirth": "1992-06-06T21:35:53.867Z",
			"gender": "female",
			"password": "ljNKynPx0RCSpqM",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/703.jpg",
			"createdAt": "2022-12-06T03:07:57.692Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Asia",
			"lastName": "Hilpert",
			"email": "Asia_Hilpert@gmail.com",
			"dateofBirth": "2002-05-10T12:59:02.359Z",
			"gender": "female",
			"password": "HeuzQLAKKf8nqY7",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/936.jpg",
			"createdAt": "2023-05-09T08:56:54.008Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Elsa",
			"lastName": "Schumm",
			"email": "Elsa0@gmail.com",
			"dateofBirth": "2004-08-03T17:40:26.580Z",
			"gender": "female",
			"password": "0Wkkes1KjItJE_g",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
			"createdAt": "2022-11-15T00:14:06.255Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Joshuah",
			"lastName": "Bogisich",
			"email": "Joshuah91@hotmail.com",
			"dateofBirth": "1973-05-19T18:57:59.632Z",
			"gender": "male",
			"password": "TSlSU4iNfGuwDj9",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/66.jpg",
			"createdAt": "2023-04-27T17:39:00.741Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Asa",
			"lastName": "McGlynn",
			"email": "Asa_McGlynn@gmail.com",
			"dateofBirth": "1996-03-05T00:05:54.430Z",
			"gender": "female",
			"password": "1ZFU0GILAAVVfIF",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/218.jpg",
			"createdAt": "2023-03-07T21:25:23.741Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Tianna",
			"lastName": "Miller",
			"email": "Tianna18@yahoo.com",
			"dateofBirth": "1944-08-25T15:15:16.158Z",
			"gender": "female",
			"password": "y0PCm0ZBS18y2gn",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1002.jpg",
			"createdAt": "2022-10-21T22:57:32.953Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Maia",
			"lastName": "Kunde",
			"email": "Maia_Kunde57@yahoo.com",
			"dateofBirth": "1967-11-16T03:31:25.962Z",
			"gender": "female",
			"password": "YZq89MxBD2Z7Z0g",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/826.jpg",
			"createdAt": "2022-07-31T15:15:51.939Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Lauren",
			"lastName": "Cole",
			"email": "Lauren_Cole@yahoo.com",
			"dateofBirth": "1953-06-23T22:39:36.299Z",
			"gender": "male",
			"password": "IduDw2mpp19_Ore",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/498.jpg",
			"createdAt": "2022-09-25T18:35:57.624Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Deanna",
			"lastName": "Luettgen",
			"email": "Deanna.Luettgen78@hotmail.com",
			"dateofBirth": "1964-07-11T20:14:42.980Z",
			"gender": "female",
			"password": "_0ET9Ou8IS0fMKp",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1218.jpg",
			"createdAt": "2022-12-26T01:55:05.036Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Dasia",
			"lastName": "Haag",
			"email": "Dasia_Haag56@yahoo.com",
			"dateofBirth": "1976-10-29T02:57:03.135Z",
			"gender": "male",
			"password": "KTgHu5pvNCoKbaq",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1049.jpg",
			"createdAt": "2022-12-03T18:38:26.751Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Michaela",
			"lastName": "Prohaska",
			"email": "Michaela29@gmail.com",
			"dateofBirth": "1952-04-12T08:06:48.673Z",
			"gender": "female",
			"password": "Sbi8LMR4s9ONxz8",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/270.jpg",
			"createdAt": "2022-10-23T01:47:55.100Z",
			"verifiedAccount": false
		}),
		new Client({
			"firstName": "Jovani",
			"lastName": "Streich",
			"email": "Jovani_Streich@hotmail.com",
			"dateofBirth": "1991-07-20T04:21:07.221Z",
			"gender": "female",
			"password": "5z_2itwJs0x4qW9",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/80.jpg",
			"createdAt": "2022-05-29T13:36:21.427Z",
			"verifiedAccount": true
		}),
		new Client({
			"firstName": "Nichole",
			"lastName": "Dibbert",
			"email": "Nichole_Dibbert43@gmail.com",
			"dateofBirth": "1954-09-30T02:14:37.273Z",
			"gender": "female",
			"password": "v7OD7PFbW0XVMVz",
			"picture": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/9.jpg",
			"createdAt": "2023-01-29T00:10:35.177Z",
			"verifiedAccount": true
		})
	]
var done = 0;
for (var i = 0; i < clients.length; i++) {
	clients[i].save().then(res => {
		done++
		if (done === clients.length) {
			exit()
		}
	}).catch(err => {
		console.log('error', err)
	})
}

const exit = async () => {
	mongoose.disconnect()
}
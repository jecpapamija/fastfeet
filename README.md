# FastFeet
FastFeet is a online solution for recipients and company 

## Usage

Run postgres image on docker, and create database named fastfeet
```bash
docker run --name database -e POSTGRES_PASSWORD=pass -p 5432:5432 -d postgres
```

Clone the repository
```bash
git clone https://github.com/jecpapamija/fastfeet
cd fastfeet
yarn install
yarn dev
```

Sequelize migrarions and seeds, on the first time
```bash
yarn sequelize db:migrate
yarn sequelize db:seed:all
```

Use the [insomia](https://insomnia.rest/) software to test te API request, you can import this [file](https://github.com/jecpapamija/fastfeet/blob/master/Insomnia.json) with the resquets for test.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
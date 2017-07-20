# Barbecue orders

### Backend Stack
- PHP
- Mysql

**Dependencies**
- slim/slim
- arojunior/php-orm-pdo

### Frontend Stack
- React
- Redux

**Dependencies**
- erikras/redux-form
- choko-org/redux-boot
- ramda/ramda
- arojunior/redux-localstore

It is using `Webpack 2` as module bundler and is `WPA` by default.

# Instalation

### Docker
The easiest way. Clone repository and run:
```sh
docker-compose up -d
```

**Client:** http://localhost:3000
**API:** http://localhost:8000

### Manual Instalation

To run this application without Docker, you gonna need PHP 5.6+, Composer and Mysql installed locally.

- 1 - import `/api/database.sql` in you local Mysql
- 2 - go to /api and run `composer install` to install the dependencies
- 3 - change database connection configuration in `/api/src/Models/App.php`
- 4 - then you can run the API going to `/api/public` with `php -S localhost:8000`
- 5 - go to `/client/build` and run the Client with `php -S localhost:3000`

# Requeriments

### Login
- [x] User should log in with e-mail and password
- [x] All form fields are required
- [x] It should show a warning if user try to send the form empty

### New account
- [x] Everyone can create an account
- [x] All form fields are required
- [x] It should validate duplicated e-mails

### Menu
- [x] The menu should be shared with all authenticated pages

### Pages
- [x] Authentication is not required to Login and New account page
- [x] Authentication is required to Dashboard, New company, New order, My orders and My account page

### Dashboard
- [x] User should land in `Dashboard` page after Login
- [x] Companies list should has a link in quantity column to go to orders page

### New company
- [x] Users can create one or more companies. If they got no companies, they can't create orders
- [ ] The form should verify if ENI (a.k.a CNPJ in Brazil) is valid. All fields are required

### New order
- [x] Users should select one company to create an order, after that they can select the product and quantity

### My orders
- [x] Users can view orders information and cancel an order whenever they want

### My account
- [x] User can edit this profile everytime he want
- [x] It should validate duplicated e-mails, as `New account` page

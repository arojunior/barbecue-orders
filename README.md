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

# Instalation

### Docker
The easiest way. Clone repository and run:
```sh
docker-compose up -d
```

**Client:** http://localhost:3000
**API:** http://localhost:8000

### Manual Instalation

Under construction.

# Requeriments

### Login
-[ ] User should log in with e-mail and password
-[ ] All form fields are required
-[ ] It should show a warning if user try to send the form empty

### New account
-[ ] Everyone can create an account
-[ ] All form fields are required
-[ ] It should validate duplicated e-mails

### Menu
-[ ] The menu should be shared with all authenticated pages

### Pages
-[ ] Authentication is not required to Login and New account page
-[ ] Authentication is required to Dashboard, New company, New order, My orders and My account page

### Dashboard
-[ ] User should land in `Dashboard` page after Login
-[ ] Companies list should has a link in quantity column to go to orders page

### New company
-[ ] Users can create one or more companies. If they got no companies, they can't create orders
-[ ] The form should verify if ENI is valid. All fields are required

### New order
-[ ] Users should select one company to create an order, after that they can select the product and quantity

### My orders
-[ ] Users can view orders information and cancel an order whenever they want

### My account
-[ ] User can edit this profile everytime he want
-[ ] It should validate duplicated e-mails, as `New account` page

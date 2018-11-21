# MagMer RestFull API

## Быстрый старт

```bash
# Установить зависимости
npm install

# Запустить приложение
npm run start
```

## Endpoints

### Получить список продуктов из базы данных

#### Публичный

```bash
GET /product
```

### Получить один продукт из базы данных

#### Публичный

```bash
GET /product/{id}
```

### Добавить продукт в базу данных

#### JWT защита

```bash
POST /product

# Образец запроса
# {
#   "title": "Название продукта",
#   "description": "Описание продукта",
#   "price": "123",
#   "url": "http://test.com/product/1",
#   "images": [{"url": "http://test.com/image/1"}]
# }
```

### Отредактировать продукт в базе данных

#### JWT защита

```bash
PUT /product/{id}

# Образец запроса
# {
#   "title": "Новое название продукта",
#   "description": "Новое описание продукта",
# }
```

### Удалить продукт из корзины

#### JWT защита

```bash
DELETE /product/{id}
```

### Получить информацию о приложении

#### Публичный

```bash
GET /
```

## App Info

### Author

Nikolay Kachanov

### Version

1.0.0

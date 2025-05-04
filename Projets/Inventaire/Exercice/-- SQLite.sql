-- SQLite
PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS ingredients_recipes;
DROP TABLE IF EXISTS ingredient;
DROP TABLE IF EXISTS categories_recipes;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE
    );

CREATE TABLE recipes(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    slug VARCHAR(50) NOT NULL,
    date DATETIME,
    duration INTEGER DEFAULT 0 NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

CREATE TABLE categories(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL
    );

CREATE TABLE categories_recipes(
    recipe_id INTEGER NOT NULL,
    categories_id INTEGER NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (categories_id) REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, categories_id)
    UNIQUE (recipe_id,categories_id)
    );

CREATE TABLE ingredient(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL
    );

CREATE TABLE ingredients_recipes(
    recipe_id INTEGER,
    ingredient_id INTEGER,
    quantity INTEGER,
    unit VARCHAR(10),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES ingredient(id) ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, ingredient_id), 
    UNIQUE (recipe_id, ingredient_id)
    );

INSERT INTO categories(title) 
VALUES  ("Entrée"),
        ("Plat"),
        ("Dessert");
        
INSERT INTO users(username,email) 
VALUES  ('bastel','baste@gmail.com'),
        ('neko','neko@dog.com');

INSERT INTO recipes(title,slug,duration,user_id) 
VALUES  ('Soupe','soupe',20,1),
        ('Ramasser sous la table','voler',0,2),
        ('Pates','pates',20,1);

INSERT INTO categories_recipes (recipe_id,categories_id)
VALUES  (1,1),
        (2,2),
        (3,2);

INSERT INTO ingredient(name) 
VALUES  ('carrote'),
        ('oignon'),
        ('jambon'),
        ('bouillon');

INSERT INTO ingredients_recipes (recipe_id, ingredient_id, quantity, unit)
VALUES  (1,1,3,'piece'),
        (1,2,2,'piece'),
        (1,3,2,'tranche'),
        (1,4,1,'cube'),
        (2,3,1,'tranche');
/*
SELECT *
FROM recipes r 
JOIN categories_recipes cr ON cr.recipe_id = r.id
JOIN categories c ON cr.recipe_id = c.id;

SELECT *
FROM ingredient i
JOIN ingredients_recipes ir ON ir.ingredient_id = i.id
JOIN recipes r ON ir.recipe_id=r.id
WHERE i.name = 'jambon';

SELECT *
FROM recipes r
LEFT JOIN ingredients_recipes ir ON ir.recipe_id = r.id
WHERE ir.recipe_id IS NULL;

UPDATE ingredients_recipes
SET quantity = 10
WHERE recipe_id = 2 AND ingredient_id = 3

SELECT r.title, ir.quantity, ir.unit, i.name as Ingredient
FROM recipes r
JOIN ingredients_recipes ir ON ir.recipe_id = r.id
JOIN ingredient i ON ir.ingredient_id = i.id;


-- DELETE FROM ingredient WHERE id=3;
SELECT title, COUNT(id) as "nombre de recette", duration
FROM recipes
GROUP BY duration
HAVING "nombre de recette" >=2;
*/
CREATE database  `fusion_ordering`;
USE `fusion_ordering`;

  CREATE TABLE `sessions` (
    `id` varchar(80) NOT NULL,
    `type` varchar(40) NOT NULL,
    `expiry` timestamp NOT NULL,
    `user_id` integer NOT NULL,
    `deactivated` tinyint NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;


  CREATE TABLE `users` (
    `id` int(11) NOT NULL,
    `username` varchar(255) DEFAULT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(100) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
  (1, 'alias', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', 'programming@prendi.com.au'),
  (2, 'easier', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', 'hi');


  CREATE TABLE `item_categories` (
    `id` int(11) NOT NULL,
    `name` varchar(100) NOT NULL,
    `parent_id` int(11) NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `item_categories`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `item_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  INSERT INTO `item_categories` (`id`, `name`, `parent_id`) VALUES
  (1, 'Specials', NULL),
  (2, 'Entrees', NULL),
  (3, 'Main', NULL),
  (4, 'Drinks', NULL),
  (5, 'Desserts', NULL),
  (6, 'Meat', 3),
  (7, 'Seafood', 3),
  (8, 'Vegetarian', 3);

  CREATE TABLE `items` (
    `id` int(11) NOT NULL,
    `name` varchar(255) DEFAULT NULL,
    `short_description` varchar(255) NOT NULL,
    `long_description` TEXT NULL,
    `image_url` varchar(255) NOT NULL,
    `category_id` int(11) NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  INSERT INTO `items` (`id`, `name`, `short_description`, `long_description`, `image_url`, `category_id`) VALUES
  (1, '300g Beef Rump', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'https://www.weekendnotes.com/im/005/01/pub-lunches-brisbane1.jpg', 3),
  (2, 'Something special', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'https://img.static-bookatable.com/forge-bar-bank-st-pauls-london-6.jpg?id=016b47e65a961bfb312418db73c8875a.jpg&404=bat2/404-restaurant.jpg&width=600&height=400&scale=both&mode=crop', 2),
  (3, '200g Pork Belly', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'https://media.lasvegasweekly.com/img/photos/2014/05/21/scaled.SportsLifeBar_0002_t1000.jpg', 3),
  (4, 'Breakfast Platter', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'http://www4.pictures.zimbio.com/mp/LGqFU5M6JsPl.jpg', 3),
  (5, 'Asian Platter', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'https://www.davy.co.uk/_assets/2016/02/Davys_033_Meat_Platter_0067-600x400_c.jpg', 3),
  (6, 'Indian Platter', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'http://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/08/taco-bar-wedding-food/x.jpg', 3),
  (7, 'Loaded Fries', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'https://sduptownnews.com/wp-content/uploads/2016/02/Pardon-My-French-duck-confit-poutineweb.jpg', 3),
  (8, 'Lamb Shank', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'http://foodsafetyproductsandservices.com/wp-content/uploads/2018/03/Special-At-Elephant-Bar.jpg', 3),
  (9, 'Crab Roll', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'https://www.seriouseats.com/images/20101213-Island-Creek-Oyster-Bar-11.jpg', 2),
  (10, 'Hot pot', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'https://www.ghanayello.com/img/gh/k/1498566195-13-a-a-chop-bar.jpg', 3),
  (11, 'Something special', 'With BBQ Sauce, Beer Battered Chips, Salad & Apple Slaw or Potato & Vegetables', 'sample', 'https://img.static-bookatable.com/forge-bar-bank-st-pauls-london-6.jpg?id=016b47e65a961bfb312418db73c8875a.jpg&404=bat2/404-restaurant.jpg&width=600&height=400&scale=both&mode=crop', 2);

  CREATE TABLE `item_sizes` (
    `id` int(11) NOT NULL,
    `name` varchar(255) DEFAULT NULL,
    `short_description` varchar(255) NULL,
    `long_description` TEXT NULL,
    `image_url` varchar(255) NULL,
    `sku` varchar(50) NULL,
    `item_id` INT(11) NOT NULL,
    `price_in_dollars` DECIMAL(6,2) NOT NULL,
    `quantity` SMALLINT(5) NOT NULL,
    `kj` SMALLINT(6) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `item_sizes`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `item_sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  INSERT INTO `item_sizes` (`id`, `name`, `short_description`, `long_description`, `image_url`, `sku`, `item_id`, `price_in_dollars`, `quantity`, `kj`) VALUES
  (1, '300g', '', '', '', NULL, 1, 30.00, 1, 3000),
  (2, '350g', '', '', '', NULL, 2, 32.00, 1, 3200),
  (3, 'Small', '', '', '', NULL, 2, 28.00, 1, 2800),
  (4, 'Medium', '', '', '', NULL, 2, 30.00, 1, 3000),
  (5, 'Medium', '', '', '', NULL, 6, 38.00, 1, 4000),
  (6, 'Large', '', '', '', NULL, 6, 44.00, 1, 9999);

  CREATE TABLE `item_options` (
    `id` int(11) NOT NULL,
    `property` varchar(255) NOT NULL,
    `type` varchar(255) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `item_options`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `item_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  CREATE TABLE `item_option_values` (
    `id` int(11) NOT NULL,
    `item_option_id` int(11) NOT NULL,
    `selected` TINYINT(1) NOT NULL,
    `value` varchar(255) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `item_option_values`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `item_option_values`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;



  CREATE TABLE `specials` (
    `id` int(11) NOT NULL,
    `name` varchar(255) DEFAULT NULL,
    `description` TEXT NULL,
    `highlight` TINYINT(1) NOT NULL,
    `type` varchar(100) NOT NULL,
    `price_type` varchar(100) NOT NULL,
    `price_in_dollars` DECIMAL(6,2) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `specials`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `specials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  INSERT INTO `specials` (`id`, `name`, `description`, `highlight`, `type`, `price_type`, `price_in_dollars`) VALUES
  (1, 'Half Price Tuesday', 'On Tuesdays certain meals are half price', 1, 'percent', 'percent', 50.00),
  (2, '5 Off', '5 dollars off a meal', 1, 'fixed', 'fixed', 5.00),
  (3, 'Free Fries', 'Free fries', 1, 'fixed', 'fixed', 0.00);


  CREATE TABLE `tags` (
    `id` int(11) NOT NULL,
    `tag_name` varchar(255) NOT NULL,   
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  CREATE TABLE `tagged_items` (
    `id` int(11) NOT NULL,
    `tag_id` int(11) NOT NULL,
    `item_id` int(11) NOT NULL,   
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `tagged_items`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `tagged_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;



  CREATE TABLE `orders` (
    `id` int(11) NOT NULL,
    `name` varchar(255) NOT NULL,
    `total_price` SMALLINT(5) NOT NULL,   
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  
  CREATE TABLE `order_items` (
    `id` int(11) NOT NULL,
    `order_id` int(11) NOT NULL,
    `item_id` int(11) NOT NULL,       
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  CREATE TABLE `order_options` (
    `id` int(11) NOT NULL,
    `order_item_id` int(11) NOT NULL,
    `item_option_id` int (11) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `order_options`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `order_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  CREATE TABLE `order_specials` (
    `id` int(11) NOT NULL,
    `order_item_id` int(11) NOT NULL,
    `item_special_id` int (11) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `order_specials`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `order_specials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  CREATE TABLE `order_extras` (
    `id` int(11) NOT NULL,
    `order_item_id` int(11) NOT NULL,
    `item_extra_id` int (11) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  ALTER TABLE `order_extras`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `order_extras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

 
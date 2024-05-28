const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbCatdata => {
      if (!dbCatdata) {
        res.status(404).json({ message: 'No categories found' });
        return;
      }
      res.json(dbCatdata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbCatdata => {
      if (!dbCatdata) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCatdata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,
  })
    .then(dbCategorydata => res.json(dbCategorydata))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Update a category by ID
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name, // Update this field
    },
    {
      where: {
        id: req.params.id, // Specify the category ID
      },
    }
  )
    .then((affectedRows) => {
      if (affectedRows[0] === 0) {
        return res.status(404).json({ message: 'No category found with this id' });
      }
      res.json({ message: 'Category updated successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCatdata => {
      if (!dbCatdata) {
        res.status(404).json({ message: 'no category found with this id' });
        return;
      }
      res.json(dbCatdata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);

    });
});

module.exports = router;
